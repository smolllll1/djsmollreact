import React from 'react';
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { Home } from '../../pages/home';
import { About } from '../../pages/about';
import { Contacts } from '../../pages/contacts';
import { Registration } from '../../pages/registration';
import { Login } from '../../pages/login';
import { MoviesPages } from '../../pages/movies-pages';
import MoviesListInfo from '../movies-list-info';
import { PeoplePages } from '../../pages/people-pages';
import { PeopleListInfo } from '../people-list-info';
import { Search } from "../../pages/search";
import { SearchList } from '../search-list';
import { SearchMoviesList } from "../search-movies-list";
import { SearchPeopleList } from '../search-people-list';
import { UsersAccount } from '../../pages/users-account';
import { UsersSettings } from '../../pages/users-settings';
import { UsersEvents } from '../../pages/users-events';
import { UsersRecent } from '../users-recent';
import { UsersNotification } from '../users-notification';
import { Updated } from '../../pages/updated';
import { PrivacyPolicy } from '../../pages/privacy-policy';
import { TermsUse } from '../../pages/terms';
import { NotFound } from '../../pages/not-found';
import { AuthenticationDataProvider } from '../data/authentication-data';
import { ContentDataProvider } from '../data/content-data';
import { NotificationDataProvider } from '../data/notification-data';
import { SearchValueProvider } from '../data/search-data';
import { Layout } from '../layout/layout';

const App = () => {

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait" initial={false}>
        <AuthenticationDataProvider>
          <ContentDataProvider>
            <NotificationDataProvider>
              <SearchValueProvider>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route exact path="about" element={<About />} />
                    <Route exact path="contacts/*" element={<Contacts />}>
                      {/* h2 to be replaced by components in the future */}
                      <Route exact path="logos-attribution" element={<h2>Logos & Attribution</h2>} />
                      <Route exact path="general" element={<h2>General</h2>} />
                      <Route exact path="account" element={<h2>Account</h2>} />
                      <Route exact path="website" element={<h2>Website</h2>} />
                    </Route>
                    {/* public routes */}
                    <Route exact path="registration" element={<Registration />} />
                    <Route exact path="login" element={<Login />} />
                    <Route exact path="users/account/:usersId" element={<UsersAccount />} />
                    <Route exact path="events/:usersId/*" element={<UsersEvents />}>
                      {/* h2 to be replaced by components in the future */}
                      <Route exact path="recent" element={<UsersRecent />} />
                      <Route exact path="notifications" element={<UsersNotification />} />
                      <Route exact path="emails" element={<h2>Emails</h2>} />
                    </Route>
                    <Route exact path="settings/:usersId/*" element={<UsersSettings />}>
                      {/* h2 to be replaced by components in the future */}
                      <Route exact path="edit-profile" element={<h2>Edit Profile</h2>} />
                      <Route exact path="account" element={<h2>Account Settings</h2>} />
                      <Route exact path="streaming" element={<h2>Streaming Services</h2>} />
                      <Route exact path="notifications" element={<h2>Notifications</h2>} />
                      <Route exact path="blocked-users" element={<h2>Blocked Users</h2>} />
                      <Route exact path="import-list" element={<h2>Import List</h2>} />
                      <Route exact path="sharing" element={<h2>Sharing Settings</h2>} />
                      <Route exact path="sessions" element={<h2>Sessions</h2>} />
                      <Route exact path="api" element={<h2>API</h2>} />
                    </Route>
                    {/* search pages */}
                    <Route exact path="search" element={<Search />} />
                    <Route exact path="search/:queryId" element={<SearchList />} />
                    <Route exact path="search_movies" element={<SearchMoviesList />} />
                    <Route exact path="search_people" element={<SearchPeopleList />} />
                    {/* content pages */}
                    <Route exact path="pop_movies" element={<MoviesPages />} />
                    <Route exact path="pop_movies/:moviesId" element={<MoviesListInfo />} />
                    <Route exact path="pop_people" element={<PeoplePages />} />
                    <Route exact path="pop_people/:personId" element={<PeopleListInfo />} />
                    {/* page under development */}
                    <Route exact path="updated" element={<Updated />}></Route>
                    {/* terms */}
                    <Route exact path="privacy-policy" element={<PrivacyPolicy />}></Route>
                    <Route exact path="terms" element={<TermsUse />}></Route>
                    {/* catch all missing */}
                    <Route exact path="*" element={<NotFound />}></Route>
                  </Route>
                </Routes>
              </SearchValueProvider>
            </NotificationDataProvider>
          </ContentDataProvider>
        </AuthenticationDataProvider>
      </AnimatePresence>
    </ErrorBoundary >
  );
}

export default App;