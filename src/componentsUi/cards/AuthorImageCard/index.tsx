import Link from "next/link";
import Image from "next/image";

export const AuthorImageCard = ({
  title,
  image,
  description,
  wlink,
  link,
  height,
  name,
  leaders,
  textArray,
  onlyTitle,
}: any) => {
  return (
    <div className="card-landscape focus-area-card" style={{ height: height }}>
      <div className="focus-area-sub-cont1">
        <img className="focus-area-img" src={image.src} alt="" />
      </div>
      <div className="focus-area-sub-cont2">
        <div className={leaders ? "fac-sd1" : "fac-sd1 width60p"}>
          {leaders && !onlyTitle ? (
            <div style={{ marginBottom: "0.7rem" }}>
              <h4 className="card-sub-title">{name}</h4>
              <h5 className="card-sub-title-sub">{title}</h5>
            </div>
          ) : (
            <h4 className="card-sub-title">{title}</h4>
          )}

          <p className="p-text">{description}</p>
        </div>
      </div>
    </div>
  );
};
