import React from "react";
const SvgComponent = props => (
  <svg
    height={600}
    width={320}
    style={{
      position: "relative"
    }}
    overflow="hidden"
    {...props}
  >
    <image
      width={320}
      height={600}
      preserveAspectRatio="none"
      xlinkHref="http://eddyzhang1986.gitee.io/memefood/img/background.jpeg"
      style={{
        WebkitTapHighlightColor: "transparent"
      }}
    />
    <image
      x={120}
      y={192}
      width={100}
      height={100}
      preserveAspectRatio="none"
      onClick={() => {
        alert("test");
      }}
      xlinkHref="http://eddyzhang1986.gitee.io/memefood/img/avatar.jpg"
      style={{
        WebkitTapHighlightColor: "transparent"
      }}
    />
    <foreignObject width={130} height={36} x={99} y={98}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          wordBreak: "break-all"
        }}
        fontSize={30}
        color="#00f"
      >
        {"\u4F1A\u5458\u540D\u79F0"}
      </div>
    </foreignObject>
  </svg>
);
export default SvgComponent;
