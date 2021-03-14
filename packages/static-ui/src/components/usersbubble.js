import React from "react";
import BubbleUI from "./bubbleui";
import { useStyletron } from "baseui";
import { Card, StyledAction, StyledBody, StyledThumbnail } from "baseui/card";
import { get } from "lodash";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

const Options = {
  size: 200,
  minSize: 100,
  gutter: 16,
  provideProps: true,
  numCols: 5,
  fringeWidth: 100,
  xRadius: 200,
  yRadius: 140,
  cornerRadius: 30,
  showGuides: false,
  compact: true,
  gravitation: 5,
};

export default function UsersBubble({ users }) {
  const [css] = useStyletron();
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);
  return (
    <>
      {!currentUser && (
        <Card
          title={<FormattedMessage id="clickTheBubblesToLearnAboutEachOfUs" />}
          overrides={{
            Root: {
              style: {
                maxWidth: "500px",
                maxHeight: "800px",
                borderTopWidth: "0px",
                borderLeftWidth: "0px",
                borderRightWidth: "0px",
                borderBottomColor: "transparent",
                paddingBottom: "6px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "3rem",
                backgroundColor: "transparent",
              },
            },
            Title: {
              style: {
                color: "red",
              },
            },
          }}
        />
      )}
      <BubbleUI
        options={Options}
        className={css({
          width: "100%",
          maxWidth: "1500px",
          height: "700px",
          borderRadius: "50px",
          marginLeft: "auto",
          marginRight: "auto",
        })}
      >
        {users.map((item) => (
          <button
            key={item.email}
            type="button"
            aria-label={get(item, "name")}
            className={css({
              width: "100%",
              borderRadius: "50%",
              height: "100%",
              border: "black solid 1px",
              marginTop: "10%",
              backgroundImage: `url(${get(item, "avatar.url")})`,
              backgroundSize: "contain",
              outline: "none",
              ":hover": {
                opacity: "0.5",
              },
              opacity: item === currentUser ? "0.5" : "1",
            })}
            onClick={() => {
              setCurrentUser(item);
            }}
          />
        ))}
      </BubbleUI>
      {currentUser && (
        <Card
          overrides={{
            Root: {
              style: {
                textAlign: "left",
                width: "100%",
                maxWidth: "500px",
                minHeight: "200px",
                borderTopWidth: "0px",
                borderLeftWidth: "0px",
                borderRightWidth: "0px",
                paddingBottom: "6px",
                paddingTop: "6px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "-30px",
              },
            },
          }}
          title={`${get(
            currentUser,
            "name",
            <FormattedMessage id="placeholderName" />
          )} (${get(currentUser, "nickname")})`}
        >
          <StyledThumbnail src={get(currentUser, "avatar.url")} />
          <StyledBody>{get(currentUser, "description")}</StyledBody>
          <StyledAction>Email: {get(currentUser, "email")}</StyledAction>
        </Card>
      )}
    </>
  );
}
