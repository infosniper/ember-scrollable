import {
  moduleFor,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleFor('view:sidebar', 'SidebarView');

test('has a default value for isCollapsed', function() {
  var view = this.subject();

  equal(view.get('isCollapsed'), false);
});

test('isCollapsed equals the sidebarCollapsed preference if set', function() {
  var view = this.subject();

  view.set('controller', Ember.Controller.create({
    preferences: Ember.Object.create({ sidebarCollapsed: true })
  }));

  equal(view.get('isCollapsed'), true);
});
