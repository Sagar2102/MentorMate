// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useGetPurchasedCoursesQuery } from "@/features/api/purchaseApi";
// import React from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// const Dashboard = () => {

//   const {data, isSuccess, isError, isLoading} = useGetPurchasedCoursesQuery();

//   if(isLoading) return <h1>Loading...</h1>
//   if(isError) return <h1 className="text-red-500">Failed to get purchased course</h1>

//   //
//   const {purchasedCourse} = data || [];

//   const courseData = purchasedCourse.map((course)=> ({
//     name:course.courseId.courseTitle,
//     price:course.courseId.coursePrice
//   }))

//   const totalRevenue = purchasedCourse.reduce((acc,element) => acc+(element.amount || 0), 0);

//   const totalSales = purchasedCourse.length;
//   return (
//     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
//       <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
//         <CardHeader>
//           <CardTitle>Total Sales</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-3xl font-bold text-blue-600">{totalSales}</p>
//         </CardContent>
//       </Card>

//       <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
//         <CardHeader>
//           <CardTitle>Total Revenue</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-3xl font-bold text-blue-600">{totalRevenue}</p>
//         </CardContent>
//       </Card>

//       {/* Course Prices Card */}
//       <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
//         <CardHeader>
//           <CardTitle className="text-xl font-semibold text-gray-700">
//             Course Prices
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={courseData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
//               <XAxis
//                 dataKey="name"
//                 stroke="#6b7280"
//                 angle={-30} // Rotated labels for better visibility
//                 textAnchor="end"
//                 interval={0} // Display all labels
//               />
//               <YAxis stroke="#6b7280" />
//               <Tooltip formatter={(value, name) => [`₹${value}`, name]} />
//               <Line
//                 type="monotone"
//                 dataKey="price"
//                 stroke="#4a90e2" // Changed color to a different shade of blue
//                 strokeWidth={3}
//                 dot={{ stroke: "#4a90e2", strokeWidth: 2 }} // Same color for the dot
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Dashboard;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetPurchasedCoursesQuery } from "@/features/api/purchaseApi";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {

  const { data, isSuccess, isError, isLoading } = useGetPurchasedCoursesQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1 className="text-red-500">Failed to get purchased course</h1>;

  const { purchasedCourse } = data || [];

  // Aggregating total revenue by instructor (creator of the course)
  const instructorRevenue = purchasedCourse.reduce((acc, course) => {
    const instructorId = course.courseId.creator; // The creator field contains the instructor's ID
    if (instructorId) {
      acc[instructorId] = acc[instructorId] || { instructorName: course.courseId.creatorName, totalRevenue: 0 };
      acc[instructorId].totalRevenue += course.amount || 0; // Assuming `amount` is the price paid by the student
    }
    return acc;
  }, {});

  // Convert the instructor revenue object to an array for rendering
  const instructorRevenueData = Object.keys(instructorRevenue).map((instructorId) => ({
    instructorName: instructorRevenue[instructorId].instructorName,
    totalRevenue: instructorRevenue[instructorId].totalRevenue,
  }));

  // Prepare data for course prices chart
  const courseData = purchasedCourse.map((course) => ({
    name: course.courseId.courseTitle,
    price: course.courseId.coursePrice,
  }));

  // Calculate total revenue and total sales
  const totalRevenue = purchasedCourse.reduce((acc, element) => acc + (element.amount || 0), 0);
  const totalSales = purchasedCourse.length;

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Total Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-blue-600">{totalSales}</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-blue-600">{totalRevenue}</p>
        </CardContent>
      </Card>

      {/* Instructor Revenue Card */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-700">
            Revenue by Instructor
          </CardTitle>
        </CardHeader>
        <CardContent>
          {instructorRevenueData.length === 0 ? (
            <p>No data available</p>
          ) : (
            <div className="space-y-4">
              {instructorRevenueData.map((instructor) => (
                <div key={instructor.instructorName} className="flex justify-between">
                  <span className="font-semibold">{instructor.instructorName}</span>
                  <span className="font-normal text-gray-600">₹{instructor.totalRevenue}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Course Prices Card */}
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-700">
            Course Prices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={courseData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                angle={-30} // Rotated labels for better visibility
                textAnchor="end"
                interval={0} // Display all labels
              />
              <YAxis stroke="#6b7280" />
              <Tooltip formatter={(value, name) => [`₹${value}`, name]} />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#4a90e2" // Changed color to a different shade of blue
                strokeWidth={3}
                dot={{ stroke: "#4a90e2", strokeWidth: 2 }} // Same color for the dot
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
