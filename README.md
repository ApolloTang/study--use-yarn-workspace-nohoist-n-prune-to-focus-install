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

---

<img src="./docs/imgs/1-disired-focus-mono-bootstrap.png" />

----

<img src="./docs/imgs/2-how-mono-is-bootstraped.png" />

----

<img src="./docs/imgs/3-mono-boostraped-w-nohoist.png" />

----

<img src="./docs/imgs/4-pruning-b4-boostrap.png" />

----

<img src="./docs/imgs/5-bootstrap-w-n-wo-pruning.png" />
