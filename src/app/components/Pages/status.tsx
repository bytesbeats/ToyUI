"use client";

import Container from "@components/Container";
import { useLanguage } from "@stores/hooks";
import { useEffect, useRef } from "react";

export default function StatusPage() {
  const [language] = useLanguage();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      console.debug("🔍 Status页面初始化，当前语言:", language);
      isFirstRender.current = false;
    }
    // 组件清理函数
    return () => {
      isFirstRender.current = true;
    };
  }, []);

  return (
    <Container className="flex justify-center items-center">
      <button className="btn btn-success border-1 border-dashed border-success-content active:btn-active">
        Status
      </button>
    </Container>
  );
}
