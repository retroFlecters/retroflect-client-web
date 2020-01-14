import React from "react";

const Moodslider = () => (
  <div>
    <input type="range" min="0" max="100" step="1" id="Mood" className="slider"></input>
  </div>
);
<style jsx>
{`
  .slider{
      height: 5px;
      width: 250px;
      background-color: #dcdcdc;
      cursor: pointer;
      align-items: center;
      border-radius: 10px;
      padding: 10px;
      -webkit-appearance: none;
      opacity: 0.4px;
      outline: none;
  }

  .slider:hover{
      background-color: #f5f5f5;
      opacity: 0.4px;
  }

  .slider::-webkit-slider-thumb{
      -webkit-appearance: none;
      width: 15px;
      height: 25px;
      border-radius: 2.5px;
      background-color: #999;
  }
`}
</style>

export default Moodslider;
