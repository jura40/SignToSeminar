import React from "react";

const sem1 = () => {
  return (
    <div>
      <a href="index.html" style={{ color: "black", margin: "50px" }}>
        HOME
      </a>

      <article style={{ margin: "50px 0px 0px 90px", fontSize: "20px" }}>
        Kursbeskrivning
        <p>Retorikkurs i presentationsteknik.</p>
        <p>
          Det här är kursen för er som vill hålla presentationer som lyssnarna
          inte vill ska ta slut.
        </p>
        <p>Och som de kommer att prata om länge.</p>
        <p>
          Denna utbildning hjälper er att addera en wow-effekt till era
          presentationer.
        </p>
        <p>
          Ni får lära er att använda klädsel, röst, kroppsspråk och rum på ett
          strategiskt sätt för att förstärka budskapet.
        </p>
        <p>
          Vi skräddarsyr utbildningen specifikt för ert företag, och ni väljer
          själva plats, utformning och kurslängd (hel-, halv- eller
          tvådagarskurs).
        </p>
        <p>
          Vi erbjuder även kortare föreläsningar och workshops på ämnet om det
          passar er bättre.
        </p>
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

export default sem1;
