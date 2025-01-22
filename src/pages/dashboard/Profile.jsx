import React, { useState } from "react"
import { User, Shield, Settings, Upload, Save, X, ChevronDown } from "lucide-react"
import userimg from '../../assets/icons/user.png'


const Profile = () => {
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
            src={profileImage || userimg}
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
        <div>
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
        </div>
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
        <div className="sm:col-span-2">
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
              Verify your account to unlock all features and increase trust with customers.
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="mt-4">
          <label
            htmlFor="file-upload"
            className="cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
          >
            <span>Upload verification document</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              onChange={(e) => handleImageUpload(e, setVerificationDoc)}
            />
          </label>
        </div>
        <p className="mt-1 text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </div>
      {verificationDoc && (
        <div className="mt-4">
          <p className="font-medium text-gray-900">Uploaded Document:</p>
          <img
            src={verificationDoc || "/placeholder.svg"}
            alt="Verification Document"
            className="mt-2 max-w-full h-auto"
          />
        </div>
      )}
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
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900  mb-4">Account Settings</h1>
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

