const FooterItems = () => {
  return (
    <>
        <div className="w-3/1">
          <h4 className="text-gray-800 text-lg font-bold pb-1 mb-5 uppercase items-center">Menu</h4>
          <ul className="items-center text-gray-800 text-base capitalize font-bold">
            <li className="mb-2 hover:text-green-600"><a href="#"> Product</a></li>
            <li className="mb-2 hover:text-green-600"><a href="#">Single Product</a></li>
            <li className="mb-2 hover:text-green-600"><a href="#"> Catagory</a></li>
            <li className="mb-2 hover:text-green-600"><a href="#">Contact</a></li>
          </ul>
        </div>
    </>
  )
}
export default FooterItems;