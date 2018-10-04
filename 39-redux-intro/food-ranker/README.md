|                   | Plain JS (Mod 3)                                       | React                                         | Redux                                                |
|-------------------|--------------------------------------------------------|-----------------------------------------------|------------------------------------------------------|
| Get Data          | Anywhere                                               | componentDidMount                             | When an action is triggered                          |
| Data Flow         | Anything (usually a strings functions to render stuff) | flow down a component tree as props           | Directly from the store to the interested components |
| Listen For Events | addEventListener                                       | Inline (propagate back up the component tree) | Inline (dispatch to the store)                       |
| Update the DOM    | Manually                                               | Automatically                                 | Automatically                                        |

Part I
* Pain Points with React
* Introduction 
  * What Redux is and what it provides for us
  * Principles of Redux (Redux as a design pattern)
      * store
      * reducer
      * action
			
  * Implementation 
    * Using Redux (Redux as a tool)
    * createStore
    * Dispatch
			
Part II
* Integrating with React
  * React-Redux
    * Provider
    * Connect
      * Map State to Props
      * Map Dispatch to Props
		
  * Further Study:
    * https://egghead.io/courses/getting-started-with-redux
