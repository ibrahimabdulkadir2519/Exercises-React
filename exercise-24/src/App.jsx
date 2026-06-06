import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log("Xogta Ardayda:", data);
    alert("Ardayga si guul leh ayaa loo diwaangeliyey!");
  };



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Student Registration</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              {...register('name', { required: 'Magacu waa khasab' })}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Maxamed Cali"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600 font-medium">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              {...register('email', { 
                required: 'Email-ka waa khasab', 
                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Fadlan geli email sax ah' }
              })}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="student@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600 font-medium">{errors.email.message}</p>}
          </div>

          {/* Grade Level Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Grade Level</label>
            <select 
              {...register('grade', { required: 'Fadlan dooro heerka fasalka' })}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select grade level</option>
              <option value="freshman">F1 </option>
              <option value="sophomore">F2 </option>
              <option value="junior">F3 </option>
              <option value="senior">F4 </option>
            </select>
            {errors.grade && <p className="mt-1 text-sm text-red-600 font-medium">{errors.grade.message}</p>}
          </div>

          {/* Courses Checkboxes  */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Courses <span className="text-red-500"></span>
            </label>
            
        
            <div className={`grid grid-cols-2 gap-3 bg-gray-50 p-4 rounded-lg border ${errors.courses ? 'border-red-300 ring-1 ring-red-500' : 'border-gray-200'}`}>
              
              
              <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                <input 
                  type="checkbox" 
                  value="math" 
                  {...register('courses', { required: 'Fadlan dooro ugu yaraan hal koorso' })} 
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4" 
                />
                <span>Math</span>
              </label>

        
              <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" value="science" {...register('courses')} className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4" />
                <span>Science</span>
              </label>

              <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" value="history" {...register('courses')} className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4" />
                <span>History</span>
              </label>

              <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" value="art" {...register('courses')} className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4" />
                <span>Art</span>
              </label>

              <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" value="physicalEducation" {...register('courses')} className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4" />
                <span>P.E.</span>
              </label>

              <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" value="computerScience" {...register('courses')} className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4" />
                <span>Computer Sci.</span>
              </label>
            </div>
            
       
            {errors.courses && <p className="mt-1.5 text-sm text-red-600 font-medium">{errors.courses.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button 
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
          
            >
            
              Register Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;