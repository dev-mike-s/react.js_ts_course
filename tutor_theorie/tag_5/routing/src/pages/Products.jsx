import { Outlet } from "react-router"

function Products() {
  return (
    <div>
        <h2>Produkte</h2>
        <Outlet />
    </div>
  )
}

export default Products