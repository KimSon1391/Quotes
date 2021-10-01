import { Route, useParams, useRouteMatch } from "react-router";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import { Link } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import { getSingerQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const math = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingerQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Route path={`${math.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${math.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${math.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
