import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import {
  createHero,
  deleteHero,
  getHeroById,
  getHeroes,
  updateHero
} from "../services/index.js";
import { sendSuccessResponse } from "../utils/index.js";

export async function listHeroes(_request, response) {
  const heroes = await getHeroes();

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.HERO_LIST_FETCHED,
    data: { heroes }
  });
}

export async function showHero(request, response) {
  const hero = await getHeroById(request.params.id);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.HERO_FETCHED,
    data: { hero }
  });
}

export async function storeHero(request, response) {
  const hero = await createHero(request.body);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.CREATED,
    message: API_MESSAGES.HERO_CREATED,
    data: { hero }
  });
}

export async function editHero(request, response) {
  const hero = await updateHero(request.params.id, request.body);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.HERO_UPDATED,
    data: { hero }
  });
}

export async function removeHero(request, response) {
  const hero = await deleteHero(request.params.id);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.HERO_DELETED,
    data: { hero }
  });
}
