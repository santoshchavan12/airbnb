import React from "react";
import star from "../../public/images/star.png"
import cover from "../../public/images/cover.jpg";

export default function Card(props) {
    console.log("../images/" + props.img);
    return (
      <div className="card">
        <img
          src={cover}
          className="card--image"
          alt="jpg"
        ></img>
        <div className="card-stats">
          <img src={star} alt="star" style={{ height: "14px" }}></img>
          <span>{props.rating}</span>
          <span className="grey">({props.reviewCount}) </span>
          <span className="grey">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p>
          <b>From ${props.price}</b> / person
        </p>
      </div>

      /************* MY CODE ********************/

      /*
    <div className="all-cards">
      <div className="card">
        <div className="card--details">
          <img src={cover} alt="img" className="card--img" />
          <div class="rating">
            *
            <span style={{ color: "grey" }}>
              <b>5.0</b> (30) .USA
            </span>
          </div>
          <p classNAme="card--desc"> learn wedding photography</p>
          <div className="card--cost">
            <b>from $136</b>/person
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card--details">
          <img src={cover} alt="img" className="card--img" />
          <div class="rating">
            *
            <span style={{ color: "grey" }}>
              <b>5.0</b> (30) .USA
            </span>
          </div>
          <p classNAme="card--desc"> learn wedding photography</p>
          <div className="card--cost">
            <b>from $136</b>/person
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card--details">
          <img src={cover} alt="img" className="card--img" />
          <div class="rating">
            *
            <span style={{ color: "grey" }}>
              <b>5.0</b> (30) .USA
            </span>
          </div>
          <p classNAme="card--desc"> learn wedding photography</p>
          <div className="card--cost">
            <b>from $136</b>/person
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card--details">
          <img src={cover} alt="img" className="card--img" />
          <div class="rating">
            *
            <span style={{ color: "grey" }}>
              <b>5.0</b> (30) .USA
            </span>
          </div>
          <p classNAme="card--desc"> learn wedding photography</p>
          <div className="card--cost">
            <b>from $136</b>/person
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card--details">
          <img src={cover} alt="img" className="card--img" />
          <div class="rating">
            *
            <span style={{ color: "grey" }}>
              <b>5.0</b> (30) .USA
            </span>
          </div>
          <p classNAme="card--desc"> learn wedding photography</p>
          <div className="card--cost">
            <b>from $136</b>/person
          </div>
        </div>
      </div>
    </div> */
    );
}
