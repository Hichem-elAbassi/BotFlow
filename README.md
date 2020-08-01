# BotFlow
## Brief description:
A module to enable simple yet powerful , drag'n'drop chatbot logic building.
The module believes in the "order above everything" doctrine,it presents different panels to the user to permit different levels of management:
Basically, it offers:
1.Processes management on a tight scope.
2.Exceptions handeling for each internal process,defined by a logic the user precises, but also it can default to already available predefined exceptions for simpler and faster development.
3.Main process orchestration,general exceptions implementation.
4.workflow test & simulation - Future work , not implemented currently.  
## UI/UX definition & implementation:
### User interface:
The interface offers a drag'n'drop sideBar with main elements (generic) to generate a flow:
1.control elements : {switch , case , if , else}
2.Structural elements : { step , vector }
Those elements will be used to define the main process structure.
### User experience:
Once the main process is clearly defined , the interface will try to validate the Process by raising exceptions whenever possible , in order to detect general flaws in the process design.
This will help handling errors in design , and defining all exits/loops in order to make an infinite
process termination-proof.
