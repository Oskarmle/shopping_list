import React from "react";
import Form from "@/components/molecules/form";
import Feed from "@/components/molecules/feed";

export default function index() {
  return (
    <div className="box">
      <div className="container">
        <Form></Form>
        <Feed></Feed>
      </div>
    </div>
  );
}
