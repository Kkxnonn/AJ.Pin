import { useState } from "react";

const RadixCounter = () => {
    
    // getter and setter
  const [value, setValue] = useState(0);

  const minusClicked = () => {
    console.log("-");
    if (value <= 0) { // ถ้า < 0 ให้วนไปค่ามากสุด (FFF)
      setValue(4095);
    } else {
      setValue((prev) => prev - 1); // ลดทีละ 1
    }
  };

  const resetClicked = () => {
    setValue(0);
    console.log("reset");
  };

  const plusClicked = () => {
    console.log("+");
    // setValue(value + 1) // set direct to value
    if (value >= 4095) {
      setValue(0);// ถ้าเป็น FFF แล้วกด + → กลับไป 000
    } else {
      setValue((prev) => prev + 1); // เพิ่มทีละ 1
    }
  }; 

  return (
    // container
    <div
      className="border border-2 border-black rounded-3 p-1 m-auto"
      style={{ width: "400px", backgroundColor: "lightblue" }}
    >
      {/* Title */}
      <h1 className="text-center fw-bold fs-4">RADIX COUNTER</h1>

      {/* Body */}
      <div className="d-flex justify-content-between mt-3">
        <div className="text-center">
          <div className="fw-bold">[HEX]</div>
          <div className="font-monospace">{value.toString(16).toUpperCase().padStart(3,"0")}</div>
        </div>

        <div>
          <div className="fw-bold">[DEC]</div>
          <div className="font-monospace text-primary fw-bold">{value.toString().padStart(4,"0")}</div>
        </div>

        <div>
          <div className="fw-bold">[OCT]</div>
          <div className="font-monospace">{value.toString(8).padStart(4,"0")}</div>
        </div>

        <div>
          <div className="fw-bold">[BIN]</div>
          <div className="font-monospace">{value.toString(2).padStart(12,"0")}</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-3 d-flex justify-content-around">
        <button className="btn btn-danger px-4" onClick={minusClicked}>&minus;</button>
        <button className="btn btn-secondary px-5" onClick={resetClicked}>RESET</button>
        <button className="btn btn-success px-4" onClick={plusClicked}>&#43;</button>
      </div>
    </div>
  );
};

export default RadixCounter;
