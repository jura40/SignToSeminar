import React from "react";

const sem3 = () => {
  return (
    <div>
      <div>
        <a
          href="index.html"
          style={{ color: "black", margin: "50px", fontSize: "25px" }}
        >
          HOME
        </a>
      </div>
      <article style={{ margin: "50px 0px 20px 90px", fontSize: "20px" }}>
        Kursen går igenom steg-för-steg varför vi blir nervösa <br />
        för att sedan presentera både fysiska och mentala sätt att handskas{" "}
        <br />
        med nervositet så att du kan leva med den, och kanske till och med få en
        kick av den. <br />
        Alla kan nämligen lära sig att handskas med sin nervositet, och sluta
        låta <br />
        den begränsa livet. <br />
        jöregn er Här varvas teori och praktik där vi jobbar med interaktiva
        övningar på ett lättsamt <br />
        och lärorikt sätt. På kursen får träffa andra i samma situation vilket
        gör att ni <br />
        tillsammans kan växa och utgå ifrån er egen situation. Av erfarenhet vet
        vi att gruppen <br />
        bör hållas liten för att vi ska våga utmana och övervinna vår tvekan
        inför det vi <br />
        tycker är obehagligt, därför har vi aldrig mer än 12 deltagare på vår
        våga-tala-kurs. <br />
        Kursen är ett utmärkt första steg för dig som har målet att gå vår
        populära tvådagarskurs <br />i retorik och presentationsteknik Snacka
        Snyggt.
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

export default sem3;