import React from "react";
import { TLoading } from "src/types/shared";

interface ILoadingProps {
  loading: TLoading;
  error: null | string;
  children: React.ReactNode;
}

const Loading = ({ loading, error, children }: ILoadingProps) => {
  switch (loading) {
    case "pending":
      return <div>loading ...</div>;

    case "failed":
      return <div>the error: {error}</div>;

    case "succeeded":
      return <>{children}</>;

    default:
      return <div>Unknown loading state</div>;
  }
};

export default Loading;
