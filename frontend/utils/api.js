import axios from 'axios';

function downloadConversations() {
  axios.get('/')
    .then((response) => {
      const data = response.data;
      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'conversations.json');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error('Error downloading conversations:', error);
    });
}

export { downloadConversations };
