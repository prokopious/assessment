import Link from 'next/link'

export default function sparrow() {
  return (
    <>
      <div id="cover">
        <div className="center">
          <div><Link href="problem2">Project 2</Link></div>
          <div></div>
        </div>
      </div>

      <style jsx>{`
        #cover {
          position: relative;
          padding-bottom: 100px;
          min-height: 100vh;
          background-image: linear-gradient(
            to top,
            #505285 0%,
            #585e92 12%,
            #65689f 25%,
            #7474b0 37%,
            #7e7ebb 50%,
            #8389c7 62%,
            #9795d4 75%,
            #a2a1dc 87%,
            #b5aee4 100%
          );
        }
        .center {
          position: fixed;
          font-size: 23px;
          font-weight: 600;
          color: white;
          top: 50%;
          left: 50%;
          /* bring your own prefixes */
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  )
}
