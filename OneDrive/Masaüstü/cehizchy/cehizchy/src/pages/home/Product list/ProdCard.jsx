import { useState } from "react";
import "../Product list/prodCard.scss";
import cardImg1 from "../../../assets/images/cardImg1.jpg";
import { FaRegHeart, FaHeart, FaShoppingBasket } from "react-icons/fa";
import { RiRedPacketLine } from "react-icons/ri";
const ProdCard = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const countLetters = (text, maxLenght) => {
    if (text.length > maxLenght) {
      return text.slice(0, maxLenght) + "...";
    }
    return text;
  };

  return (
    <section className="prodCard_sec">
      <div className="prodCard">
        <div className="badge">Səbətdə 20% endirim</div>
        <div className="card_image">
          <img className="card_img" src={cardImg1} alt="Product" />
        </div>
        <div className="cardInformations">
          <div className="prod_name_brand">
            <h2 className="prod_brend">Prestige</h2>
            <p className="prod_name">
              Blender PR-7536 Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>

          <div className="prod_price_div">
            <p className="others_price">
              <span className="strike">125AZN</span>
            </p>
            <p className="prod_price">
              100 <span>AZN</span>
            </p>
          </div>
          <div className="border_bottom"></div>
        </div>
        <div className="card_icons">
          <button
            className={`like_button ${liked ? "liked" : ""}`}
            onClick={toggleLike}
            onMouseEnter={(e) =>
              !liked && (e.target.style.color = "rgb(244, 67, 54)")
            } // Hover effect only if not liked
            onMouseLeave={(e) => !liked && (e.target.style.color = "#333")} // Return to default color on mouse leave
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button className="add_card_button">
            <FaShoppingBasket />
          </button>
          <div className="free_packaging">
            <RiRedPacketLine className="free_packaging_icon" />
            <span className="free_packaging_text">Free Packaging</span>
          </div>
        </div>
      </div>
      <div className="prodCard">
        <div className="badge">Səbətdə 20% endirim</div>
        <div className="card_image">
          <img className="card_img" src={cardImg1} alt="Product" />
        </div>
        <div className="cardInformations">
          <div className="prod_name_brand">
            <h2 className="prod_brend">Prestige</h2>
            <p className="prod_name">
              {countLetters(
                "Blender PR-7536 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                65
              )}
            </p>
          </div>

          <div className="prod_price_div">
            <p className="others_price">
              <span className="strike">125AZN</span>
            </p>
            <p className="prod_price">
              100 <span>AZN</span>
            </p>
          </div>
          <div className="border_bottom"></div>
        </div>
        <div className="card_icons">
          <button
            className={`like_button ${liked ? "liked" : ""}`}
            onClick={toggleLike}
            onMouseEnter={(e) =>
              !liked && (e.target.style.color = "rgb(244, 67, 54)")
            } // Hover effect only if not liked
            onMouseLeave={(e) => !liked && (e.target.style.color = "#333")} // Return to default color on mouse leave
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button className="add_card_button">
            <FaShoppingBasket />
          </button>
          <div className="free_packaging">
            <RiRedPacketLine className="free_packaging_icon" />
            <span className="free_packaging_text">Free Packaging</span>
          </div>
        </div>
      </div>
      <div className="prodCard">
        <div className="badge">Səbətdə 20% endirim</div>
        <div className="card_image">
          <img className="card_img" src={cardImg1} alt="Product" />
        </div>
        <div className="cardInformations">
          <div className="prod_name_brand">
            <h2 className="prod_brend">Prestige</h2>
            <p className="prod_name">
              Blender PR-7536 Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>

          <div className="prod_price_div">
            <p className="others_price">
              <span className="strike">125AZN</span>
            </p>
            <p className="prod_price">
              100 <span>AZN</span>
            </p>
          </div>
          <div className="border_bottom"></div>
        </div>
        <div className="card_icons">
          <button
            className={`like_button ${liked ? "liked" : ""}`}
            onClick={toggleLike}
            onMouseEnter={(e) =>
              !liked && (e.target.style.color = "rgb(244, 67, 54)")
            } // Hover effect only if not liked
            onMouseLeave={(e) => !liked && (e.target.style.color = "#333")} // Return to default color on mouse leave
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button className="add_card_button">
            <FaShoppingBasket />
          </button>
          <div className="free_packaging">
            <RiRedPacketLine className="free_packaging_icon" />
            <span className="free_packaging_text">Free Packaging</span>
          </div>
        </div>
      </div>
      <div className="prodCard">
        <div className="badge">Səbətdə 20% endirim</div>
        <div className="card_image">
          <img className="card_img" src={cardImg1} alt="Product" />
        </div>
        <div className="cardInformations">
          <div className="prod_name_brand">
            <h2 className="prod_brend">Prestige</h2>
            <p className="prod_name">
              Blender PR-7536 Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>

          <div className="prod_price_div">
            <p className="others_price">
              <span className="strike">125AZN</span>
            </p>
            <p className="prod_price">
              100 <span>AZN</span>
            </p>
          </div>
          <div className="border_bottom"></div>
        </div>
        <div className="card_icons">
          <button
            className={`like_button ${liked ? "liked" : ""}`}
            onClick={toggleLike}
            onMouseEnter={(e) =>
              !liked && (e.target.style.color = "rgb(244, 67, 54)")
            } // Hover effect only if not liked
            onMouseLeave={(e) => !liked && (e.target.style.color = "#333")} // Return to default color on mouse leave
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button className="add_card_button">
            <FaShoppingBasket />
          </button>
          <div className="free_packaging">
            <RiRedPacketLine className="free_packaging_icon" />
            <span className="free_packaging_text">Free Packaging</span>
          </div>
        </div>
      </div>
      <div className="prodCard">
        <div className="badge">Səbətdə 20% endirim</div>
        <div className="card_image">
          <img className="card_img" src={cardImg1} alt="Product" />
        </div>
        <div className="cardInformations">
          <div className="prod_name_brand">
            <h2 className="prod_brend">Prestige</h2>
            <p className="prod_name">
              Blender PR-7536 Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>

          <div className="prod_price_div">
            <p className="others_price">
              <span className="strike">125AZN</span>
            </p>
            <p className="prod_price">
              100 <span>AZN</span>
            </p>
          </div>
          <div className="border_bottom"></div>
        </div>
        <div className="card_icons">
          <button
            className={`like_button ${liked ? "liked" : ""}`}
            onClick={toggleLike}
            onMouseEnter={(e) =>
              !liked && (e.target.style.color = "rgb(244, 67, 54)")
            } // Hover effect only if not liked
            onMouseLeave={(e) => !liked && (e.target.style.color = "#333")} // Return to default color on mouse leave
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button className="add_card_button">
            <FaShoppingBasket />
          </button>
          <div className="free_packaging">
            <RiRedPacketLine className="free_packaging_icon" />
            <span className="free_packaging_text">Free Packaging</span>
          </div>
        </div>
      </div>
      <div className="prodCard">
        <div className="badge">Səbətdə 20% endirim</div>
        <div className="card_image">
          <img className="card_img" src={cardImg1} alt="Product" />
        </div>
        <div className="cardInformations">
          <div className="prod_name_brand">
            <h2 className="prod_brend">Prestige</h2>
            <p className="prod_name">
              Blender PR-7536 Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>

          <div className="prod_price_div">
            <p className="others_price">
              <span className="strike">125AZN</span>
            </p>
            <p className="prod_price">
              100 <span>AZN</span>
            </p>
          </div>
          <div className="border_bottom"></div>
        </div>
        <div className="card_icons">
          <button
            className={`like_button ${liked ? "liked" : ""}`}
            onClick={toggleLike}
            onMouseEnter={(e) =>
              !liked && (e.target.style.color = "rgb(244, 67, 54)")
            } // Hover effect only if not liked
            onMouseLeave={(e) => !liked && (e.target.style.color = "#333")} // Return to default color on mouse leave
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button className="add_card_button">
            <FaShoppingBasket />
          </button>
          <div className="free_packaging">
            <RiRedPacketLine className="free_packaging_icon" />
            <span className="free_packaging_text">Free Packaging</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProdCard;
