import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import { Hero } from "../models/index.js";
import { CustomError } from "../utils/index.js";

function sortSlides(slides = []) {
  return [...slides].sort((first, second) => (first.displayOrder || 0) - (second.displayOrder || 0));
}

function mapHeroPayload(payload = {}) {
  const mappedPayload = {};

  if ("title" in payload) mappedPayload.title = payload.title;
  if ("tagline" in payload) mappedPayload.tagline = payload.tagline;
  if ("primaryCta" in payload) mappedPayload.primaryCta = payload.primaryCta;
  if ("secondaryCta" in payload) mappedPayload.secondaryCta = payload.secondaryCta;
  if ("highlights" in payload) mappedPayload.highlights = payload.highlights;
  if ("slides" in payload) mappedPayload.slides = sortSlides(payload.slides);
  if ("isActive" in payload) mappedPayload.isActive = payload.isActive;

  return mappedPayload;
}

export async function getHeroes() {
  const heroes = await Hero.find().sort({ isActive: -1, createdAt: -1 }).lean();
  return heroes.map((hero) => ({
    ...hero,
    slides: sortSlides(hero.slides)
  }));
}

export async function getHeroById(id) {
  const hero = await Hero.findById(id).lean();

  if (!hero) {
    throw new CustomError(HTTP_STATUS.NOT_FOUND, API_MESSAGES.HERO_NOT_FOUND);
  }

  return {
    ...hero,
    slides: sortSlides(hero.slides)
  };
}

export async function createHero(payload) {
  const hero = await Hero.create(mapHeroPayload(payload));

  return hero;
}

export async function updateHero(id, payload) {
  const hero = await Hero.findByIdAndUpdate(id, mapHeroPayload(payload), {
    new: true,
    runValidators: true
  });

  if (!hero) {
    throw new CustomError(HTTP_STATUS.NOT_FOUND, API_MESSAGES.HERO_NOT_FOUND);
  }

  return hero;
}

export async function deleteHero(id) {
  const hero = await Hero.findByIdAndDelete(id);

  if (!hero) {
    throw new CustomError(HTTP_STATUS.NOT_FOUND, API_MESSAGES.HERO_NOT_FOUND);
  }

  return hero;
}
