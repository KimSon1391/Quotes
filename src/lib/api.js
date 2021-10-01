const DOMAIN = "https://quotes-react-router-818a0-default-rtdb.firebaseio.com/";

export const getAllQuotes = async () => {
  const response = await fetch(`${DOMAIN}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes data.");
  }

  const transformQuotes = [];

  for (const key in data) {
    const quotesObj = {
      id: key,
      ...data[key],
    };

    transformQuotes.push(quotesObj);
  }

  return transformQuotes;
};

export const addQuotes = async (quoteData) => {
  const response = await fetch(`${DOMAIN}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add quotes data.");
  }

  return null;
};

export const getSingerQuote = async (quoteId) => {
  const response = await fetch(`${DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
};

export const getAllComments = async (quoteId) => {
  const response = await fetch(`${DOMAIN}/comments/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
};

export async function addComment(requestData) {
  const response = await fetch(
    `${DOMAIN}/comments/${requestData.quoteId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}
