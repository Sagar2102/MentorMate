// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useEffect, useState } from "react";
// import {
//   useLoginUserMutation,
//   useRegisterUserMutation,
// } from "@/features/api/authApi";
// import { Loader2 } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate(); // Initialize navigate using useNavigate

//   const [signupInput, setSignupInput] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [loginInput, setLoginInput] = useState({ email: "", password: "" });

//   const [
//     registerUser,
//     {
//       data: registerData,
//       error: registerError,
//       isLoading: registerIsLoading,
//       isSuccess: registerIsSuccess,
//     },
//   ] = useRegisterUserMutation();

//   const [
//     loginUser,
//     {
//       data: loginData,
//       error: loginError,
//       isLoading: loginIsLoading,
//       isSuccess: loginIsSuccess,
//     },
//   ] = useLoginUserMutation();

//   const changeInputHandler = (e, type) => {
//     const { name, value } = e.target;
//     if (type === "signup") {
//       setSignupInput({ ...signupInput, [name]: value });
//     } else {
//       setLoginInput({ ...loginInput, [name]: value });
//     }
//   };

//   const handleRegistration = async (type) => {
//     const inputData = type === "signup" ? signupInput : loginInput;
//     console.log(inputData);
//     const action = type === "signup" ? registerUser : loginUser;
//     await action(inputData);
//   };

//   useEffect(() => {
//     if (registerIsSuccess && registerData) {
//       toast.success(registerData.message || "Signup successful. Move to Login.");
//     }
//     if (registerError) {
//       toast.error(registerError.data.message || "Signup Failed");
//     }
//     if (loginIsSuccess && loginData) {
//       toast.success(loginData.message || "Login successful.");
//       navigate("/"); // Navigate to the home page on successful login
//     }
//     if (loginError) {
//       toast.error(loginError.message || "Login Failed");
//     }
//   }, [
//     loginIsLoading,
//     registerIsLoading,
//     loginData,
//     registerData,
//     loginError,
//     registerError,
//   ]);

//   return (
//     <div className="flex items-center w-full justify-center mt-20">
//       <Tabs defaultValue="login" className="w-[400px]">
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="signup">Signup</TabsTrigger>
//           <TabsTrigger value="login">Login</TabsTrigger>
//         </TabsList>
//         <TabsContent value="signup">
//           <Card>
//             <CardHeader>
//               <CardTitle>Signup</CardTitle>
//               <CardDescription>
//                 Create a new account and click signup when you're done.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   type="text"
//                   name="name"
//                   value={signupInput.name}
//                   onChange={(e) => changeInputHandler(e, "signup")}
//                   placeholder="Eg. Sagar"
//                   required={true}
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="username">Email</Label>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={signupInput.email}
//                   onChange={(e) => changeInputHandler(e, "signup")}
//                   placeholder="Eg. sagar@gmail.com"
//                   required={true}
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="username">Password</Label>
//                 <Input
//                   type="password"
//                   name="password"
//                   value={signupInput.password}
//                   onChange={(e) => changeInputHandler(e, "signup")}
//                   placeholder="Eg. xyz"
//                   required={true}
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="username">Role</Label>
//                 {/* <Input
//                   type="role"
//                   name="role"
//                   value={signupInput.role}
//                   onChange={(e) => changeInputHandler(e, "signup")}
//                   placeholder="Eg. Student"
//                   required={true}
//                 /> */}
//                 {/* <select
//                   name="role"
//                   value={signupInput.role}
//                   onChange={(e) => changeInputHandler(e, "signup")}
//                   required={true}
//                 >
//                   <option value="" disabled>
//                     Select Role
//                   </option>
//                   <option value="Student">Student</option>
//                   <option value="Instructor">Instructor</option>
//                 </select> */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "10px",
//                   }}
//                 >
//                   <label
//                     style={{
//                       display: "inline-flex",
//                       alignItems: "center",
//                       cursor: "pointer",
//                     }}
//                   >
//                     {/* Student Text */}
//                     <span
//                       onClick={() =>
//                         changeInputHandler(
//                           { target: { name: "role", value: "student" } },
//                           "signup"
//                         )
//                       }
//                       style={{
//                         marginRight: "10px",
//                         fontWeight:
//                           signupInput.role === "student" ? "bold" : "normal",
//                         opacity: signupInput.role === "student" ? 1 : 0.6,
//                         cursor: "pointer",
//                       }}
//                     >
//                       Student
//                     </span>

//                     {/* Toggle Switch */}
//                     <div
//                       onClick={() =>
//                         changeInputHandler(
//                           {
//                             target: {
//                               name: "role",
//                               value:
//                                 signupInput.role === "student"
//                                   ? "instructor"
//                                   : "student",
//                             },
//                           },
//                           "signup"
//                         )
//                       }
//                       style={{
//                         width: "50px",
//                         height: "25px",
//                         backgroundColor: "#ccc",
//                         borderRadius: "25px",
//                         position: "relative",
//                         cursor: "pointer",
//                         transition: "background-color 0.3s ease",
//                       }}
//                     >
//                       <div
//                         style={{
//                           width: "20px",
//                           height: "20px",
//                           backgroundColor: "#000",
//                           borderRadius: "50%",
//                           position: "absolute",
//                           top: "50%",
//                           left: signupInput.role === "student" ? "5px" : "25px",
                          
//                           transform: "translateY(-50%)",
//                           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
//                           transition: "left 0.3s ease",
//                         }}
//                       ></div>
//                     </div>

//                     {/* Instructor Text */}
//                     <span
//                       onClick={() =>
//                         changeInputHandler(
//                           { target: { name: "role", value: "instructor" } },
//                           "signup"
//                         )
//                       }
//                       style={{
//                         marginLeft: "10px",
//                         fontWeight:
//                           signupInput.role === "instructor" ? "bold" : "normal",
//                         opacity: signupInput.role === "instructor" ? 1 : 0.6,
//                         cursor: "pointer",
//                       }}
//                     >
//                       Instructor
//                     </span>
//                   </label>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button
//                 disabled={registerIsLoading}
//                 onClick={() => handleRegistration("signup")}
//               >
//                 {registerIsLoading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
//                     wait
//                   </>
//                 ) : (
//                   "Signup"
//                 )}
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//         <TabsContent value="login">
//           <Card>
//             <CardHeader>
//               <CardTitle>Login</CardTitle>
//               <CardDescription>
//                 Enter your email and password to login.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <Label htmlFor="current">Email</Label>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={loginInput.email}
//                   onChange={(e) => changeInputHandler(e, "login")}
//                   placeholder="Eg. sagar@gmail.com"
//                   required={true}
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="new">Password</Label>
//                 <Input
//                   type="password"
//                   name="password"
//                   value={loginInput.password}
//                   onChange={(e) => changeInputHandler(e, "login")}
//                   placeholder="Eg. xyz"
//                   required={true}
//                 />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button
//                 disabled={loginIsLoading}
//                 onClick={() => handleRegistration("login")}
//               >
//                 {loginIsLoading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
//                     wait
//                   </>
//                 ) : (
//                   "Login"
//                 )}
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default Login;
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
// import { useEffect, useState } from "react";
// import {
//   useLoginUserMutation,
//   useRegisterUserMutation,
// } from "@/features/api/authApi";
// import { Loader2 } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [signupInput, setSignupInput] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student",
//   });
//   const [loginInput, setLoginInput] = useState({ email: "", password: "" });

//   const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess }] = useRegisterUserMutation();
//   const [loginUser, { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSuccess }] = useLoginUserMutation();

//   const changeInputHandler = (e, type) => {
//     const { name, value } = e.target;
//     if (type === "signup") {
//       setSignupInput({ ...signupInput, [name]: value });
//     } else {
//       setLoginInput({ ...loginInput, [name]: value });
//     }
//   };

//   const handleRoleChange = (role) => {
//     setSignupInput({ ...signupInput, role });
//   };

//   const handleRegistration = async (type) => {
//     const inputData = type === "signup" ? signupInput : loginInput;
//     await (type === "signup" ? registerUser : loginUser)(inputData);
//   };

//   useEffect(() => {
//     if (registerIsSuccess && registerData) {
//       toast.success(registerData.message || "Signup successful. Move to Login.");
//     }
//     if (registerError) {
//       toast.error(registerError.data.message || "Signup Failed");
//     }
//     if (loginIsSuccess && loginData) {
//       toast.success(loginData.message || "Login successful.");
//       navigate("/");
//     }
//     if (loginError) {
//       toast.error(loginError.message || "Login Failed");
//     }
//   }, [loginIsLoading, registerIsLoading, loginData, registerData, loginError, registerError]);

//   return (
//     <div className="flex items-center w-full justify-center mt-20">
//       <Tabs defaultValue="login" className="w-[400px]">
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="signup">Signup</TabsTrigger>
//           <TabsTrigger value="login">Login</TabsTrigger>
//         </TabsList>
//         <TabsContent value="signup">
//           <Card>
//             <CardHeader>
//               <CardTitle>Signup</CardTitle>
//               <CardDescription>Create a new account and click signup when you're done.</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <Label htmlFor="name">Name</Label>
//                 <Input type="text" name="name" value={signupInput.name} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. Sagar" required />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="email">Email</Label>
//                 <Input type="email" name="email" value={signupInput.email} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. sagar@gmail.com" required />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="password">Password</Label>
//                 <Input type="password" name="password" value={signupInput.password} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. xyz" required />
//               </div>
//               <div className="space-y-1">
//                 <Label>Role</Label>
//                 <div className="flex items-center gap-4">
//                   <div className="flex items-center gap-2 text-sm">
//                     <Checkbox className="h-5 w-5" checked={signupInput.role === "student"} onCheckedChange={() => handleRoleChange("student")} />
//                     <span className="text-sm">Student</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm">
//                     <Checkbox className="h-5 w-5" checked={signupInput.role === "instructor"} onCheckedChange={() => handleRoleChange("instructor")} />
//                     <span className="text-sm">Instructor</span>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button disabled={registerIsLoading} onClick={() => handleRegistration("signup")}>
//                 {registerIsLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : "Signup"}
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//         <TabsContent value="login">
//           <Card>
//             <CardHeader>
//               <CardTitle>Login</CardTitle>
//               <CardDescription>Enter your email and password to login.</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <Label htmlFor="email">Email</Label>
//                 <Input type="email" name="email" value={loginInput.email} onChange={(e) => changeInputHandler(e, "login")} placeholder="Eg. sagar@gmail.com" required />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="password">Password</Label>
//                 <Input type="password" name="password" value={loginInput.password} onChange={(e) => changeInputHandler(e, "login")} placeholder="Eg. xyz" required />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button disabled={loginIsLoading} onClick={() => handleRegistration("login")}>
//                 {loginIsLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : "Login"}
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default Login;
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess }] = useRegisterUserMutation();
  const [loginUser, { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSuccess }] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRoleChange = (role) => {
    setSignupInput({ ...signupInput, role });
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    await (type === "signup" ? registerUser : loginUser)(inputData);
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      
      setActiveTab("login");
      
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      toast.success("Signup successful.Now Login.");
    }
    if (registerError) {
      toast.error(registerError.data.message || "Signup Failed");
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login successful.");
      navigate("/");
    }
    if (loginError) {
      toast.error(loginError.message || "Login Failed");
    }
  }, [loginIsLoading, registerIsLoading, loginData, registerData, loginError, registerError]);

  return (
    <div className="flex items-center w-full justify-center mt-20">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>Create a new account and click signup when you're done.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" value={signupInput.name} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. Sagar" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" value={signupInput.email} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. sagar@gmail.com" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" value={signupInput.password} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. xyz" required />
              </div>
              <div className="space-y-1">
                <Label>Role</Label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Checkbox className="h-5 w-5" checked={signupInput.role === "student"} onCheckedChange={() => handleRoleChange("student")} />
                    <span className="text-sm">Student</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Checkbox className="h-5 w-5" checked={signupInput.role === "instructor"} onCheckedChange={() => handleRoleChange("instructor")} />
                    <span className="text-sm">Instructor</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={registerIsLoading} onClick={() => handleRegistration("signup")}>
                {registerIsLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : "Signup"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Enter your email and password to login.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" value={loginInput.email} onChange={(e) => changeInputHandler(e, "login")} placeholder="Eg. sagar@gmail.com" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" value={loginInput.password} onChange={(e) => changeInputHandler(e, "login")} placeholder="Eg. xyz" required />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={loginIsLoading} onClick={() => handleRegistration("login")}>
                {loginIsLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : "Login"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
