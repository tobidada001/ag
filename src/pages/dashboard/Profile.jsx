import React, { useState } from "react"
import { User, Shield, Settings, Upload, Save, X, ChevronDown, AlertCircle } from "lucide-react"
import { useUserType } from "../../context/UserTypeContext";

const Profile = () => {
  const { userType } = useUserType();

  const usertype = userType
  const [activeTab, setActiveTab] = useState("profile")
  const [profileImage, setProfileImage] = useState(null)
  const [verificationDoc, setVerificationDoc] = useState(null)
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    farmName: "Green Acres",
    address: "123 Farm Road, Countryside",
    bio: "Passionate organic farmer with 10 years of experience.",
    theme: "light",
    notifications: true,
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [verificationDocs, setVerificationDocs] = useState({
    governmentId: null,
    landOwnership: null,
    farmingCertification: null,
    additionalDoc: null,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleImageUpload = (e, setter) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setter(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDocUpload = (e, docType) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setVerificationDocs((prev) => ({
          ...prev,
          [docType]: reader.result,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission (e.g., API call to update user data)
    console.log("Form submitted:", formData)
  }

  const renderProfileTab = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center space-x-6">
        <div className="shrink-0">
          <img
            className="h-16 w-16 object-cover rounded-full"
            src={profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
          />
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            onChange={(e) => handleImageUpload(e, setProfileImage)}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

       {usertype === 'farmer' && <div>
          <label htmlFor="farmName" className="block text-sm font-medium text-gray-700">
            Farm Name
          </label>
          <input
            type="text"
            id="farmName"
            name="farmName"
            value={formData.farmName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>}
        <div className="sm:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>


      {usertype === 'farmer' && <div className="sm:col-span-2">
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows="3"
            value={formData.bio}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          ></textarea>
        </div>
      }

      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Save Changes
        </button>
      </div>
    </form>
  )

  const renderVerificationTab = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <Shield className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              { usertype === 'farmer' ? 'Verify your account to unlock all features and increase trust with customers.' :
              
              'Verify your account to get access to products from other states in Nigeria'}
            </p>
          </div>
        </div>
      </div>


    {usertype == 'buyer' && 
    
      <div className="w-full">
          <input type="text" className="w-full rounded-md outline-none focus:outline-none border-1 focus:border-gray-800" placeholder="Bank Verification Number" />
      </div>
    }


      {/* Government-issued ID */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Government-issued ID</h3>
        <div className="flex items-center justify-center">
          {verificationDocs.governmentId ? (
            <div className="relative">
              <img
                src={verificationDocs.governmentId || "/placeholder.svg"}
                alt="Government ID"
                className="max-w-full h-auto max-h-48 rounded"
              />
              <button
                onClick={() => setVerificationDocs((prev) => ({ ...prev, governmentId: null }))}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                aria-label="Remove government ID"
              >
                <AlertCircle className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <label
              htmlFor="gov-id-upload"
              className="cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
            >
              <span>Upload Government ID</span>
              <input
                id="gov-id-upload"
                name="gov-id-upload"
                type="file"
                className="sr-only"
                onChange={(e) => handleDocUpload(e, "governmentId")}
              />
            </label>
          )}
        </div>
      </div>

      {/* Proof of Land Ownership or Lease Agreement */}

    { usertype === 'farmer' &&

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Proof of Land Ownership or Lease Agreement</h3>
        <div className="flex items-center justify-center">
          {verificationDocs.landOwnership ? (
            <div className="relative">
              <img
                src={verificationDocs.landOwnership || "/placeholder.svg"}
                alt="Land Ownership Document"
                className="max-w-full h-auto max-h-48 rounded"
              />
              <button
                onClick={() => setVerificationDocs((prev) => ({ ...prev, landOwnership: null }))}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                aria-label="Remove land ownership document"
              >
                <AlertCircle className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <label
              htmlFor="land-doc-upload"
              className="cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
            >
              <span>Upload Land Document</span>
              <input
                id="land-doc-upload"
                name="land-doc-upload"
                type="file"
                className="sr-only"
                onChange={(e) => handleDocUpload(e, "landOwnership")}
              />
            </label>
          )}
        </div>
      </div>
    }



    

      {/* Farming Certifications */}

      { usertype == 'farmer' && 
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Farming Certifications (if applicable)</h3>
        <div className="flex items-center justify-center">
          {verificationDocs.farmingCertification ? (
            <div className="relative">
              <img
                src={verificationDocs.farmingCertification || "/placeholder.svg"}
                alt="Farming Certification"
                className="max-w-full h-auto max-h-48 rounded"
              />
              <button
                onClick={() => setVerificationDocs((prev) => ({ ...prev, farmingCertification: null }))}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                aria-label="Remove farming certification"
              >
                <AlertCircle className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <label
              htmlFor="cert-upload"
              className="cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
            >
              <span>Upload Certification</span>
              <input
                id="cert-upload"
                name="cert-upload"
                type="file"
                className="sr-only"
                onChange={(e) => handleDocUpload(e, "farmingCertification")}
              />
            </label>
          )}
        </div>
      </div>
      }

  
      <div className="flex justify-end">
        <button
          type="button"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Submit for Verification
        </button>
      </div>
    </div>
  )

  const renderCustomizationTab = () => (
    <div className="space-y-6">
      <div>
        <label className="text-base font-medium text-gray-900">Theme</label>
        <p className="text-sm leading-5 text-gray-500">Choose your preferred color scheme</p>
        <fieldset className="mt-4">
          <legend className="sr-only">Theme</legend>
          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
            {["light", "dark", "system"].map((theme) => (
              <div key={theme} className="flex items-center">
                <input
                  id={theme}
                  name="theme"
                  type="radio"
                  checked={formData.theme === theme}
                  onChange={handleInputChange}
                  className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                />
                <label htmlFor={theme} className="ml-3 block text-sm font-medium text-gray-700">
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
      <div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="notifications"
              name="notifications"
              type="checkbox"
              checked={formData.notifications}
              onChange={handleInputChange}
              className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="notifications" className="font-medium text-gray-700">
              Email notifications
            </label>
            <p className="text-gray-500">Receive email notifications about your account and orders.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Save Preferences
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Account Settings</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="hidden sm:-mb-px sm:flex" aria-label="Tabs">
              {["profile", "verification", "customization"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex-1 text-center`}
                >
                  {tab === "profile" && <User className="w-5 h-5 inline mr-2" />}
                  {tab === "verification" && <Shield className="w-5 h-5 inline mr-2" />}
                  {tab === "customization" && <Settings className="w-5 h-5 inline mr-2" />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
            <div className="sm:hidden">
              <div className="relative">
                <button
                  type="button"
                  className="w-full bg-white border-b border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="flex items-center">
                    {activeTab === "profile" && <User className="w-5 h-5 mr-2" />}
                    {activeTab === "verification" && <Shield className="w-5 h-5 mr-2" />}
                    {activeTab === "customization" && <Settings className="w-5 h-5 mr-2" />}
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg">
                    {["profile", "verification", "customization"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          setActiveTab(tab)
                          setIsDropdownOpen(false)
                        }}
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {tab === "profile" && <User className="w-5 h-5 inline mr-2" />}
                        {tab === "verification" && <Shield className="w-5 h-5 inline mr-2" />}
                        {tab === "customization" && <Settings className="w-5 h-5 inline mr-2" />}
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-5 sm:p-6">
            {activeTab === "profile" && renderProfileTab()}
            {activeTab === "verification" && renderVerificationTab()}
            {activeTab === "customization" && renderCustomizationTab()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

