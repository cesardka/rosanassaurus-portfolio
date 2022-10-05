import Ztext from "react-ztext";

export const Page1 = () => (
  <article id="page-one-intro">
    <div className="container">
      <Ztext
        depth="1rem"
        direction="both"
        event="pointer"
        eventRotation="25deg"
        eventDirection="default"
        fade={false}
        layers={10}
        perspective="500px"
        style={{
          fontSize: "10rem",
          color: "var(--pink)",
        }}
      >
        <img
          src="/assets/page1-nome.png"
          alt="Rosana"
          style={{ width: "400px", placeSelf: "flex-end" }}
        />
      </Ztext>
      <img
        src="/assets/page1.png"
        alt="Corpo sem face"
        style={{ height: "80vh" }}
      />
    </div>
  </article>
);
