import React from "react";
import BubbleUI from "./bubbleui";
import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { StatefulTooltip, TRIGGER_TYPE, PLACEMENT } from "baseui/tooltip";
import { get } from "lodash";
import { Label1, Label2, Paragraph1 } from "baseui/typography";

const Options = {
  size: 200,
  minSize: 100,
  gutter: 16,
  provideProps: true,
  numCols: 5,
  fringeWidth: 100,
  xRadius: 300,
  yRadius: 140,
  cornerRadius: 30,
  showGuides: false,
  compact: true,
  gravitation: 5,
};

export default function UsersBubble({ users }) {
  const [css] = useStyletron();
  return (
    <BubbleUI
      options={Options}
      className={css({
        width: "100%",
        maxWidth: "1000px",
        height: "500px",
        borderRadius: "50px",
        marginLeft: "auto",
        marginRight: "auto",
      })}
    >
      {users.map((item) => (
        <StatefulTooltip
          placement={PLACEMENT.top}
          triggerType={TRIGGER_TYPE.hover}
          overrides={{
            Inner: {
              style: ({ $theme }) => ({
                backgroundColor: $theme.colors.white,
              }),
            },
          }}
          content={() => (
            <Block padding={"20px"}>
              <Label1>
                {get(item, "name", "Name")} ({get(item, "nickname", "nickname")}
                )
              </Label1>
              <Label2 $as="a" href={`mailto:${get(item, "email", "")}`}>
                {get(item, "email", "")}
              </Label2>
              <Paragraph1>{get(item, "description", "Description")}</Paragraph1>
            </Block>
          )}
          focusLock
          returnFocus
          renderAll
          showArrow
        >
          <div
            key={item.email}
            className={css({
              width: "100%",
              borderRadius: "50%",
              height: "100%",
              border: "black solid 1px",
              marginTop: "10%",
              backgroundImage: `url(${get(item, "avatar.url")})`,
              backgroundSize: "contain",
              ":hover": {
                opacity: "0.5",
              },
            })}
          />
        </StatefulTooltip>
      ))}
    </BubbleUI>
  );
}
