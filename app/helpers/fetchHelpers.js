/* eslint-disable no-else-return */

export const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(response);
  }
};

export const giphySearchResponseToUsableData = (response) => response.data;
  // const subredditEntries = response.data.map((postEntry) => {
  //   // const { slug, url, embed_url, import_datetime, trending_datetime, images } = postEntry;
  //   // return { slug, url, embed_url, import_datetime, trending_datetime, images };
  // });
  //
  // return {
  //   subredditEntries,
  //   after,
  // };
// };
