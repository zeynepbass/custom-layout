export default function LoginPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-white p-6 rounded shadow-md w-80">
          <h1 className="text-xl font-bold mb-4">Login</h1>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-3 rounded"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Giriş Yap
          </button>
        </form>
      </div>
    );
  }
  