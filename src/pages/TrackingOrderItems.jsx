const OrderItems = ({ items }) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  
    return (
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Order Items</h3>
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3">Item</th>
                <th className="text-right p-3">Quantity</th>
                <th className="text-right p-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="p-3">{item.name}</td>
                  <td className="text-right p-3">{item.quantity}</td>
                  <td className="text-right p-3">₦{item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-100">
              <tr>
                <td colSpan="2" className="text-right p-3 font-semibold">
                  Total:
                </td>
                <td className="text-right p-3 font-semibold">₦{total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
  }
  
  export default OrderItems
  
  