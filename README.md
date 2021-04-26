# Preparing monorepo to deploy a project with pruning strategies 
<br>
Consider the following monorepo, we wish to deploy app-backend/ to the server:

```
.
├── apps/
│   ├── app-backend/
│   │   └── package.json
│   └── app-frontend/
│       └── package.json
│
├── libs-local/
│   ├── local-pkg-a/            // <-- Used by backend
│   │   └── package.json  
│   ├── local-pkg-d/            // <-- Used by backend
│   │   └── package.json 
│   └── local-ui-pkg-1/         // <-- Used by frontend 
│       └── package.json
│
├── lerna.json
├── package.json
└── yarn.lock
```
<br>
---
<br>
We bootstrap the monorepo such that each app folder contain all and only the neccessary artifact required for deployment:
<br><br>

<img src="./docs/imgs/1-disired-focus-mono-bootstrap.png" />

<br>
---
<br>
However, package manager's workspace linking behaviour is not what we want -- it hoisted and linked the required dependencies in the root node_modules/:
<br><br>

<img src="./docs/imgs/2-how-mono-is-bootstraped.png" />

<br>
---
<br>
If we are using yarn workspace, we could use the "nohoist" feature. But this feature only "hoist" the 2nd party dependencies, 3rd party dependencies still hoisted in the root node_modules/ <br><br>


<img src="./docs/imgs/3-mono-boostraped-w-nohoist.png" />

<br>
---
<br>
Here is a work around: we pruning the monorepo before executing the linkage:
<br>

### Pruning monorepo


```
  "scripts": {
    "app-backend:prune-apps": "mv apps/app-backend/ apps/tmp/ && rm -fr apps/app-* && mv apps/tmp/ apps/app-backend",
    "app-backend:prune-libs-local": "## TODO",
    "app-backend:install-prod": "yarn app-backend:prune-apps && yarn workspace @apollotang/app-backend run install:prod"
  }
```

<img src="./docs/imgs/4-pruning-b4-boostrap.png" />

<br>
---
<br>
As you can see, bootstraping after pruning, the artifact only consist the required  dependentcies.<br><br>

<img src="./docs/imgs/5-bootstrap-w-n-wo-pruning.png" />
