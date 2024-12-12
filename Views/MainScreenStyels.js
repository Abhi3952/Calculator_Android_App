module.exports = {
    main_screen: {
      marginTop: 50,
      display: 'flex',
      flexDirection: 'column',  // Stack elements vertically
      backgroundColor: 'white',
      alignItems: 'center',     // Center horizontally
      height: '100%',           // Full screen height
      width: '100%',            // Full screen width
    },
  
    main_screen_display: {
      elevation: 10,
      width: '95%',             // 95% of the width of the screen
      backgroundColor: 'white',
      borderRadius: 10,
      display: 'flex',
      marginBottom: 10,        // Space below the display
      padding: 10,
    },
  
    main_screen_display_text: {
      fontSize: 50,
      textAlign: 'right',
    },
  
    main_screen_keypad_row: {
      display: 'flex',
      flexDirection: 'row',    // Buttons arranged horizontally
      justifyContent: 'space-between', // Space buttons 
      alignItems:'center',
      
      
    },
  
    main_screen_keypad: {
      width: '100%',           // Full width of the container
      flexGrow: 1,             // Take remaining space
      display: 'flex',
      flexDirection: 'column', // Stack buttons vertically
      alignItems: 'flex-start', // Align buttons to the left
      justifyContent: 'flex-start', // Push buttons towards the top of the keypad area
      padding: 40
    },

  btn_outer:{

   width:90,
   height:90,
   backgroundcolor:'white',
   elevation: 10,
   overflow:'hidden',
   alignItems:'center',
   justifyContent:'center'

  },

  bg_button:{
    color:'green',
    }
  };
  