import React from "react";

const sem2 = () => {
  return (
    <div>
      <a
        href="index.html"
        style={{ color: "black", margin: "90px", fontSize: "25px" }}
      >
        HOME
      </a>
      <article style={{ margin: "90px", fontSize: "20px" }}>
        KA-DAGEN 2021 KA-DAGEN är en av Sveriges största mötesplatser för
        kontrollansvariga <br />
        och andra som arbetar med frågor kring bygglagstiftning och byggteknik.{" "}
        <br />
        Förutom ny kunskap och information får du som deltagare även möjlighet{" "}
        <br />
        att ställa dina frågor till experterna, nätverka och skapa nya
        relationer. <br />
        KA-dagen genomförs på våren 2021 <br />
        Varmt välkommen!
      </article>
      <div>
        {" "}
        <a
          href="seminarium.html"
          style={{ margin: "50px 0px 0px 90px", fontSize: "25px" }}
        >
          back
        </a>
      </div>
      <div>
        <form>
          <input
            type="email"
            placeholder="email"
            style={{ margin: "10px 0px 0px 90px" }}
          ></input>
          <div>
            <input
              type="förname"
              placeholder="förnamn"
              style={{ margin: "10px 0px 0px 90px" }}
            ></input>
          </div>
          <div>
            <input
              type="efternamn"
              placeholder="efternamn"
              style={{ margin: "10px 0px 0px 90px" }}
            ></input>
          </div>
          <input type="submit" style={{ margin: "10px 0px 0px 90px" }}></input>
        </form>
      </div>
    </div>
  );
};

export default sem2;
