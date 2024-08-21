const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
      return (
          <img
              src={message.attachments[0].file}
              alt="message-attachment"
              className="message-image"
              style={{ float: 'right' }}
          />
      );
  }

  return (
      <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
          {stripHtml(message.text)}
      </div>
  );
};

export default MyMessage;