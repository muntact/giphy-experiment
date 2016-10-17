/* eslint-disable no-else-return */

export const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(response);
  }
};

export const subResponseToUsableData = (response) => {
  const { after, children } = response.data;
  const subredditEntries = children.map((postEntry) => {
    const {
      author,
      clicked,
      created_utc,
      edited,
      score,
      domain,
      num_comments,
      title,
      url,
    } = postEntry.data;

    return {
      author, clicked, created_utc, edited, score, domain, num_comments, title, url,
    };
  });

  return {
    subredditEntries,
    after,
  };
};
