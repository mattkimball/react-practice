export default function Print() {
    const handleClick = () => window.print();
    return (
      <button id="print-button" onClick={handleClick}>Print the Page</button>
    )
  }