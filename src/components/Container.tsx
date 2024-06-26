import styled from "styled-components";
// import location from "/public/images/icon-location.svg";
// import share from "/public/images/icon-website.svg";
// import twitter from "/public/images/icon-twitter.svg";
// import company from "/public/images/icon-company.svg";
import User from "../Types/User";
interface ContainerProps {
  user: User;
  mode: boolean;
}
function Container({ user, mode }: ContainerProps) {
  return (
    <Contianerdiv mode={mode}>
      <div className="information">
        <div className="img-clas">
          <img className="imginfo" src={user?.avatar_url} alt="" />
          <div className="maincdiv">
            <div className="main-fdiv">
              <div className="names">
                <div className="names-info">
                  {" "}
                  <h1>{user?.name || "no name"}</h1>
                  <p>@{user?.login}</p>
                </div>

                <h3>
                  Joined {new Date(user?.created_at).toLocaleDateString()}
                </h3>
              </div>
            </div>
            <div className="text">
              <h3>{user?.bio || "This user has no bio"}</h3>
            </div>

            <div className="info">
              <div className="ifno-text">
                <h2>Repos</h2>
                <h1>{user?.public_repos}</h1>
              </div>
              <div className="ifno-text">
                <h2>Followers</h2>
                <h1>{user?.followers}</h1>
              </div>
              <div className="ifno-text">
                <h2>Following</h2>
                <h1>{user?.following}</h1>
              </div>
            </div>

            <div className="info-1">
              <div className="again2">
                <div className="info-1-text">
                  <img src="/images/icon-location.svg" alt="location icon" />
                  <p>{user?.location || "Not available"}</p>
                </div>
                <div className="info-1-text">
                  <img src="/images/icon-website.svg" alt="website icon" />
                  <p>{user?.blog || "Not available"}</p>
                </div>
              </div>
              <div className="again3">
                <div className="info-1-text">
                  <img src="/images/icon-twitter.svg" alt="twitter icon" />
                  <p>
                    {user?.twitter_username
                      ? `@${user.twitter_username}`
                      : "Not available"}
                  </p>
                </div>
                <div className="info-1-text">
                  <img src="/images/icon-company.svg" alt="company icon" />
                  <p>{user?.company || "Not available"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Contianerdiv>
  );
}
const Contianerdiv = styled.div<{ mode: boolean }>`
  border-radius: 15px;

  /* background: ${(props) => (props.mode ? "#ff0000)" : "#fff")}; */
  background: ${(props) => (props.mode ? "#1E2A47" : "#fff")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin-top: 20px;
  .information {
    background: ${(props) => (props.mode ? "#1E2A47" : "#fff")};
    @media screen and (min-width: 1000px) {
      .img-clas {
        display: flex;
        gap: 40px;
      }
      .imginfo {
        width: 117px;
        height: 117px;
      }
      .maincdiv {
        width: 100%;
      }
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 70px;
    }
    .names {
      display: flex;
      flex-direction: column;
      gap: 10px;
      @media screen and (min-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;
      }
      h1 {
        color: ${(props) => (props.mode ? "#fff" : "#2b3442")};
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      p {
        color: ${(props) => (props.mode ? "#fff" : "#0079FF")};
        font-size: 13px;
        font-weight: 400;
      }
      h3 {
        color: ${(props) => (props.mode ? "#fff" : "#697c9a")};
        font-size: 13px;

        font-weight: 400;
      }
      @media screen and (min-width: 1000px) {
        h1 {
          font-size: 26px;
        }
        p {
          font-size: 16px;
        }
        .names-info {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  .text {
    background: ${(props) => (props.mode ? "#1E2A47" : "#fff")};
    margin-top: 30px;
    h3 {
      color: ${(props) => (props.mode ? "#fff" : "#4b6a9b")};
      font-family: "Space Mono";
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 192.308% */
    }
  }
  .info {
    border-radius: 10px;
    background: ${(props) => (props.mode ? "#141D2F" : "#F6F8FF")};
    padding: 23px 20px 23px;
    display: flex;
    gap: 20px;
    margin-top: 30px;
    justify-content: center;
    @media screen and (min-width: 1000px) {
      justify-content: space-between;
    }
    .ifno-text {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h2 {
        color: ${(props) => (props.mode ? "#fff" : "#4b6a9b")};
        text-align: center;
        font-family: "Space Mono";
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      h1 {
        color: ${(props) => (props.mode ? "#fff" : "#2b3442")};
        text-align: center;
        font-family: "Space Mono";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }
      @media screen and (min-width: 1000px) {
        h1 {
          font-size: 22px;
        }
      }
    }
  }
  .info-1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    @media screen and (min-width: 1000px) {
      flex-direction: row;
      gap: 40px;
    }
    .info-1-text {
      display: flex;
      gap: 20px;

      img {
        width: 13.753px;
        height: 20px;
        flex-shrink: 0;
      }

      p {
        color: ${(props) => (props.mode ? "#fff" : "#4b6a9b")};

        font-family: "Space Mono";
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    .again2 {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    @media screen and (min-width: 1000px) {
      .again2 {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .again3 {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;
export default Container;
