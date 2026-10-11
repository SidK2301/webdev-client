import Image from "next/image";

export default function Float() {
  return (
    <section id="wd-css-float" className="wd-lab-section">
      <h3>Float</h3>
      <div className="wd-float-demo">
        <Image className="wd-float-left" src="/images/teslabot.jpg" alt="A small robot used as a left-floated image" width={110} height={100} />
        <p>LOREM ipsum dolor sit amet, consectetur adipiscing elit. A floated image lets this text wrap naturally beside it and continue below. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
        <Image className="wd-float-right" src="/images/teslabot.jpg" alt="A small robot used as a right-floated image" width={110} height={100} />
        <p>LOREM ipsum dolor sit amet, consectetur adipiscing elit. This second paragraph wraps on the opposite side of the image and demonstrates how float direction changes the layout.</p>
        <Image id="wd-ai-float" src="/images/teslabot.jpg" alt="AI sample floated image" width={110} height={100} />
        <p>LOREM ipsum dolor sit amet, consectetur adipiscing elit. The AI image floats left while this text wraps around it; the container clears the float before the next section.</p>
      </div>
      <div className="wd-float-cleared">Cleared content starts below the floats.</div>
    </section>
  );
}
