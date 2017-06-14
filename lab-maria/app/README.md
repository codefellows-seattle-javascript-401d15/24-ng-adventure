#Lab 24: ngAdventure
["Controllers should be used purely to wire up services, dependencies and other objects, and assign them to the view via scope."][http://kirkbushell.me/when-to-use-directives-controllers-or-services-in-angular/]

My understanding of controllers is that they are are bound to a particular "component" of the view or handle routing from one view to another and many instances of controllers can be made, whereas services are "singletons", being created only once in the life-cycle of the app and have different available business handling logic that can be injected into the various controllers.

Further reading:

[When To Use Directives vs Controllers vs Servies][http://kirkbushell.me/when-to-use-directives-controllers-or-services-in-angular/]
[Angular Docs: Services][https://docs.angularjs.org/guide/services]
[Very helpful stackoverflow answers][https://stackoverflow.com/questions/11171778/difference-between-service-directive-and-module]
