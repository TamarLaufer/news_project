const mainURL = "http://api.mediastack.com/v1/news";

export default {
  newsurl: (accsessKey, category) =>
    `${mainURL}?access_key=${accsessKey}&categories=${category}`,
};
