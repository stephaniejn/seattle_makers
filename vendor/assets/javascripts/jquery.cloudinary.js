



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>cloudinary_js/jquery.cloudinary.js at master · cloudinary/cloudinary_js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="cloudinary/cloudinary_js" name="twitter:title" /><meta content="cloudinary_js - Cloudinary JavaScript library" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/1460763?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/1460763?v=3&amp;s=400" property="og:image" /><meta content="cloudinary/cloudinary_js" property="og:title" /><meta content="https://github.com/cloudinary/cloudinary_js" property="og:url" /><meta content="cloudinary_js - Cloudinary JavaScript library" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="188F45E2:2BEE:1381009:54C91D4A" name="octolytics-dimension-request_id" /><meta content="8847422" name="octolytics-actor-id" /><meta content="nicklathe" name="octolytics-actor-login" /><meta content="22fc51f4e1b6bd2bfffe1fdff44b8924a90b431dfa92cdf4aa1eb69127b99164" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="P2uhC02LK4JdMLCYpoHY5O02u6z3o6eKfviWe14R+gaAB9qq8DdqlXZgf9fNGLTGc3nQZr7GW+bi5xug14XTZQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-f19e43be00c28904df28a1fd1fa3c117e5d2358dd3cf0f4216536f8737c2e033.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-29c7da379589a0dc8a4aeee9d661ddbbc6726ded580d170ced239d72d1137908.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="52aee216f294b9c9a6a8b25f193226a4">

      
  <meta name="description" content="cloudinary_js - Cloudinary JavaScript library">
  <meta name="go-import" content="github.com/cloudinary/cloudinary_js git https://github.com/cloudinary/cloudinary_js.git">

  <meta content="1460763" name="octolytics-dimension-user_id" /><meta content="cloudinary" name="octolytics-dimension-user_login" /><meta content="4061261" name="octolytics-dimension-repository_id" /><meta content="cloudinary/cloudinary_js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4061261" name="octolytics-dimension-repository_network_root_id" /><meta content="cloudinary/cloudinary_js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/cloudinary/cloudinary_js/commits/master.atom" rel="alternate" title="Recent Commits to cloudinary_js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/cloudinary/cloudinary_js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/cloudinary/cloudinary_js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/nicklathe" data-ga-click="Header, go to profile, text:username">
      <img alt="Nick Lathe" class="avatar" data-user="8847422" height="20" src="https://avatars3.githubusercontent.com/u/8847422?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">nicklathe</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="cloudinary/cloudinary_js">This repository</span>
    </li>
      <li>
        <a href="/cloudinary/cloudinary_js/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="wsqijamW9Sz0Gv45Hs2DoavNucCYQ/Gxyj502rN8HDyholKs9KSyvOwP2cYgCiVloNtQr9FWYym3l3GfABq7kg==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="rckDuZ1ND6RcdEVyekrBfpuLGbowJl5sYfsGZTRHdCmV9NP0Ez4UTe3q+7ojoldYE6ApfuAUtG0LiuQPio1Usw==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="4061261" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/cloudinary/cloudinary_js/watchers">
        13
      </a>
      <a href="/cloudinary/cloudinary_js/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/cloudinary/cloudinary_js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="F1itbA5OqyOV7orH/8usz/WKOICSBq+s2uWP4dk0N8xyHJpzm3AW7e8Yp73Vkg9VFwvyfdYt2QttoyuoBxcDHw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar cloudinary/cloudinary_js">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/cloudinary/cloudinary_js/stargazers">
          93
        </a>
</form>
    <form accept-charset="UTF-8" action="/cloudinary/cloudinary_js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6M4z/5DBaauCE+dKhAJ0W+sRCByunZywde3mwE9WpFKQnVX30g5HGIpEJR/3VcNs/9gQFFi0eQgxM8++p12Zzw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star cloudinary/cloudinary_js">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/cloudinary/cloudinary_js/stargazers">
          93
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/cloudinary/cloudinary_js/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of cloudinary/cloudinary_js to your account" aria-label="Fork your own copy of cloudinary/cloudinary_js to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/cloudinary/cloudinary_js/network" class="social-count">80</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/cloudinary" class="url fn" itemprop="url" rel="author"><span itemprop="title">cloudinary</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/cloudinary/cloudinary_js" class="js-current-repository" data-pjax="#js-repo-pjax-container">cloudinary_js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/cloudinary/cloudinary_js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/cloudinary/cloudinary_js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /cloudinary/cloudinary_js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/cloudinary/cloudinary_js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /cloudinary/cloudinary_js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/cloudinary/cloudinary_js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /cloudinary/cloudinary_js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/cloudinary/cloudinary_js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /cloudinary/cloudinary_js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/cloudinary/cloudinary_js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /cloudinary/cloudinary_js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/cloudinary/cloudinary_js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /cloudinary/cloudinary_js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/cloudinary/cloudinary_js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:cloudinary/cloudinary_js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/cloudinary/cloudinary_js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/cloudinary/cloudinary_js" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save cloudinary/cloudinary_js to your computer and use it in GitHub Desktop." aria-label="Save cloudinary/cloudinary_js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/cloudinary/cloudinary_js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of cloudinary/cloudinary_js as a zip file"
                   title="Download the contents of cloudinary/cloudinary_js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/cloudinary/cloudinary_js/blob/b10a133e8637cd8b6abd1cbf1af8f6fb1555478d/js/jquery.cloudinary.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:83b6d3e331fb76879d8cee3ed9312bcf -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/blob/master/js/jquery.cloudinary.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.21/js/jquery.cloudinary.js"
                 data-name="1.0.21"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.21">1.0.21</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.20/js/jquery.cloudinary.js"
                 data-name="1.0.20"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.20">1.0.20</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.19/js/jquery.cloudinary.js"
                 data-name="1.0.19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.19">1.0.19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.18/js/jquery.cloudinary.js"
                 data-name="1.0.18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.18">1.0.18</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.17/js/jquery.cloudinary.js"
                 data-name="1.0.17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.17">1.0.17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.16/js/jquery.cloudinary.js"
                 data-name="1.0.16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.16">1.0.16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.15/js/jquery.cloudinary.js"
                 data-name="1.0.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.15">1.0.15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.14/js/jquery.cloudinary.js"
                 data-name="1.0.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.14">1.0.14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.13/js/jquery.cloudinary.js"
                 data-name="1.0.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.13">1.0.13</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.12/js/jquery.cloudinary.js"
                 data-name="1.0.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.12">1.0.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.11/js/jquery.cloudinary.js"
                 data-name="1.0.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.11">1.0.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.8/js/jquery.cloudinary.js"
                 data-name="1.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.8">1.0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.7/js/jquery.cloudinary.js"
                 data-name="1.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.7">1.0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.6/js/jquery.cloudinary.js"
                 data-name="1.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.6">1.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.5/js/jquery.cloudinary.js"
                 data-name="1.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.5">1.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cloudinary/cloudinary_js/tree/1.0.4/js/jquery.cloudinary.js"
                 data-name="1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.4">1.0.4</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/cloudinary/cloudinary_js/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/cloudinary/cloudinary_js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">cloudinary_js</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/cloudinary/cloudinary_js/tree/master/js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">jquery.cloudinary.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Nadav Soferman" class="avatar" data-user="824859" height="24" src="https://avatars0.githubusercontent.com/u/824859?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/nadavs" rel="contributor">nadavs</a></span>
        <time datetime="2014-12-11T15:21:56Z" is="relative-time">Dec 11, 2014</time>
        <div class="commit-title">
            <a href="/cloudinary/cloudinary_js/commit/b10a133e8637cd8b6abd1cbf1af8f6fb1555478d" class="message" data-pjax="true" title="Increment version to v1.0.21: Support domain sharding for https in res.cloudinary.com, support url_suffix and use_root_path for private_cdn URL building, fix potential XSS vulnerability on cloudinary_cors.html, upgrade to jquery.fileupload.js version 5.42.1, Traverse ancestors in DOM to find clientWidth for responsive images, fix dpr cache.">Increment version to v1.0.21: Support domain sharding for https in re…</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>11</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="TalLevAmi" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=TalLevAmi"><img alt="Tal Lev-Ami" class="avatar" data-user="66755" height="20" src="https://avatars0.githubusercontent.com/u/66755?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="nadavs" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=nadavs"><img alt="Nadav Soferman" class="avatar" data-user="824859" height="20" src="https://avatars2.githubusercontent.com/u/824859?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="itaibenari" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=itaibenari"><img alt="itaibenari" class="avatar" data-user="498228" height="20" src="https://avatars0.githubusercontent.com/u/498228?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="zvictor" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=zvictor"><img alt="zVictor" class="avatar" data-user="181076" height="20" src="https://avatars3.githubusercontent.com/u/181076?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="sl4m" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=sl4m"><img alt="skim" class="avatar" data-user="47347" height="20" src="https://avatars2.githubusercontent.com/u/47347?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ethul" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=ethul"><img alt="eric" class="avatar" data-user="350411" height="20" src="https://avatars1.githubusercontent.com/u/350411?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="justinschier" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=justinschier"><img alt="Justin Schier" class="avatar" data-user="126453" height="20" src="https://avatars2.githubusercontent.com/u/126453?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Maxim-Filimonov" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=Maxim-Filimonov"><img alt="tpaktop" class="avatar" data-user="360645" height="20" src="https://avatars1.githubusercontent.com/u/360645?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="digitaltoad" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=digitaltoad"><img alt="Joshua Borton" class="avatar" data-user="23583" height="20" src="https://avatars3.githubusercontent.com/u/23583?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="aceunreal" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=aceunreal"><img alt="Bastien Vetault" class="avatar" data-user="1103280" height="20" src="https://avatars2.githubusercontent.com/u/1103280?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="amayvs" href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js?author=amayvs"><img alt="Amay Shah" class="avatar" data-user="842194" height="20" src="https://avatars3.githubusercontent.com/u/842194?v=3&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Tal Lev-Ami" data-user="66755" height="24" src="https://avatars2.githubusercontent.com/u/66755?v=3&amp;s=48" width="24" />
            <a href="/TalLevAmi">TalLevAmi</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Nadav Soferman" data-user="824859" height="24" src="https://avatars0.githubusercontent.com/u/824859?v=3&amp;s=48" width="24" />
            <a href="/nadavs">nadavs</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="itaibenari" data-user="498228" height="24" src="https://avatars2.githubusercontent.com/u/498228?v=3&amp;s=48" width="24" />
            <a href="/itaibenari">itaibenari</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="zVictor" data-user="181076" height="24" src="https://avatars1.githubusercontent.com/u/181076?v=3&amp;s=48" width="24" />
            <a href="/zvictor">zvictor</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="skim" data-user="47347" height="24" src="https://avatars0.githubusercontent.com/u/47347?v=3&amp;s=48" width="24" />
            <a href="/sl4m">sl4m</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="eric" data-user="350411" height="24" src="https://avatars3.githubusercontent.com/u/350411?v=3&amp;s=48" width="24" />
            <a href="/ethul">ethul</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Justin Schier" data-user="126453" height="24" src="https://avatars0.githubusercontent.com/u/126453?v=3&amp;s=48" width="24" />
            <a href="/justinschier">justinschier</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="tpaktop" data-user="360645" height="24" src="https://avatars3.githubusercontent.com/u/360645?v=3&amp;s=48" width="24" />
            <a href="/Maxim-Filimonov">Maxim-Filimonov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Joshua Borton" data-user="23583" height="24" src="https://avatars1.githubusercontent.com/u/23583?v=3&amp;s=48" width="24" />
            <a href="/digitaltoad">digitaltoad</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Bastien Vetault" data-user="1103280" height="24" src="https://avatars0.githubusercontent.com/u/1103280?v=3&amp;s=48" width="24" />
            <a href="/aceunreal">aceunreal</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Amay Shah" data-user="842194" height="24" src="https://avatars1.githubusercontent.com/u/842194?v=3&amp;s=48" width="24" />
            <a href="/amayvs">amayvs</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>801 lines (735 sloc)</span>
          <span class="meta-divider"></span>
        <span>32.766 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/cloudinary/cloudinary_js/raw/master/js/jquery.cloudinary.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/cloudinary/cloudinary_js/blame/master/js/jquery.cloudinary.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/cloudinary/cloudinary_js/commits/master/js/jquery.cloudinary.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/cloudinary/cloudinary_js?branch=master&amp;filepath=js%2Fjquery.cloudinary.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/cloudinary/cloudinary_js/edit/master/js/jquery.cloudinary.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/cloudinary/cloudinary_js/delete/master/js/jquery.cloudinary.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> * Cloudinary&#39;s jQuery library - v1.0.21</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> * Copyright Cloudinary</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> * see https://github.com/cloudinary/cloudinary_js</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">(<span class="pl-st">function</span> (<span class="pl-vpf">factory</span>) {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">  <span class="pl-s1"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> define.amd) {</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">    <span class="pl-c">// Register as an anonymous AMD module:</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">    define([</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>jquery<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>jquery.ui.widget<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>jquery.iframe-transport<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">      <span class="pl-s1"><span class="pl-pds">&#39;</span>jquery.fileupload<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">    ], factory);</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">    <span class="pl-c">// Browser globals:</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">    <span class="pl-s">var</span> $ <span class="pl-k">=</span> <span class="pl-s3">window</span>.jQuery;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">    factory($);</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">    $(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">      <span class="pl-k">if</span>($.fn.cloudinary_fileupload <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">        $(<span class="pl-s1"><span class="pl-pds">&quot;</span>input.cloudinary-fileupload[type=file]<span class="pl-pds">&quot;</span></span>).cloudinary_fileupload();</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">}(<span class="pl-st">function</span> (<span class="pl-vpf">$</span>) {</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">  <span class="pl-s1"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">  <span class="pl-s">var</span> CF_SHARED_CDN <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>d3jpl91pxevbkh.cloudfront.net<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">  <span class="pl-s">var</span> OLD_AKAMAI_SHARED_CDN <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>cloudinary-a.akamaihd.net<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">  <span class="pl-s">var</span> AKAMAI_SHARED_CDN <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>res.cloudinary.com<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">  <span class="pl-s">var</span> SHARED_CDN <span class="pl-k">=</span> AKAMAI_SHARED_CDN;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">utf8_encode</span> (<span class="pl-vpf">argString</span>) {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">    <span class="pl-c">// http://kevin.vanzonneveld.net</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">    <span class="pl-c">// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">    <span class="pl-c">// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">    <span class="pl-c">// +   improved by: sowberry</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">    <span class="pl-c">// +    tweaked by: Jack</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">    <span class="pl-c">// +   bugfixed by: Onno Marsman</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">    <span class="pl-c">// +   improved by: Yves Sucaet</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">    <span class="pl-c">// +   bugfixed by: Onno Marsman</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">    <span class="pl-c">// +   bugfixed by: Ulrich</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">    <span class="pl-c">// +   bugfixed by: Rafal Kukawski</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">    <span class="pl-c">// +   improved by: kirilloid</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">    <span class="pl-c">// *     example 1: utf8_encode(&#39;Kevin van Zonneveld&#39;);</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">    <span class="pl-c">// *     returns 1: &#39;Kevin van Zonneveld&#39;</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">    <span class="pl-k">if</span> (argString <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-k">typeof</span> argString <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">    <span class="pl-s">var</span> string <span class="pl-k">=</span> (argString <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>); <span class="pl-c">// .replace(/\r\n/g, &quot;\n&quot;).replace(/\r/g, &quot;\n&quot;);</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">    <span class="pl-s">var</span> utftext <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">        start, end, stringl <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">    start <span class="pl-k">=</span> end <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">    stringl <span class="pl-k">=</span> string.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">    <span class="pl-k">for</span> (<span class="pl-s">var</span> n <span class="pl-k">=</span> <span class="pl-c1">0</span>; n <span class="pl-k">&lt;</span> stringl; n<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">      <span class="pl-s">var</span> c1 <span class="pl-k">=</span> string.<span class="pl-s3">charCodeAt</span>(n);</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">      <span class="pl-s">var</span> enc <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">      <span class="pl-k">if</span> (c1 <span class="pl-k">&lt;</span> <span class="pl-c1">128</span>) {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">        end<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (c1 <span class="pl-k">&gt;</span> <span class="pl-c1">127</span> <span class="pl-k">&amp;&amp;</span> c1 <span class="pl-k">&lt;</span> <span class="pl-c1">2048</span>) {</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">        enc <span class="pl-k">=</span> <span class="pl-s3">String</span>.<span class="pl-s3">fromCharCode</span>((c1 <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">6</span>) | <span class="pl-c1">192</span>, (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">63</span>) | <span class="pl-c1">128</span>);</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">        enc <span class="pl-k">=</span> <span class="pl-s3">String</span>.<span class="pl-s3">fromCharCode</span>((c1 <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">12</span>) | <span class="pl-c1">224</span>, ((c1 <span class="pl-k">&gt;&gt;</span> <span class="pl-c1">6</span>) <span class="pl-k">&amp;</span> <span class="pl-c1">63</span>) | <span class="pl-c1">128</span>, (c1 <span class="pl-k">&amp;</span> <span class="pl-c1">63</span>) | <span class="pl-c1">128</span>);</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">      <span class="pl-k">if</span> (enc <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">        <span class="pl-k">if</span> (end <span class="pl-k">&gt;</span> start) {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">          utftext <span class="pl-k">+=</span> string.<span class="pl-s3">slice</span>(start, end);</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">        utftext <span class="pl-k">+=</span> enc;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">        start <span class="pl-k">=</span> end <span class="pl-k">=</span> n <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">    <span class="pl-k">if</span> (end <span class="pl-k">&gt;</span> start) {</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">      utftext <span class="pl-k">+=</span> string.<span class="pl-s3">slice</span>(start, stringl);</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">    <span class="pl-k">return</span> utftext;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">crc32</span> (<span class="pl-vpf">str</span>) {</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">    <span class="pl-c">// http://kevin.vanzonneveld.net</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">    <span class="pl-c">// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">    <span class="pl-c">// +   improved by: T0bsn</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">    <span class="pl-c">// +   improved by: http://stackoverflow.com/questions/2647935/javascript-crc32-function-and-php-crc32-not-matching</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">    <span class="pl-c">// -    depends on: utf8_encode</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">    <span class="pl-c">// *     example 1: crc32(&#39;Kevin van Zonneveld&#39;);</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">    <span class="pl-c">// *     returns 1: 1249991249</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">    str <span class="pl-k">=</span> utf8_encode(str);</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">    var table = &quot;00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D&quot;;</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">    <span class="pl-s">var</span> crc <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">    <span class="pl-s">var</span> x <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">    <span class="pl-s">var</span> y <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">    crc <span class="pl-k">=</span> crc <span class="pl-k">^</span> (<span class="pl-k">-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">    <span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, iTop <span class="pl-k">=</span> str.<span class="pl-sc">length</span>; i <span class="pl-k">&lt;</span> iTop; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">      y <span class="pl-k">=</span> (crc <span class="pl-k">^</span> str.<span class="pl-s3">charCodeAt</span>(i)) <span class="pl-k">&amp;</span> <span class="pl-c1">0xFF</span>;</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">      x <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>0x<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> table.<span class="pl-s3">substr</span>(y <span class="pl-k">*</span> <span class="pl-c1">9</span>, <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">      crc <span class="pl-k">=</span> (crc <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">8</span>) <span class="pl-k">^</span> x;</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">    crc <span class="pl-k">=</span> crc <span class="pl-k">^</span> (<span class="pl-k">-</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">    <span class="pl-c">//convert to unsigned 32-bit int if needed</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">    <span class="pl-k">if</span> (crc <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {crc <span class="pl-k">+=</span> <span class="pl-c1">4294967296</span>;}</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">    <span class="pl-k">return</span> crc;</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">option_consume</span>(<span class="pl-vpf">options</span>, <span class="pl-vpf">option_name</span>, <span class="pl-vpf">default_value</span>) {</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">    <span class="pl-s">var</span> result <span class="pl-k">=</span> options[option_name];</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">    <span class="pl-k">delete</span> options[option_name];</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-k">typeof</span>(result) <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> default_value <span class="pl-k">:</span> result;</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">build_array</span>(<span class="pl-vpf">arg</span>) {</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">    <span class="pl-k">if</span> (arg <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-k">typeof</span>(arg) <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">      <span class="pl-k">return</span> [];</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> ($.isArray(arg)) {</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">      <span class="pl-k">return</span> arg;</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">      <span class="pl-k">return</span> [arg];</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">present</span>(<span class="pl-vpf">value</span>) {</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-k">typeof</span> value <span class="pl-k">!=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> value).<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">process_base_transformations</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">    <span class="pl-s">var</span> transformations <span class="pl-k">=</span> build_array(options.transformation);</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">    <span class="pl-s">var</span> all_named <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">    <span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> transformations.<span class="pl-sc">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">      all_named <span class="pl-k">=</span> all_named <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span>(transformations[i]) <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">    <span class="pl-k">if</span> (all_named) {</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">      <span class="pl-k">return</span> [];</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">    <span class="pl-k">delete</span> options.transformation;</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">    <span class="pl-s">var</span> base_transformations <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">    <span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> transformations.<span class="pl-sc">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">      <span class="pl-s">var</span> transformation <span class="pl-k">=</span> transformations[i];</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span>(transformation) <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">        base_transformations.<span class="pl-s3">push</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>t_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> transformation);</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">        base_transformations.<span class="pl-s3">push</span>(generate_transformation_string($.extend({}, transformation)));</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">    <span class="pl-k">return</span> base_transformations;</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">process_size</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">    <span class="pl-s">var</span> size <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>size<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">    <span class="pl-k">if</span> (size) {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">      <span class="pl-s">var</span> split_size <span class="pl-k">=</span> size.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">      options.<span class="pl-sc">width</span> <span class="pl-k">=</span> split_size[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">      options.<span class="pl-sc">height</span> <span class="pl-k">=</span> split_size[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">process_html_dimensions</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">    <span class="pl-s">var</span> width <span class="pl-k">=</span> options.<span class="pl-sc">width</span>, height <span class="pl-k">=</span> options.<span class="pl-sc">height</span>;</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">    <span class="pl-s">var</span> has_layer <span class="pl-k">=</span> options.overlay <span class="pl-k">||</span> options.underlay;</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">    <span class="pl-s">var</span> crop <span class="pl-k">=</span> options.crop;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">    <span class="pl-s">var</span> use_as_html_dimensions <span class="pl-k">=</span> <span class="pl-k">!</span>has_layer <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>options.angle <span class="pl-k">&amp;&amp;</span> crop <span class="pl-k">!=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>fit<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> crop <span class="pl-k">!=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>limit<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> crop <span class="pl-k">!=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>lfill<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">    <span class="pl-k">if</span> (use_as_html_dimensions) {</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">      <span class="pl-k">if</span> (width <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>options.html_width <span class="pl-k">&amp;&amp;</span> width <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-s3">parseFloat</span>(width) <span class="pl-k">&gt;=</span> <span class="pl-c1">1</span>) options.html_width <span class="pl-k">=</span> width;</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">      <span class="pl-k">if</span> (height <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>options.html_height <span class="pl-k">&amp;&amp;</span> <span class="pl-s3">parseFloat</span>(height) <span class="pl-k">&gt;=</span> <span class="pl-c1">1</span>) options.html_height <span class="pl-k">=</span> height;</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>crop <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>has_layer) {</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">      <span class="pl-k">delete</span> options.<span class="pl-sc">width</span>;</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">      <span class="pl-k">delete</span> options.<span class="pl-sc">height</span>;</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">  <span class="pl-s">var</span> TRANSFORMATION_PARAM_NAME_MAPPING <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">    angle<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">    background<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>b<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">    border<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>bo<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">    color<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>co<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">    color_space<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>cs<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">    crop<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>c<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">    default_image<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">    delay<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>dl<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">    density<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>dn<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">    dpr<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>dpr<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">    effect<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>e<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">    fetch_format<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>f<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">    flags<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fl<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">    gravity<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">    height<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>h<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">    opacity<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>o<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">    overlay<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>l<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">    page<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>pg<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">    prefix<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>p<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">    quality<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>q<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">    radius<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>r<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">    transformation<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>t<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">    underlay<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>u<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">    width<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>w<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">    x<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>x<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">    y<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>y<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">  <span class="pl-s">var</span> TRANSFORMATION_PARAM_VALUE_MAPPING <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">    <span class="pl-en">angle</span>: <span class="pl-st">function</span>(<span class="pl-vpf">angle</span>){ <span class="pl-k">return</span> build_array(angle).<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>); },</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">    <span class="pl-en">background</span>: <span class="pl-st">function</span>(<span class="pl-vpf">background</span>) { <span class="pl-k">return</span> background.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#<span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>rgb:<span class="pl-pds">&#39;</span></span>);},</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">    <span class="pl-en">border</span>: <span class="pl-st">function</span>(<span class="pl-vpf">border</span>) {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">      <span class="pl-k">if</span> ($.isPlainObject(border)) {</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">        <span class="pl-s">var</span> border_width <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (border.<span class="pl-sc">width</span> <span class="pl-k">||</span> <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">        <span class="pl-s">var</span> border_color <span class="pl-k">=</span> (border.<span class="pl-sc">color</span> <span class="pl-k">||</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>black<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#<span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>rgb:<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">        border <span class="pl-k">=</span> border_width <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>px_solid_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> border_color;</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">      <span class="pl-k">return</span> border;</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">    <span class="pl-en">color</span>: <span class="pl-st">function</span>(<span class="pl-vpf">color</span>) { <span class="pl-k">return</span> color.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#<span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>rgb:<span class="pl-pds">&#39;</span></span>);},</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">    <span class="pl-en">dpr</span>: <span class="pl-st">function</span>(<span class="pl-vpf">dpr</span>) {</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">      dpr <span class="pl-k">=</span> dpr.<span class="pl-s3">toString</span>();</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">      <span class="pl-k">if</span> (dpr <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>auto<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>1.0<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (dpr.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">        <span class="pl-k">return</span> dpr <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.0<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">        <span class="pl-k">return</span> dpr;</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">    <span class="pl-en">effect</span>: <span class="pl-st">function</span>(<span class="pl-vpf">effect</span>) { <span class="pl-k">return</span> build_array(effect).<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>);},</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">    <span class="pl-en">flags</span>: <span class="pl-st">function</span>(<span class="pl-vpf">flags</span>) { <span class="pl-k">return</span> build_array(flags).<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>)},</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">    <span class="pl-en">transformation</span>: <span class="pl-st">function</span>(<span class="pl-vpf">transformation</span>) { <span class="pl-k">return</span> build_array(transformation).<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">generate_transformation_string</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">    <span class="pl-s">var</span> base_transformations <span class="pl-k">=</span> process_base_transformations(options);</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">    process_size(options);</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">    process_html_dimensions(options);</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">    <span class="pl-s">var</span> params <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">    <span class="pl-k">for</span> (<span class="pl-s">var</span> param <span class="pl-k">in</span> TRANSFORMATION_PARAM_NAME_MAPPING) {</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">      <span class="pl-s">var</span> value <span class="pl-k">=</span> option_consume(options, param);</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>present(value)) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">      <span class="pl-k">if</span> (TRANSFORMATION_PARAM_VALUE_MAPPING[param]) {</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">        value <span class="pl-k">=</span> TRANSFORMATION_PARAM_VALUE_MAPPING[param](value);</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>present(value)) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">      params.<span class="pl-s3">push</span>(TRANSFORMATION_PARAM_NAME_MAPPING[param] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> value);</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">    params.<span class="pl-s3">sort</span>();</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">    <span class="pl-s">var</span> raw_transformation <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>raw_transformation<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">    <span class="pl-k">if</span> (present(raw_transformation)) params.<span class="pl-s3">push</span>(raw_transformation);</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">    <span class="pl-s">var</span> transformation <span class="pl-k">=</span> params.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">    <span class="pl-k">if</span> (present(transformation)) base_transformations.<span class="pl-s3">push</span>(transformation);</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">    <span class="pl-k">return</span> base_transformations.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">absolutize</span>(<span class="pl-vpf">url</span>) {</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>url.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>https<span class="pl-k">?</span>:<span class="pl-cce">\/</span><span class="pl-pds">/</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">      <span class="pl-s">var</span> prefix <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-sc">location</span>.<span class="pl-sc">protocol</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>//<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-s3">document</span>.<span class="pl-sc">location</span>.<span class="pl-sc">host</span>;</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">      <span class="pl-k">if</span> (url[<span class="pl-c1">0</span>] <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>?<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">        prefix <span class="pl-k">+=</span> <span class="pl-s3">document</span>.<span class="pl-sc">location</span>.<span class="pl-sc">pathname</span>;</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (url[<span class="pl-c1">0</span>] <span class="pl-k">!=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">        prefix <span class="pl-k">+=</span> <span class="pl-s3">document</span>.<span class="pl-sc">location</span>.<span class="pl-sc">pathname</span>.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\/</span>]</span><span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">      url <span class="pl-k">=</span> prefix <span class="pl-k">+</span> url;</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">    <span class="pl-k">return</span> url;</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">cloudinary_url_prefix</span>(<span class="pl-vpf">public_id</span>, <span class="pl-vpf">cloud_name</span>, <span class="pl-vpf">private_cdn</span>, <span class="pl-vpf">cdn_subdomain</span>, <span class="pl-vpf">secure_cdn_subdomain</span>, <span class="pl-vpf">cname</span>, <span class="pl-vpf">secure</span>, <span class="pl-vpf">secure_distribution</span>, <span class="pl-vpf">protocol</span>) {</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">    <span class="pl-k">if</span> (cloud_name.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/</span><span class="pl-pds">/</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>secure) {</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>/res<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> cloud_name;</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">    <span class="pl-s">var</span> prefix <span class="pl-k">=</span> secure <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>https://<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> (<span class="pl-s3">window</span>.<span class="pl-sc">location</span>.<span class="pl-sc">protocol</span> <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>file:<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>file://<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>http://<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">    prefix <span class="pl-k">=</span> protocol <span class="pl-k">?</span> protocol <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>//<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> prefix;</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">    <span class="pl-s">var</span> shared_domain <span class="pl-k">=</span> <span class="pl-k">!</span>private_cdn;</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">    <span class="pl-k">if</span> (secure) {</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>secure_distribution <span class="pl-k">||</span> secure_distribution <span class="pl-k">==</span> OLD_AKAMAI_SHARED_CDN) {</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">        secure_distribution <span class="pl-k">=</span> private_cdn <span class="pl-k">?</span> cloud_name <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>-res.cloudinary.com<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> SHARED_CDN;</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">      shared_domain <span class="pl-k">=</span> shared_domain <span class="pl-k">||</span> secure_distribution <span class="pl-k">==</span> SHARED_CDN;</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">      <span class="pl-k">if</span> (secure_cdn_subdomain <span class="pl-k">==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> shared_domain) {</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">        secure_cdn_subdomain <span class="pl-k">=</span> cdn_subdomain;</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">      <span class="pl-k">if</span> (secure_cdn_subdomain) {</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">        secure_distribution <span class="pl-k">=</span> secure_distribution.<span class="pl-s3">replace</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>res.cloudinary.com<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>res-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ((crc32(public_id) <span class="pl-k">%</span> <span class="pl-c1">5</span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.cloudinary.com<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">      prefix <span class="pl-k">+=</span> secure_distribution;</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (cname) {</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">      <span class="pl-s">var</span> subdomain <span class="pl-k">=</span> cdn_subdomain <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>a<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ((crc32(public_id) <span class="pl-k">%</span> <span class="pl-c1">5</span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;      </td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">      prefix <span class="pl-k">+=</span> subdomain <span class="pl-k">+</span> cname;</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">      prefix <span class="pl-k">+=</span> (private_cdn <span class="pl-k">?</span> cloud_name <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>-res<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>res<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">      prefix <span class="pl-k">+=</span> (cdn_subdomain <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> ((crc32(public_id) <span class="pl-k">%</span> <span class="pl-c1">5</span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) </td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">      prefix <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.cloudinary.com<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">    <span class="pl-k">if</span> (shared_domain) prefix <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> cloud_name;</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">    <span class="pl-k">return</span> prefix;</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">finalize_resource_type</span>(<span class="pl-vpf">resource_type</span>, <span class="pl-vpf">type</span>, <span class="pl-vpf">url_suffix</span>, <span class="pl-vpf">use_root_path</span>, <span class="pl-vpf">shorten</span>) {</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">    <span class="pl-s">var</span> resource_type_and_type <span class="pl-k">=</span> resource_type <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> type;</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">    <span class="pl-k">if</span> (url_suffix) {</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">      <span class="pl-k">if</span> (resource_type_and_type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>image/upload<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">        resource_type_and_type <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>images<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (resource_type_and_type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>raw/upload<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">        resource_type_and_type <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>files<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">        <span class="pl-k">throw</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>URL Suffix only supported for image/upload and raw/upload<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">    <span class="pl-k">if</span> (use_root_path) {</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">      <span class="pl-k">if</span> (resource_type_and_type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>image/upload<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> resource_type_and_type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>images<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">        resource_type_and_type <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">        <span class="pl-k">throw</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Root path only supported for image/upload<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">    <span class="pl-k">if</span> (shorten <span class="pl-k">&amp;&amp;</span> resource_type_and_type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>image/upload<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">      resource_type_and_type <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>iu<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">    <span class="pl-k">return</span> resource_type_and_type;</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">cloudinary_url</span>(<span class="pl-vpf">public_id</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">    options <span class="pl-k">=</span> options <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">    <span class="pl-s">var</span> type <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>type<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>upload<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">    <span class="pl-k">if</span> (type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fetch<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">      options.fetch_format <span class="pl-k">=</span> options.fetch_format <span class="pl-k">||</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>format<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">    <span class="pl-s">var</span> transformation <span class="pl-k">=</span> generate_transformation_string(options);</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">    <span class="pl-s">var</span> resource_type <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>resource_type<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>image<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">    <span class="pl-s">var</span> version <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>version<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">    <span class="pl-s">var</span> format <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>format<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">    <span class="pl-s">var</span> cloud_name <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>cloud_name<span class="pl-pds">&#39;</span></span>, $.cloudinary.config().cloud_name);</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>cloud_name) <span class="pl-k">throw</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Unknown cloud_name<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">    <span class="pl-s">var</span> private_cdn <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>private_cdn<span class="pl-pds">&#39;</span></span>, $.cloudinary.config().private_cdn);</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">    <span class="pl-s">var</span> secure_distribution <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>secure_distribution<span class="pl-pds">&#39;</span></span>, $.cloudinary.config().secure_distribution);</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">    <span class="pl-s">var</span> cname <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>cname<span class="pl-pds">&#39;</span></span>, $.cloudinary.config().cname);</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">    <span class="pl-s">var</span> cdn_subdomain <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>cdn_subdomain<span class="pl-pds">&#39;</span></span>, $.cloudinary.config().cdn_subdomain);</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">    <span class="pl-s">var</span> secure_cdn_subdomain <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>secure_cdn_subdomain<span class="pl-pds">&#39;</span></span>, $.cloudinary.config().secure_cdn_subdomain);</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">    <span class="pl-s">var</span> shorten <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>shorten<span class="pl-pds">&#39;</span></span>, $.cloudinary.config().shorten);</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">    <span class="pl-s">var</span> secure <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>secure<span class="pl-pds">&#39;</span></span>, <span class="pl-s3">window</span>.<span class="pl-sc">location</span>.<span class="pl-sc">protocol</span> <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>https:<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">    <span class="pl-s">var</span> protocol <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>protocol<span class="pl-pds">&#39;</span></span>, $.cloudinary.config().<span class="pl-sc">protocol</span>);</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">    <span class="pl-s">var</span> trust_public_id <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>trust_public_id<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">    <span class="pl-s">var</span> url_suffix <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>url_suffix<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">    <span class="pl-s">var</span> use_root_path <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>use_root_path<span class="pl-pds">&#39;</span></span>, $.cloudinary.config().use_root_path);</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>private_cdn) {</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">      <span class="pl-k">if</span> (url_suffix) <span class="pl-k">throw</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>URL Suffix only supported in private CDN<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">      <span class="pl-k">if</span> (use_root_path) <span class="pl-k">throw</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Root path only supported in private CDN<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line">    <span class="pl-k">if</span> (type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fetch<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line">      public_id <span class="pl-k">=</span> absolutize(public_id);</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">    <span class="pl-k">if</span> (public_id.<span class="pl-s3">search</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>public_id.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>v<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>public_id.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>https<span class="pl-k">?</span>:<span class="pl-cce">\/</span><span class="pl-pds">/</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>present(version)) {</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">      version <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">    <span class="pl-k">if</span> (public_id.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>https<span class="pl-k">?</span>:<span class="pl-pds">/</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">      <span class="pl-k">if</span> (type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>upload<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> type <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>asset<span class="pl-pds">&quot;</span></span>) <span class="pl-k">return</span> public_id;</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">      public_id <span class="pl-k">=</span> encodeURIComponent(public_id).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>%3A<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>%2F<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">      <span class="pl-c">// Make sure public_id is URI encoded.</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">      public_id <span class="pl-k">=</span> encodeURIComponent(decodeURIComponent(public_id)).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>%3A<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>%2F<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">      <span class="pl-k">if</span> (url_suffix) {</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">        <span class="pl-k">if</span> (url_suffix.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\.\/</span>]</span><span class="pl-pds">/</span></span>)) <span class="pl-k">throw</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>url_suffix should not include . or /<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">        public_id <span class="pl-k">=</span> public_id <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> url_suffix;</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">      <span class="pl-k">if</span> (format) {</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>trust_public_id) public_id <span class="pl-k">=</span> public_id.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\.</span>(jpg<span class="pl-k">|</span>png<span class="pl-k">|</span>gif<span class="pl-k">|</span>webp)<span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">        public_id <span class="pl-k">=</span> public_id <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> format;</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">    <span class="pl-s">var</span> resource_type_and_type <span class="pl-k">=</span> finalize_resource_type(resource_type, type, url_suffix, use_root_path, shorten);</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">    <span class="pl-s">var</span> prefix <span class="pl-k">=</span> cloudinary_url_prefix(public_id, cloud_name, private_cdn, cdn_subdomain, secure_cdn_subdomain, cname, secure, secure_distribution, protocol);</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">    <span class="pl-s">var</span> url <span class="pl-k">=</span> [prefix, resource_type_and_type, transformation, version <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>v<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> version <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">               public_id].<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-k">^</span>:]</span>)<span class="pl-cce">\/</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>$1/<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">    <span class="pl-k">return</span> url;</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">default_stoppoints</span>(<span class="pl-vpf">width</span>) {</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">10</span> <span class="pl-k">*</span> <span class="pl-s3">Math</span>.<span class="pl-s3">ceil</span>(width / <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">prepare_html_url</span>(<span class="pl-vpf">public_id</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">    <span class="pl-k">if</span> ($.cloudinary.config(<span class="pl-s1"><span class="pl-pds">&#39;</span>dpr<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>options.dpr) {</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">      options.dpr <span class="pl-k">=</span> $.cloudinary.config(<span class="pl-s1"><span class="pl-pds">&#39;</span>dpr<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">    <span class="pl-s">var</span> url <span class="pl-k">=</span> cloudinary_url(public_id, options);</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">    <span class="pl-s">var</span> width <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>html_width<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">    <span class="pl-s">var</span> height <span class="pl-k">=</span> option_consume(options, <span class="pl-s1"><span class="pl-pds">&#39;</span>html_height<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">    <span class="pl-k">if</span> (width) options.<span class="pl-sc">width</span> <span class="pl-k">=</span> width;</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">    <span class="pl-k">if</span> (height) options.<span class="pl-sc">height</span> <span class="pl-k">=</span> height;</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">    <span class="pl-k">return</span> url;</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">get_config</span>(<span class="pl-vpf">name</span>, <span class="pl-vpf">options</span>, <span class="pl-vpf">default_value</span>) {</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">    <span class="pl-s">var</span> value <span class="pl-k">=</span> options[name] <span class="pl-k">||</span> $.cloudinary.config(name);</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span>(value) <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) value <span class="pl-k">=</span> default_value;</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">    <span class="pl-k">return</span> value;</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">closest_above</span>(<span class="pl-vpf">list</span>, <span class="pl-vpf">value</span>) {</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line">    <span class="pl-s">var</span> i <span class="pl-k">=</span> list.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line">    <span class="pl-k">while</span> (i <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> list[i] <span class="pl-k">&gt;=</span> value) {</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line">      i<span class="pl-k">--</span>;</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">    <span class="pl-k">return</span> list[i<span class="pl-k">+</span><span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">  <span class="pl-s">var</span> cloudinary_config <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">  <span class="pl-s">var</span> responsive_config <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">  <span class="pl-s">var</span> responsive_resize_initialized <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">  <span class="pl-s">var</span> device_pixel_ratio_cache <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">  $.cloudinary <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">    CF_SHARED_CDN<span class="pl-k">:</span> CF_SHARED_CDN,</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">    OLD_AKAMAI_SHARED_CDN<span class="pl-k">:</span> OLD_AKAMAI_SHARED_CDN,</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">    AKAMAI_SHARED_CDN<span class="pl-k">:</span> AKAMAI_SHARED_CDN,</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">    SHARED_CDN<span class="pl-k">:</span> SHARED_CDN,</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">    <span class="pl-en">config</span>: <span class="pl-st">function</span>(<span class="pl-vpf">new_config</span>, <span class="pl-vpf">new_value</span>) {</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>cloudinary_config) {</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">        cloudinary_config <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">        $(<span class="pl-s1"><span class="pl-pds">&#39;</span>meta[name^=&quot;cloudinary_&quot;]<span class="pl-pds">&#39;</span></span>).each(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">          cloudinary_config[$(<span class="pl-v">this</span>).attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>cloudinary_<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)] <span class="pl-k">=</span> $(<span class="pl-v">this</span>).attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>content<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span>(new_value) <span class="pl-k">!=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">        cloudinary_config[new_config] <span class="pl-k">=</span> new_value;</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span>(new_config) <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">        <span class="pl-k">return</span> cloudinary_config[new_config];</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (new_config) {</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">        cloudinary_config <span class="pl-k">=</span> new_config;</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">      <span class="pl-k">return</span> cloudinary_config;</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">    <span class="pl-en">url</span>: <span class="pl-st">function</span>(<span class="pl-vpf">public_id</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">      options <span class="pl-k">=</span> $.extend({}, options);</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">      <span class="pl-k">return</span> cloudinary_url(public_id, options);</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">    url_internal<span class="pl-k">:</span> cloudinary_url,</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">    <span class="pl-en">transformation_string</span>: <span class="pl-st">function</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line">      options <span class="pl-k">=</span> $.extend({}, options);</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line">      <span class="pl-k">return</span> generate_transformation_string(options);</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line">    <span class="pl-en">image</span>: <span class="pl-st">function</span>(<span class="pl-vpf">public_id</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">      options <span class="pl-k">=</span> $.extend({}, options);</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">      <span class="pl-s">var</span> url <span class="pl-k">=</span> prepare_html_url(public_id, options);</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">      <span class="pl-s">var</span> img <span class="pl-k">=</span> $(<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;img/&gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>src-cache<span class="pl-pds">&#39;</span></span>, url).attr(options).cloudinary_update(options);</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">      <span class="pl-k">return</span> img;</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code js-file-line">    <span class="pl-en">facebook_profile_image</span>: <span class="pl-st">function</span>(<span class="pl-vpf">public_id</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code js-file-line">      <span class="pl-k">return</span> $.cloudinary.image(public_id, $.extend({type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>facebook<span class="pl-pds">&#39;</span></span>}, options));</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code js-file-line">    <span class="pl-en">twitter_profile_image</span>: <span class="pl-st">function</span>(<span class="pl-vpf">public_id</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code js-file-line">      <span class="pl-k">return</span> $.cloudinary.image(public_id, $.extend({type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>twitter<span class="pl-pds">&#39;</span></span>}, options));</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code js-file-line">    <span class="pl-en">twitter_name_profile_image</span>: <span class="pl-st">function</span>(<span class="pl-vpf">public_id</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code js-file-line">      <span class="pl-k">return</span> $.cloudinary.image(public_id, $.extend({type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>twitter_name<span class="pl-pds">&#39;</span></span>}, options));</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code js-file-line">    <span class="pl-en">gravatar_image</span>: <span class="pl-st">function</span>(<span class="pl-vpf">public_id</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code js-file-line">      <span class="pl-k">return</span> $.cloudinary.image(public_id, $.extend({type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>gravatar<span class="pl-pds">&#39;</span></span>}, options));</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code js-file-line">    <span class="pl-en">fetch_image</span>: <span class="pl-st">function</span>(<span class="pl-vpf">public_id</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code js-file-line">      <span class="pl-k">return</span> $.cloudinary.image(public_id, $.extend({type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fetch<span class="pl-pds">&#39;</span></span>}, options));</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code js-file-line">    <span class="pl-en">sprite_css</span>: <span class="pl-st">function</span>(<span class="pl-vpf">public_id</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code js-file-line">      options <span class="pl-k">=</span> $.extend({type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>sprite<span class="pl-pds">&#39;</span></span>}, options);</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>public_id.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span>css<span class="pl-k">$</span><span class="pl-pds">/</span></span>)) options.format <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>css<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code js-file-line">      <span class="pl-k">return</span> $.cloudinary.url(public_id, options);</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code js-file-line">    <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code js-file-line"><span class="pl-c">     * Turn on hidpi (dpr_auto) and responsive (w_auto) processing according to the current container size and the device pixel ratio.</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code js-file-line"><span class="pl-c">     * Use the following classes:</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code js-file-line"><span class="pl-c">     * - cld-hidpi - only set dpr_auto</span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code js-file-line"><span class="pl-c">     * - cld-responsive - update both dpr_auto and w_auto</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code js-file-line"><span class="pl-c">     * @param: options</span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code js-file-line"><span class="pl-c">     * - responsive_resize - should responsive images be updated on resize (default: true).</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code js-file-line"><span class="pl-c">     * - responsive_debounce - if set, how many milliseconds after resize is done before the image is replaces (default: 100). Set to 0 to disable.</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code js-file-line"><span class="pl-c">     * - responsive_use_stoppoints:</span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code js-file-line"><span class="pl-c">     *   - true - always use stoppoints for width</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code js-file-line"><span class="pl-c">     *   - &quot;resize&quot; - use exact width on first render and stoppoints on resize (default)</span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code js-file-line"><span class="pl-c">     *   - false - always use exact width</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code js-file-line"><span class="pl-c">     * Stoppoints - to prevent creating a transformation for every pixel, stop-points can be configured. The smallest stop-point that is larger than</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code js-file-line"><span class="pl-c">     *    the wanted width will be used. The default stoppoints are all the multiples of 10. See calc_stoppoint for ways to override this.</span></td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code js-file-line">    <span class="pl-en">responsive</span>: <span class="pl-st">function</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code js-file-line">      responsive_config <span class="pl-k">=</span> $.extend(responsive_config <span class="pl-k">||</span> {}, options);</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code js-file-line">      $(<span class="pl-s1"><span class="pl-pds">&#39;</span>img.cld-responsive, img.cld-hidpi<span class="pl-pds">&#39;</span></span>).cloudinary_update(responsive_config);</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code js-file-line">      <span class="pl-s">var</span> responsive_resize <span class="pl-k">=</span> get_config(<span class="pl-s1"><span class="pl-pds">&#39;</span>responsive_resize<span class="pl-pds">&#39;</span></span>, responsive_config, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code js-file-line">      <span class="pl-k">if</span> (responsive_resize <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>responsive_resize_initialized) {</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code js-file-line">        responsive_config.resizing <span class="pl-k">=</span> responsive_resize_initialized <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code js-file-line">        <span class="pl-s">var</span> timeout <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code js-file-line">        $(<span class="pl-s3">window</span>).on(<span class="pl-s1"><span class="pl-pds">&#39;</span>resize<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code js-file-line">          <span class="pl-s">var</span> debounce <span class="pl-k">=</span> get_config(<span class="pl-s1"><span class="pl-pds">&#39;</span>responsive_debounce<span class="pl-pds">&#39;</span></span>, responsive_config, <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code js-file-line">          <span class="pl-st">function</span> <span class="pl-en">reset</span>() {</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code js-file-line">            <span class="pl-k">if</span> (timeout) {</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code js-file-line">              <span class="pl-s3">clearTimeout</span>(timeout);</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code js-file-line">              timeout <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code js-file-line">          <span class="pl-st">function</span> <span class="pl-en">run</span>() {</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code js-file-line">            $(<span class="pl-s1"><span class="pl-pds">&#39;</span>img.cld-responsive<span class="pl-pds">&#39;</span></span>).cloudinary_update(responsive_config);</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code js-file-line">          <span class="pl-st">function</span> <span class="pl-en">wait</span>() {</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code js-file-line">            <span class="pl-s3">reset</span>();</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code js-file-line">            <span class="pl-s3">setTimeout</span>(<span class="pl-st">function</span>() { <span class="pl-s3">reset</span>(); run(); }, debounce);</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code js-file-line">          <span class="pl-k">if</span> (debounce) {</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code js-file-line">            wait();</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code js-file-line">            run();</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code js-file-line">    <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code js-file-line"><span class="pl-c">     * Compute the stoppoint for the given element and width.</span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code js-file-line"><span class="pl-c">     * By default the stoppoint will be the smallest multiple of 10 larger than the width.</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code js-file-line"><span class="pl-c">     * These can be overridden by either setting the data-stoppoints attribute of an image or using $.cloudinary.config(&#39;stoppoints&#39;, stoppoints).</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code js-file-line"><span class="pl-c">     * The value can be either:</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code js-file-line"><span class="pl-c">     * - an ordered list of the wanted stoppoints</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code js-file-line"><span class="pl-c">     * - a comma separated ordered list of stoppoints</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code js-file-line"><span class="pl-c">     * - a function that returns the stoppoint given the wanted width.</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code js-file-line"><span class="pl-c">     */</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code js-file-line">    <span class="pl-en">calc_stoppoint</span>: <span class="pl-st">function</span> (<span class="pl-vpf">element</span>, <span class="pl-vpf">width</span>) {</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code js-file-line">      <span class="pl-s">var</span> stoppoints <span class="pl-k">=</span> $(element).<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>stoppoints<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> $.cloudinary.config().stoppoints <span class="pl-k">||</span> default_stoppoints;</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span>(stoppoints) <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code js-file-line">        <span class="pl-k">return</span> stoppoints(width);</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span>(stoppoints) <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code js-file-line">        stoppoints <span class="pl-k">=</span> $.map(stoppoints.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>), <span class="pl-st">function</span>(<span class="pl-vpf">val</span>){ <span class="pl-k">return</span> <span class="pl-s3">parseInt</span>(val); });</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code js-file-line">      <span class="pl-k">return</span> closest_above(stoppoints, width);</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code js-file-line">    <span class="pl-en">device_pixel_ratio</span>: <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code js-file-line">      <span class="pl-s">var</span> dpr <span class="pl-k">=</span> <span class="pl-s3">window</span>.devicePixelRatio <span class="pl-k">||</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code js-file-line">      <span class="pl-s">var</span> dpr_string <span class="pl-k">=</span> device_pixel_ratio_cache[dpr];</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>dpr_string) {</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code js-file-line">        <span class="pl-c">// Find closest supported DPR (to work correctly with device zoom)</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code js-file-line">        <span class="pl-s">var</span> dpr_used <span class="pl-k">=</span> closest_above($.cloudinary.supported_dpr_values, dpr);</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code js-file-line">        dpr_string <span class="pl-k">=</span> dpr_used.<span class="pl-s3">toString</span>();</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code js-file-line">        <span class="pl-k">if</span> (dpr_string.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>)) dpr_string <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.0<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code js-file-line">        device_pixel_ratio_cache[dpr] <span class="pl-k">=</span> dpr_string;</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code js-file-line">      <span class="pl-k">return</span> dpr_string;</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code js-file-line">    supported_dpr_values<span class="pl-k">:</span> [<span class="pl-c1">0.75</span>, <span class="pl-c1">1.0</span>, <span class="pl-c1">1.3</span>, <span class="pl-c1">1.5</span>, <span class="pl-c1">2.0</span>, <span class="pl-c1">3.0</span>]</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code js-file-line">  <span class="pl-s3">$.fn</span>.<span class="pl-en">cloudinary</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code js-file-line">    <span class="pl-v">this</span>.filter(<span class="pl-s1"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span>).each(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code js-file-line">      <span class="pl-s">var</span> img_options <span class="pl-k">=</span> $.extend({width<span class="pl-k">:</span> $(<span class="pl-v">this</span>).attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>), height<span class="pl-k">:</span> $(<span class="pl-v">this</span>).attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code js-file-line">                                  src<span class="pl-k">:</span> $(<span class="pl-v">this</span>).attr(<span class="pl-s1"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>)}, $(<span class="pl-v">this</span>).<span class="pl-sc">data</span>(), options);</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code js-file-line">      <span class="pl-s">var</span> public_id <span class="pl-k">=</span> option_consume(img_options, <span class="pl-s1"><span class="pl-pds">&#39;</span>source<span class="pl-pds">&#39;</span></span>, option_consume(img_options, <span class="pl-s1"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code js-file-line">      <span class="pl-s">var</span> url <span class="pl-k">=</span> prepare_html_url(public_id, img_options);</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code js-file-line">      $(<span class="pl-v">this</span>).<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>src-cache<span class="pl-pds">&#39;</span></span>, url).attr({width<span class="pl-k">:</span> img_options.<span class="pl-sc">width</span>, height<span class="pl-k">:</span> img_options.<span class="pl-sc">height</span>});</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code js-file-line">    }).cloudinary_update(options);</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code js-file-line">  <span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code js-file-line"><span class="pl-c">   * Update hidpi (dpr_auto) and responsive (w_auto) fields according to the current container size and the device pixel ratio.</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code js-file-line"><span class="pl-c">   * Only images marked with the cld-responsive class have w_auto updated.</span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code js-file-line"><span class="pl-c">   * options:</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code js-file-line"><span class="pl-c">   * - responsive_use_stoppoints:</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code js-file-line"><span class="pl-c">   *   - true - always use stoppoints for width</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code js-file-line"><span class="pl-c">   *   - &quot;resize&quot; - use exact width on first render and stoppoints on resize (default)</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code js-file-line"><span class="pl-c">   *   - false - always use exact width</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code js-file-line"><span class="pl-c">   * - responsive:</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code js-file-line"><span class="pl-c">   *   - true - enable responsive on this element. Can be done by adding cld-responsive.</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code js-file-line"><span class="pl-c">   *            Note that $.cloudinary.responsive() should be called once on the page.</span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code js-file-line"><span class="pl-c">   */</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code js-file-line">  <span class="pl-s3">$.fn</span>.<span class="pl-en">cloudinary_update</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code js-file-line">    options <span class="pl-k">=</span> options <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code js-file-line">    <span class="pl-s">var</span> responsive_use_stoppoints <span class="pl-k">=</span> get_config(<span class="pl-s1"><span class="pl-pds">&#39;</span>responsive_use_stoppoints<span class="pl-pds">&#39;</span></span>, options, <span class="pl-s1"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code js-file-line">    <span class="pl-s">var</span> exact <span class="pl-k">=</span> responsive_use_stoppoints <span class="pl-k">===</span> <span class="pl-c1">false</span> <span class="pl-k">||</span> (responsive_use_stoppoints <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>options.resizing);</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code js-file-line">    <span class="pl-v">this</span>.filter(<span class="pl-s1"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span>).each(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code js-file-line">      <span class="pl-k">if</span> (options.responsive) {</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code js-file-line">        $(<span class="pl-v">this</span>).addClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>cld-responsive<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code js-file-line">      <span class="pl-s">var</span> attrs <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code js-file-line">      <span class="pl-s">var</span> src <span class="pl-k">=</span> $(<span class="pl-v">this</span>).<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>src-cache<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> $(<span class="pl-v">this</span>).<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>src) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code js-file-line">      <span class="pl-s">var</span> responsive <span class="pl-k">=</span> $(<span class="pl-v">this</span>).hasClass(<span class="pl-s1"><span class="pl-pds">&#39;</span>cld-responsive<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> src.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>w_auto<span class="pl-k">\b</span><span class="pl-pds">/</span></span>);</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code js-file-line">      <span class="pl-k">if</span> (responsive) {</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code js-file-line">        <span class="pl-s">var</span> parents <span class="pl-k">=</span> $(<span class="pl-v">this</span>).parents(),</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code js-file-line">            parentsLength <span class="pl-k">=</span> parents.<span class="pl-sc">length</span>,</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code js-file-line">            container,</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code js-file-line">            containerWidth <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code js-file-line">            nthParent;</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code js-file-line">        <span class="pl-k">for</span> (nthParent <span class="pl-k">=</span> <span class="pl-c1">0</span>; nthParent <span class="pl-k">&lt;</span> parentsLength; nthParent<span class="pl-k">+=</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code js-file-line">          container <span class="pl-k">=</span> parents[nthParent];</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code js-file-line">          <span class="pl-k">if</span> (container <span class="pl-k">&amp;&amp;</span> container.clientWidth) {</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code js-file-line">            containerWidth <span class="pl-k">=</span> container.clientWidth;</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code js-file-line">        <span class="pl-k">if</span> (containerWidth <span class="pl-k">==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code js-file-line">          <span class="pl-c">// container doesn&#39;t know the size yet. Usually because the image is hidden or outside the DOM.</span></td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code js-file-line">          <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code js-file-line">        <span class="pl-s">var</span> requestedWidth <span class="pl-k">=</span> exact <span class="pl-k">?</span> containerWidth <span class="pl-k">:</span> $.cloudinary.calc_stoppoint(<span class="pl-v">this</span>, containerWidth);</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code js-file-line">        <span class="pl-s">var</span> currentWidth <span class="pl-k">=</span> $(<span class="pl-v">this</span>).<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code js-file-line">        <span class="pl-k">if</span> (requestedWidth <span class="pl-k">&gt;</span> currentWidth) {</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code js-file-line">          <span class="pl-c">// requested width is larger, fetch new image</span></td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code js-file-line">          $(<span class="pl-v">this</span>).<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>, requestedWidth);</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code js-file-line">          <span class="pl-c">// requested width is not larger - keep previous</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code js-file-line">          requestedWidth <span class="pl-k">=</span> currentWidth;</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code js-file-line">        src <span class="pl-k">=</span> src.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>w_auto<span class="pl-k">\b</span><span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>w_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> requestedWidth);</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code js-file-line">        attrs.<span class="pl-sc">width</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code js-file-line">        attrs.<span class="pl-sc">height</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code js-file-line">      <span class="pl-c">// Update dpr according to the device&#39;s devicePixelRatio</span></td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code js-file-line">      attrs.<span class="pl-sc">src</span> <span class="pl-k">=</span> src.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>dpr_(1<span class="pl-cce">\.</span>0<span class="pl-k">|</span>auto)<span class="pl-k">\b</span><span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>dpr_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> $.cloudinary.device_pixel_ratio());</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code js-file-line">      $(<span class="pl-v">this</span>).attr(attrs);</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code js-file-line">  <span class="pl-s">var</span> webp <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code js-file-line">  <span class="pl-s3">$.fn</span>.<span class="pl-en">webpify</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">options</span>, <span class="pl-vpf">webp_options</span>) {</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code js-file-line">    <span class="pl-s">var</span> that <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code js-file-line">    options <span class="pl-k">=</span> options <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code js-file-line">    webp_options <span class="pl-k">=</span> webp_options <span class="pl-k">||</span> options;</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>webp) {</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code js-file-line">      webp <span class="pl-k">=</span> $.Deferred();</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code js-file-line">      <span class="pl-s">var</span> webp_canary <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Image</span>();</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code js-file-line">      webp_canary.onerror <span class="pl-k">=</span> webp.reject;</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code js-file-line">      webp_canary.onload <span class="pl-k">=</span> webp.resolve;</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code js-file-line">      webp_canary.<span class="pl-sc">src</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code js-file-line">    $(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code js-file-line">      webp.done(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code js-file-line">        $(that).cloudinary($.extend({}, webp_options, {format<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>webp<span class="pl-pds">&#39;</span></span>}));</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code js-file-line">      }).fail(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code js-file-line">        $(that).cloudinary(options);</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code js-file-line">  <span class="pl-s3">$.fn</span>.<span class="pl-en">fetchify</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.cloudinary($.extend(options, {<span class="pl-s1"><span class="pl-pds">&#39;</span>type<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>fetch<span class="pl-pds">&#39;</span></span>}));</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span>$.fn.fileupload) {</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code js-file-line">    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code js-file-line">  <span class="pl-s3">$.cloudinary</span>.<span class="pl-en">delete_by_token</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">delete_token</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code js-file-line">    options <span class="pl-k">=</span> options <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code js-file-line">    <span class="pl-s">var</span> url <span class="pl-k">=</span> options.url;</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>url) {</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code js-file-line">      <span class="pl-s">var</span> cloud_name <span class="pl-k">=</span> options.cloud_name <span class="pl-k">||</span> $.cloudinary.config().cloud_name;</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code js-file-line">      url <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>https://api.cloudinary.com/v1_1/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> cloud_name <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>/delete_by_token<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code js-file-line">    <span class="pl-s">var</span> dataType <span class="pl-k">=</span> $.support.xhrFileUpload <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>json<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>iframe json<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code js-file-line">    <span class="pl-k">return</span> $.ajax({</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code js-file-line">      url<span class="pl-k">:</span> url,</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code js-file-line">      method<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>POST<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code js-file-line">      data<span class="pl-k">:</span> {token<span class="pl-k">:</span> delete_token},</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code js-file-line">      headers<span class="pl-k">:</span> {<span class="pl-s1"><span class="pl-pds">&quot;</span>X-Requested-With<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>XMLHttpRequest<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code js-file-line">      dataType<span class="pl-k">:</span> dataType</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code js-file-line">  <span class="pl-s3">$.fn</span>.<span class="pl-en">cloudinary_fileupload</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code js-file-line">    <span class="pl-s">var</span> initializing <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">data</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>blueimpFileupload<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code js-file-line">    <span class="pl-k">if</span> (initializing) {</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code js-file-line">      options <span class="pl-k">=</span> $.extend({</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code js-file-line">        maxFileSize<span class="pl-k">:</span> <span class="pl-c1">20000000</span>,</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code js-file-line">        dataType<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>json<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code js-file-line">        headers<span class="pl-k">:</span> {<span class="pl-s1"><span class="pl-pds">&quot;</span>X-Requested-With<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>XMLHttpRequest<span class="pl-pds">&quot;</span></span>}</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code js-file-line">      }, options);</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code js-file-line">    <span class="pl-v">this</span>.fileupload(options);</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code js-file-line">    <span class="pl-k">if</span> (initializing) {</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code js-file-line">      <span class="pl-v">this</span>.bind(<span class="pl-s1"><span class="pl-pds">&quot;</span>fileuploaddone<span class="pl-pds">&quot;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>, <span class="pl-vpf">data</span>) {</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code js-file-line">        <span class="pl-k">if</span> (data.result<span class="pl-s3">.error</span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code js-file-line">        data.result.path <span class="pl-k">=</span> [<span class="pl-s1"><span class="pl-pds">&quot;</span>v<span class="pl-pds">&quot;</span></span>, data.result.<span class="pl-sc">version</span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>, data.result.public_id,</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code js-file-line">                            data.result.format <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> data.result.format <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>].<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code js-file-line">        <span class="pl-k">if</span> (data.cloudinaryField <span class="pl-k">&amp;&amp;</span> data.<span class="pl-sc">form</span>.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code js-file-line">          <span class="pl-s">var</span> upload_info <span class="pl-k">=</span> [data.result.resource_type, data.result.<span class="pl-sc">type</span>, data.result.path].<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> data.result.signature;</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code js-file-line">          <span class="pl-s">var</span> multiple <span class="pl-k">=</span> $(e.<span class="pl-sc">target</span>).prop(<span class="pl-s1"><span class="pl-pds">&quot;</span>multiple<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code js-file-line">          <span class="pl-s">var</span> <span class="pl-en">add_field</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code js-file-line">            $(<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;input&gt;&lt;/input&gt;<span class="pl-pds">&#39;</span></span>).attr({type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>hidden<span class="pl-pds">&quot;</span></span>, name<span class="pl-k">:</span> data.cloudinaryField}).val(upload_info).appendTo(data.<span class="pl-sc">form</span>);</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code js-file-line">          };</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code js-file-line">          <span class="pl-k">if</span> (multiple) {</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code js-file-line">            add_field();</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code js-file-line">            <span class="pl-s">var</span> field <span class="pl-k">=</span> $(data.<span class="pl-sc">form</span>).<span class="pl-s3">find</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>input[name=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> data.cloudinaryField <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code js-file-line">            <span class="pl-k">if</span> (field.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code js-file-line">              field.val(upload_info);</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code js-file-line">              add_field();</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code js-file-line">        $(e.<span class="pl-sc">target</span>).trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>cloudinarydone<span class="pl-pds">&#39;</span></span>, data);</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code js-file-line">      <span class="pl-v">this</span>.bind(<span class="pl-s1"><span class="pl-pds">&quot;</span>fileuploadstart<span class="pl-pds">&quot;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>){</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code js-file-line">        $(e.<span class="pl-sc">target</span>).trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>cloudinarystart<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code js-file-line">      <span class="pl-v">this</span>.bind(<span class="pl-s1"><span class="pl-pds">&quot;</span>fileuploadstop<span class="pl-pds">&quot;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>){</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code js-file-line">        $(e.<span class="pl-sc">target</span>).trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>cloudinarystop<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code js-file-line">      <span class="pl-v">this</span>.bind(<span class="pl-s1"><span class="pl-pds">&quot;</span>fileuploadprogress<span class="pl-pds">&quot;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>,<span class="pl-vpf">data</span>){</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code js-file-line">        $(e.<span class="pl-sc">target</span>).trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>cloudinaryprogress<span class="pl-pds">&#39;</span></span>,data);</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code js-file-line">      <span class="pl-v">this</span>.bind(<span class="pl-s1"><span class="pl-pds">&quot;</span>fileuploadprogressall<span class="pl-pds">&quot;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>,<span class="pl-vpf">data</span>){</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code js-file-line">        $(e.<span class="pl-sc">target</span>).trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>cloudinaryprogressall<span class="pl-pds">&#39;</span></span>,data);</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code js-file-line">      <span class="pl-v">this</span>.bind(<span class="pl-s1"><span class="pl-pds">&quot;</span>fileuploadfail<span class="pl-pds">&quot;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>,<span class="pl-vpf">data</span>){</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code js-file-line">        $(e.<span class="pl-sc">target</span>).trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>cloudinaryfail<span class="pl-pds">&#39;</span></span>,data);</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code js-file-line">      <span class="pl-v">this</span>.bind(<span class="pl-s1"><span class="pl-pds">&quot;</span>fileuploadalways<span class="pl-pds">&quot;</span></span>, <span class="pl-st">function</span>(<span class="pl-vpf">e</span>,<span class="pl-vpf">data</span>){</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code js-file-line">        $(e.<span class="pl-sc">target</span>).trigger(<span class="pl-s1"><span class="pl-pds">&#39;</span>cloudinaryalways<span class="pl-pds">&#39;</span></span>,data);</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.fileupload(<span class="pl-s1"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>).url) {</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code js-file-line">        <span class="pl-s">var</span> cloud_name <span class="pl-k">=</span> options.cloud_name <span class="pl-k">||</span> $.cloudinary.config().cloud_name;</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code js-file-line">        <span class="pl-s">var</span> upload_url <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>https://api.cloudinary.com/v1_1/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> cloud_name <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>/upload<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code js-file-line">        <span class="pl-v">this</span>.fileupload(<span class="pl-s1"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>url<span class="pl-pds">&#39;</span></span>, upload_url);</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code js-file-line">  <span class="pl-s3">$.fn</span>.<span class="pl-en">cloudinary_upload_url</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">remote_url</span>) {</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code js-file-line">    <span class="pl-v">this</span>.fileupload(<span class="pl-s1"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>formData<span class="pl-pds">&#39;</span></span>).file <span class="pl-k">=</span> remote_url;</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code js-file-line">    <span class="pl-v">this</span>.fileupload(<span class="pl-s1"><span class="pl-pds">&#39;</span>add<span class="pl-pds">&#39;</span></span>, { files<span class="pl-k">:</span> [ remote_url ] });</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code js-file-line">    <span class="pl-k">delete</span>(<span class="pl-v">this</span>.fileupload(<span class="pl-s1"><span class="pl-pds">&#39;</span>option<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>formData<span class="pl-pds">&#39;</span></span>).file);</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code js-file-line">  <span class="pl-s3">$.fn</span>.<span class="pl-en">unsigned_cloudinary_upload</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">upload_preset</span>, <span class="pl-vpf">upload_params</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code js-file-line">    options <span class="pl-k">=</span> options <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code js-file-line">    upload_params <span class="pl-k">=</span> $.extend({}, upload_params) <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code js-file-line">    <span class="pl-k">if</span> (upload_params.cloud_name) {</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code js-file-line">      options.cloud_name <span class="pl-k">=</span> upload_params.cloud_name;</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code js-file-line">      <span class="pl-k">delete</span> upload_params.cloud_name;</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code js-file-line">    <span class="pl-c">// Serialize upload_params</span></td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code js-file-line">    <span class="pl-k">for</span> (<span class="pl-s">var</span> key <span class="pl-k">in</span> upload_params) {</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code js-file-line">      <span class="pl-s">var</span> value <span class="pl-k">=</span> upload_params[key];</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code js-file-line">      <span class="pl-k">if</span> ($.isPlainObject(value)) {</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code js-file-line">        upload_params[key] <span class="pl-k">=</span> $.map(value, <span class="pl-st">function</span>(<span class="pl-vpf">v</span>, <span class="pl-vpf">k</span>){<span class="pl-k">return</span> k <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> v;}).<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> ($.isArray(value)) {</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code js-file-line">        <span class="pl-k">if</span> (value.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> $.isArray(value[<span class="pl-c1">0</span>])) {</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code js-file-line">          upload_params[key] <span class="pl-k">=</span> $.map(value, <span class="pl-st">function</span>(<span class="pl-vpf">array_value</span>){<span class="pl-k">return</span> array_value.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>);}).<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code js-file-line">          upload_params[key] <span class="pl-k">=</span> value.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>upload_params.callback) {</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code js-file-line">      upload_params.callback <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>/cloudinary_cors.html<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code js-file-line">    upload_params.upload_preset <span class="pl-k">=</span> upload_preset;</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code js-file-line">    options.formData <span class="pl-k">=</span> upload_params;</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code js-file-line">    <span class="pl-k">if</span> (options.cloudinary_field) {</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code js-file-line">      options.cloudinaryField <span class="pl-k">=</span> options.cloudinary_field;</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code js-file-line">      <span class="pl-k">delete</span> options.cloudinary_field;</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code js-file-line">    <span class="pl-s">var</span> html_options <span class="pl-k">=</span> options.html <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code js-file-line">    html_options[<span class="pl-s1"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>cloudinary_fileupload <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (html_options[<span class="pl-s1"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span>] <span class="pl-k">||</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code js-file-line">    <span class="pl-k">if</span> (options.<span class="pl-sc">multiple</span>) html_options.<span class="pl-sc">multiple</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code js-file-line">    <span class="pl-v">this</span>.attr(html_options).cloudinary_fileupload(options);</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code js-file-line">  <span class="pl-s3">$.cloudinary</span>.<span class="pl-en">unsigned_upload_tag</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">upload_preset</span>, <span class="pl-vpf">upload_params</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code js-file-line">    <span class="pl-k">return</span> $(<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;input/&gt;<span class="pl-pds">&#39;</span></span>).attr({type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>file<span class="pl-pds">&quot;</span></span>, name<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>file<span class="pl-pds">&quot;</span></span>}).unsigned_cloudinary_upload(upload_preset, upload_params, options);</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code js-file-line">}));</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.08333s from github-fe139-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-af95b05cb14b7a29b0457c26b4a1d24151f4a47842c8e74bd556622f347b9d3d.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-6fb290feb68c5887ec2c3a665de6ad3c245fca991bd8114ccedcfae4cd7314f1.js" type="text/javascript"></script>
      
      
  </body>
</html>

