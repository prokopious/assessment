import { Stuff } from "../types/index"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { FunctionComponent } from "react"
import { random } from "../utils/random"

export const PhotoCard: FunctionComponent<Stuff> = ({
  title,
}: {
  title: String
}) => {
  return (
    <div id="card">
      <div id="grad"> </div>
      <div id="troika">
        <div id="info">
          <div>
            <h4 id="author">{random()}</h4>
          </div>
          <div id="title">{title}</div>
        </div>
        <div id="b">
          <AiOutlinePlusCircle />
        </div>
      </div>
      <style jsx>{`
        #link {
          margin-bottom: calc(10px + 4vw);
        }
        #b {
          font-size: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #image {
          object-fit: fill;
        }
        .in {
          border: 2px solid hsla(251, 54%, 43%, 0);
          box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25),
            -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 10px;
          padding-right: 10px;
          border-radius: 3px;
          margin-top: 0px;
          color: gray;
        }
        #author {
          margin-top: 0px;
        }
        h3 {
          margin-bottom: 16px;
        }
        input {
          border: 2px solid hsla(251, 54%, 43%, 0);
          box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25),
            -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 10px;
          padding-right: 10px;
          border-radius: 3px;
          margin-top: 0px;
          color: gray;
        }
        #toggler {
          background: linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.22),
            rgba(255, 255, 255, 0.25)
          );
          font-size: 12px;
          box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25),
            -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 8px;
          padding-right: 8px;
          text-align: center;
          border-radius: 3px;
          margin-top: 30px;
          width: 100px;
        }
        #grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 10px;
          margin-top: 10px;
        }
        #troika {
          display: grid;
          grid-template-columns: 7fr 2fr;
        }
        #info {
          display: grid;
          grid-template-rows: 30px 50px;
          padding: 10px;
        }
        #grad {
          background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
          height: calc(100px + 7vw);
        }
        #card {
          background: linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.22),
            rgba(255, 255, 255, 0.25)
          );

          border-radius: 3px;
          box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
            -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
        }
        #box {
          padding: 50px;
          margin-left: auto;
          margin-right: auto;
          max-width: 960px;
        }
        @media only screen and (max-width: 960px) {
          #box {
            padding: 20px;
          }
          #grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media only screen and (max-width: 700px) {
          #box {
            padding: 20px;
          }
          #card {
            display: grid;
            grid-template-columns: 3fr 7fr;
          }
          #author {
            padding-top: 5px;
          }
          #grad {
            height: 125px;
          }
          #grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default PhotoCard
