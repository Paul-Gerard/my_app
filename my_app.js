if (Meteor.isClient) 
{
  Template.jumbotron.events({
    'click [data-action = "showMe"]' : function ()
    {
      console.log("Stuff");
    }
  })
  

  
}

if (Meteor.isServer) {
  Meteor.startup(function () 
  {
    // code to run on server at startup
  });
}
