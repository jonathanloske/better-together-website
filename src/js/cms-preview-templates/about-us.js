import React from "react";
import Jumbotron from "./components/jumbotron";

export default class AboutUsPreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
      <div className="bg-grey-1 pv4">
        <div className="flex-l mhn1-l ph3 center mw7">
          <h2 className="f2 b lh-title mb2 w-40-l">{entry.getIn(["data", "about-us", "heading"])}</h2>
          <p className="w-60-l mb0">{entry.getIn(["data", "about-us", "text"])}</p>
        </div>
      </div>

    </div>;
  }
}
