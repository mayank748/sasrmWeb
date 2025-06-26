import React from "react";

export function Card(props: { children: any; className?: string }) {
    return <div className={`bg-white rounded-lg shadow ${props.className ?? ""}`}>{props.children}</div>;
  }
  
  export function CardContent(props: { children: any; className?: string }) {
    return <div className={`p-4 ${props.className ?? ""}`}>{props.children}</div>;
  }
  
