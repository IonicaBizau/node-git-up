// Dependencies
const gitUp = require("../lib")
    , tester = require("tester")
    ;

const INPUT = [
    // Secure Shell Transport Protocol (SSH)
    [
        "ssh://user@host.xz:42/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: 42
          , resource: "host.xz"
          , user: "user"
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "git+ssh://git@host.xz/path/name.git"
      , {
            protocols: ["git", "ssh"]
          , protocol: "ssh"
          , port: null
          , resource: "host.xz"
          , user: "git"
          , pathname: "/path/name.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "ssh://user@host.xz/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: null
          , resource: "host.xz"
          , user: "user"
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "ssh://host.xz:port/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: null
          , resource: "host.xz"
          , user: ""
          , pathname: "/port/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "ssh://host.xz/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: null
          , resource: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "git@domain.xxx.com:42foo/bar.git"
      , {
            protocols: []
          , port: null
          , resource: "domain.xxx.com"
          , user: "git"
          , pathname: "/42foo/bar.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "ssh://user@host.xz/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: null
          , resource: "host.xz"
          , user: "user"
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "ssh://host.xz/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: null
          , resource: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "ssh://user@host.xz/~user/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: null
          , resource: "host.xz"
          , user: "user"
          , pathname: "/~user/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "ssh://host.xz/~user/path/to/repo.git/"
      , {
            protocols: ["ssh"]
          , port: null
          , resource: "host.xz"
          , user: ""
          , pathname: "/~user/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "ssh://user@host.xz/~/path/to/repo.git"
      , {
            protocols: ["ssh"]
          , port: null
          , resource: "host.xz"
          , user: "user"
          , pathname: "/~/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "ssh://host.xz/~/path/to/repo.git"
      , {
            protocols: ["ssh"]
          , port: null
          , resource: "host.xz"
          , user: ""
          , pathname: "/~/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "user@host.xz:/path/to/repo.git/"
      , {
            protocols: []
          , port: null
          , resource: "host.xz"
          , user: "user"
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "user@host.xz:~user/path/to/repo.git/"
      , {
            protocols: []
          , port: null
          , resource: "host.xz"
          , user: "user"
          , pathname: "/~user/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "user@host.xz:path/to/repo.git"
      , {
            protocols: []
          , port: null
          , resource: "host.xz"
          , user: "user"
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
  , [
        "rsync://host.xz/path/to/repo.git/"
      , {
            protocols: ["rsync"]
          , port: null
          , resource: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]

    // Git Transport Protocol
  , [
        "git://host.xz/path/to/repo.git/"
      , {
            protocols: ["git"]
          , port: null
          , resource: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "git"
        }
    ]
  , [
        "git://host.xz/~user/path/to/repo.git/"
      , {
            protocols: ["git"]
          , port: null
          , resource: "host.xz"
          , user: ""
          , pathname: "/~user/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "git"
        }
    ]

    // HTTP/S Transport Protocol
  , [
        "http://host.xz/path/to/repo.git/"
      , {
            protocols: ["http"]
          , port: null
          , resource: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "http"
        }
    ]
  , [
        "https://host.xz/path/to/repo.git/"
      , {
            protocols: ["https"]
          , port: null
          , resource: "host.xz"
          , user: ""
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "https"
        }
    ]
  , [
        "https://token:x-oauth-basic@host.xz/path/to/repo.git/"
      , {
            protocols: ["https"]
          , port: null
          , resource: "host.xz"
          , user: "token:x-oauth-basic"
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , token: "token"
          , protocol: "https"
        }
    ]
  , [
        "https://x-token-auth:token@host.xz/path/to/repo.git/"
      , {
            protocols: ["https"]
          , port: null
          , resource: "host.xz"
          , user: "x-token-auth:token"
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , token: "token"
          , protocol: "https"
        }
    ]
  , [
        "https://user@bitbucket.org/user/repo"
      , {
            protocols: ["https"]
          , port: null
          , resource: "bitbucket.org"
          , user: "user"
          , pathname: "/user/repo"
          , hash: ""
          , search: ""
          , protocol: "https"
        }
    ]
  , [
        "https://user@organization.git.cloudforge.com/name.git"
      , {
            protocols: ["https"]
          , port: null
          , resource: "organization.git.cloudforge.com"
          , user: "user"
          , pathname: "/name.git"
          , hash: ""
          , search: ""
          , protocol: "https"
        }
    ]
  , [
        "https://token:x-oauth-basic@github.com/owner/name.git"
      , {
            protocols: ["https"]
          , port: null
          , resource: "github.com"
          , user: "token:x-oauth-basic"
          , pathname: "/owner/name.git"
          , hash: ""
          , search: ""
          , protocol: "https"
          , token: "token"
        }
    ]
  , [
        "https://x-token-auth:token@bitbucket.org/owner/name.git"
      , {
            protocols: ["https"]
          , port: null
          , resource: "bitbucket.org"
          , user: "x-token-auth:token"
          , pathname: "/owner/name.git"
          , hash: ""
          , search: ""
          , protocol: "https"
          , token: "token"
        }
    ]

    // Local (Filesystem) Transport Protocol
  , [
        "/path/to/repo.git/"
      , {
            protocols: []
          , port: null
          , resource: ""
          , user: ""
          , pathname: "/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "file"
        }
    ]
  , [
        "path/to/repo.git/"
      , {
            protocols: []
          , port: null
          , resource: ""
          , user: ""
          , pathname: "path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "file"
        }
    ]
  , [
        "~/path/to/repo.git"
      , {
            protocols: []
          , port: null
          , resource: ""
          , user: ""
          , pathname: "~/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "file"
        }
    ]
  , [
        "file:///path/to/repo.git/"
      , {
            protocols: ["file"]
          , port: null
          , resource: ""
          , user: ""
          , pathname: "file:///path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "file"
        }
    ]
  , [
        "file://~/path/to/repo.git/"
      , {
            protocols: ["file"]
          , port: null
          , resource: ""
          , user: ""
          , pathname: "file://~/path/to/repo.git"
          , hash: ""
          , search: ""
          , protocol: "file"
        }
    ]
  , [
        "git@host.xz:path/name.git"
      , {
            protocols: []
          , protocol: "ssh"
          , port: null
          , resource: "host.xz"
          , user: "git"
          , pathname: "/path/name.git"
          , hash: ""
          , search: ""
          , protocol: "ssh"
        }
    ]
];

tester.describe("git-up", test => {
    INPUT.forEach(function (c) {
        test.should("support " + c[0], () => {
            c[1].href = c[0].replace(/\/$/, "");
            c[1].protocol = c[1].protocol || c[1].protocols[0];
            c[1].token = c[1].token || "";
            const res = gitUp(c[0])
            c[1].query = res.query
            test.expect(res).toEqual(c[1]);
        });
    });
});
