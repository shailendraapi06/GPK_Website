import React, { useState } from "react";
import { MessagesIcon, SearchIcon, DeleteIcon, TrashIcon } from "../../components/admin/Icons";
import { DeleteConfirmationModal } from "../../components/admin/DeleteConfirmationModal";

export function AdminContactMessagesPage() {
  const [messages, setMessages] = useState([
    {
      id: "msg-1",
      name: "Suresh Sharma",
      email: "suresh.sharma@gmail.com",
      phone: "+91 98765 43210",
      subject: "Admission query for Civil Engineering",
      body: "Hello Admissions Office,\n\nI want to inquire about the diploma lateral entry admission procedure in Civil Engineering. I have completed my 12th class with Physics and Mathematics. Are there seats vacant? What is the fee structure for regular vs self-finance?\n\nKindly guide me.\n\nRegards,\nSuresh Sharma",
      date: "2026-07-22",
      status: "unread"
    },
    {
      id: "msg-2",
      name: "Ananya Gupta",
      email: "ananya.g@yahoo.com",
      phone: "+91 76543 21098",
      subject: "Syllabus details for AIML Diploma",
      body: "Dear Registrar,\n\nCould you please share the detailed semester-wise syllabus PDF or official link for the newly introduced Artificial Intelligence & Machine Learning course? The syllabus link on the main portal is currently showing a PDF placeholder.\n\nThank you,\nAnanya Gupta",
      date: "2026-07-21",
      status: "read"
    },
    {
      id: "msg-3",
      name: "Rajesh Patel",
      email: "rajesh_p@recruitment.org",
      phone: "+91 87654 32109",
      subject: "Placement Drive Coordination",
      body: "Dear Placement Officer,\n\nWe represent BuildCraft India Pvt Ltd. We are planning a regional campus recruitment drive for final-year Diploma students in Civil and Mechanical disciplines around mid-August. Please let us know the placement registration schedules and availability of testing infrastructure.\n\nSincerely,\nRajesh Patel\nHR Executive",
      date: "2026-07-20",
      status: "unread"
    },
    {
      id: "msg-4",
      name: "Rahul Verma",
      email: "rahul.verma@outlook.com",
      phone: "+91 99887 76655",
      subject: "Hostel facility inquiries",
      body: "Hello admin,\n\nIs hostel accommodation available for first-year electrical diploma students coming from outer districts? What is the hostel fee, mess charge, and warden contact number?\n\nThanks,\nRahul",
      date: "2026-07-18",
      status: "read"
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [replyText, setReplyText] = useState("");
  const [replySentMsg, setReplySentMsg] = useState(false);

  // Delete modal state
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [msgToDelete, setMsgToDelete] = useState(null);

  // Select message
  const handleSelectMessage = (msg) => {
    setSelectedMessage(msg);
    // Mark as read in state
    setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, status: "read" } : m));
    setReplyText("");
    setReplySentMsg(false);
  };

  // Reply Draft Submission
  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    setReplySentMsg(true);
    setReplyText("");
    setTimeout(() => {
      setReplySentMsg(false);
    }, 4000);
  };

  // Delete message click
  const handleDeleteClick = (msg, e) => {
    e.stopPropagation(); // Avoid selecting it when clicking delete
    setMsgToDelete(msg);
    setIsDeleteOpen(true);
  };

  // Confirm delete
  const handleConfirmDelete = () => {
    if (msgToDelete) {
      setMessages(prev => prev.filter(m => m.id !== msgToDelete.id));
      if (selectedMessage && selectedMessage.id === msgToDelete.id) {
        setSelectedMessage(null);
      }
      setIsDeleteOpen(false);
      setMsgToDelete(null);
    }
  };

  const filteredMessages = messages.filter(msg => 
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="admin-page-header">
        <div className="admin-page-header__info">
          <h1 className="admin-page-header__title">Contact Inquiries Inbox</h1>
          <p className="admin-page-header__desc">Review and respond to messages submitted by visitors, prospective candidates, and corporate recruiters.</p>
        </div>
      </div>

      {/* Split Pane Inbox Layout */}
      <div className="admin-inbox">
        {/* Messages List Panel */}
        <div className="admin-inbox__list">
          <div className="admin-inbox__list-header">
            <div className="admin-search-wrapper" style={{ width: "100%" }}>
              <SearchIcon className="admin-search-icon" />
              <input
                type="text"
                className="admin-search-input"
                placeholder="Search inbox..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="admin-inbox__list-scroll">
            {filteredMessages.length > 0 ? (
              filteredMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`admin-inbox-item ${selectedMessage?.id === msg.id ? "admin-inbox-item--active" : ""} ${msg.status === "unread" ? "admin-inbox-item--unread" : ""}`}
                  onClick={() => handleSelectMessage(msg)}
                >
                  <div className="admin-inbox-item__header">
                    <span className="admin-inbox-item__sender" style={{ fontWeight: msg.status === "unread" ? "var(--font-weight-bold)" : "var(--font-weight-medium)" }}>
                      {msg.name}
                    </span>
                    <span className="admin-inbox-item__date">{msg.date}</span>
                  </div>
                  <div className="admin-inbox-item__subject" style={{ fontWeight: msg.status === "unread" ? "var(--font-weight-bold)" : "var(--font-weight-medium)" }}>
                    {msg.subject}
                  </div>
                  <div className="admin-inbox-item__excerpt">{msg.body.substring(0, 70)}...</div>
                  
                  {/* Delete trigger */}
                  <button 
                    style={{ position: "absolute", bottom: "8px", right: "8px", background: "transparent", color: "var(--color-text-muted)", cursor: "pointer", border: 0 }}
                    onClick={(e) => handleDeleteClick(msg, e)}
                    title="Delete message"
                  >
                    <TrashIcon style={{ width: "14px", height: "14px" }} />
                  </button>
                </div>
              ))
            ) : (
              <div style={{ textAlign: "center", padding: "3rem", color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}>
                No messages found.
              </div>
            )}
          </div>
        </div>

        {/* Message Details Panel */}
        <div className="admin-inbox__detail">
          {selectedMessage ? (
            <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div className="admin-inbox__detail-header">
                <div>
                  <h3 className="admin-inbox__detail-subject">{selectedMessage.subject}</h3>
                  <div className="admin-inbox__detail-sender-info">
                    <span>From: <strong className="admin-inbox__detail-sender-name">{selectedMessage.name}</strong> (<code>{selectedMessage.email}</code>)</span>
                    {selectedMessage.phone && <span>Contact: <strong>{selectedMessage.phone}</strong></span>}
                    <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", marginTop: "0.25rem" }}>Received: {selectedMessage.date}</span>
                  </div>
                </div>
                <button 
                  className="admin-btn admin-btn--secondary admin-btn--danger"
                  style={{ padding: "0.5rem" }}
                  onClick={(e) => handleDeleteClick(selectedMessage, e)}
                  title="Delete Inquiry"
                >
                  <DeleteIcon style={{ width: "16px", height: "16px" }} />
                </button>
              </div>

              <div className="admin-inbox__detail-body">
                {selectedMessage.body}
              </div>

              <div className="admin-inbox__detail-reply">
                {replySentMsg && (
                  <div className="admin-badge admin-badge--success" style={{ display: "block", textAlign: "center", padding: "0.5rem", marginBottom: "1rem", borderRadius: "var(--radius-sm)" }}>
                    Draft Reply sent to {selectedMessage.email}! (Simulated)
                  </div>
                )}
                <form onSubmit={handleSendReply}>
                  <label className="admin-label" htmlFor="replyText">Compose Email Response</label>
                  <textarea
                    id="replyText"
                    className="admin-textarea"
                    rows="4"
                    placeholder={`Reply to ${selectedMessage.name}...`}
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    required
                    style={{ minHeight: "80px", marginBottom: "0.75rem" }}
                  />
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button type="submit" className="admin-btn admin-btn--primary">
                      Send Reply
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="admin-inbox__detail-empty">
              <MessagesIcon />
              <h3>Select an inquiry message</h3>
              <p>Click on any message in the inbox sidebar to view full details and compose email drafts.</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
        itemName={msgToDelete?.subject || ""}
        itemType="contact message"
      />
    </div>
  );
}
