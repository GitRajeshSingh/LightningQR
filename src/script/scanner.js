!(function () {
  return function e(t, r, n) {
    function i(a, s) {
      if (!r[a]) {
        if (!t[a]) {
          var u = "function" == typeof require && require;
          if (!s && u) return u(a, !0);
          if (o) return o(a, !0);
          var c = new Error("Cannot find module '" + a + "'");
          throw ((c.code = "MODULE_NOT_FOUND"), c);
        }
        var f = (r[a] = { exports: {} });
        t[a][0].call(
          f.exports,
          function (e) {
            return i(t[a][1][e] || e);
          },
          f,
          f.exports,
          e,
          t,
          r,
          n
        );
      }
      return r[a].exports;
    }
    for (
      var o = "function" == typeof require && require, a = 0;
      a < n.length;
      a++
    )
      i(n[a]);
    return i;
  };
})()(
  {
    1: [
      function (e, t, r) {
        var n, i;
        (n = window),
          (i = function () {
            return (function (e) {
              var t = {};
              function r(n) {
                if (t[n]) return t[n].exports;
                var i = (t[n] = { i: n, l: !1, exports: {} });
                return (
                  e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
                );
              }
              return (
                (r.m = e),
                (r.c = t),
                (r.d = function (e, t, n) {
                  r.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: n });
                }),
                (r.r = function (e) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
                }),
                (r.t = function (e, t) {
                  if ((1 & t && (e = r(e)), 8 & t)) return e;
                  if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                  var n = Object.create(null);
                  if (
                    (r.r(n),
                    Object.defineProperty(n, "default", {
                      enumerable: !0,
                      value: e,
                    }),
                    2 & t && "string" != typeof e)
                  )
                    for (var i in e)
                      r.d(
                        n,
                        i,
                        function (t) {
                          return e[t];
                        }.bind(null, i)
                      );
                  return n;
                }),
                (r.n = function (e) {
                  var t =
                    e && e.__esModule
                      ? function () {
                          return e.default;
                        }
                      : function () {
                          return e;
                        };
                  return r.d(t, "a", t), t;
                }),
                (r.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (r.p = ""),
                r((r.s = 104))
              );
            })([
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return i(t, e), t;
                })(r(5).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return i(t, e), t;
                })(r(5).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (function (e) {
                    (e[(e.AZTEC = 0)] = "AZTEC"),
                      (e[(e.CODABAR = 1)] = "CODABAR"),
                      (e[(e.CODE_39 = 2)] = "CODE_39"),
                      (e[(e.CODE_93 = 3)] = "CODE_93"),
                      (e[(e.CODE_128 = 4)] = "CODE_128"),
                      (e[(e.DATA_MATRIX = 5)] = "DATA_MATRIX"),
                      (e[(e.EAN_8 = 6)] = "EAN_8"),
                      (e[(e.EAN_13 = 7)] = "EAN_13"),
                      (e[(e.ITF = 8)] = "ITF"),
                      (e[(e.MAXICODE = 9)] = "MAXICODE"),
                      (e[(e.PDF_417 = 10)] = "PDF_417"),
                      (e[(e.QR_CODE = 11)] = "QR_CODE"),
                      (e[(e.RSS_14 = 12)] = "RSS_14"),
                      (e[(e.RSS_EXPANDED = 13)] = "RSS_EXPANDED"),
                      (e[(e.UPC_A = 14)] = "UPC_A"),
                      (e[(e.UPC_E = 15)] = "UPC_E"),
                      (e[(e.UPC_EAN_EXTENSION = 16)] = "UPC_EAN_EXTENSION");
                  })(n || (n = {})),
                  (t.default = n);
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(17),
                  i = r(101),
                  o = (function () {
                    function e(e, t) {
                      (this.x = e), (this.y = t);
                    }
                    return (
                      (e.prototype.getX = function () {
                        return this.x;
                      }),
                      (e.prototype.getY = function () {
                        return this.y;
                      }),
                      (e.prototype.equals = function (t) {
                        if (t instanceof e) {
                          var r = t;
                          return this.x === r.x && this.y === r.y;
                        }
                        return !1;
                      }),
                      (e.prototype.hashCode = function () {
                        return (
                          31 * i.default.floatToIntBits(this.x) +
                          i.default.floatToIntBits(this.y)
                        );
                      }),
                      (e.prototype.toString = function () {
                        return "(" + this.x + "," + this.y + ")";
                      }),
                      (e.orderBestPatterns = function (e) {
                        var t,
                          r,
                          n,
                          i = this.distance(e[0], e[1]),
                          o = this.distance(e[1], e[2]),
                          a = this.distance(e[0], e[2]);
                        if (
                          (o >= i && o >= a
                            ? ((r = e[0]), (t = e[1]), (n = e[2]))
                            : a >= o && a >= i
                            ? ((r = e[1]), (t = e[0]), (n = e[2]))
                            : ((r = e[2]), (t = e[0]), (n = e[1])),
                          this.crossProductZ(t, r, n) < 0)
                        ) {
                          var s = t;
                          (t = n), (n = s);
                        }
                        (e[0] = t), (e[1] = r), (e[2] = n);
                      }),
                      (e.distance = function (e, t) {
                        return n.default.distance(e.x, e.y, t.x, t.y);
                      }),
                      (e.crossProductZ = function (e, t, r) {
                        var n = t.x,
                          i = t.y;
                        return (r.x - n) * (e.y - i) - (r.y - i) * (e.x - n);
                      }),
                      e
                    );
                  })();
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return i(t, e), t;
                })(r(5).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t(t) {
                    void 0 === t && (t = void 0);
                    var r = e.call(this, t) || this;
                    return (r.message = t), r;
                  }
                  return i(t, e), t;
                })(r(102).CustomError);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(14),
                  i = r(7),
                  o = r(41),
                  a = r(12),
                  s = r(1),
                  u = (function () {
                    function e(e, t, r, n) {
                      if (
                        ((this.width = e),
                        (this.height = t),
                        (this.rowSize = r),
                        (this.bits = n),
                        null != t || (t = e),
                        (this.height = t),
                        e < 1 || t < 1)
                      )
                        throw new s.default(
                          "Both dimensions must be greater than 0"
                        );
                      null != r || (r = Math.floor((e + 31) / 32)),
                        (this.rowSize = r),
                        null != n ||
                          (this.bits = new Int32Array(
                            this.rowSize * this.height
                          ));
                    }
                    return (
                      (e.parseFromBooleanArray = function (t) {
                        for (
                          var r = t.length,
                            n = t[0].length,
                            i = new e(n, r),
                            o = 0;
                          o < r;
                          o++
                        )
                          for (var a = t[o], s = 0; s < n; s++)
                            a[s] && i.set(s, o);
                        return i;
                      }),
                      (e.parseFromString = function (t, r, n) {
                        if (null === t)
                          throw new s.default(
                            "stringRepresentation cannot be null"
                          );
                        for (
                          var i = new Array(t.length),
                            o = 0,
                            a = 0,
                            u = -1,
                            c = 0,
                            f = 0;
                          f < t.length;

                        )
                          if ("\n" === t.charAt(f) || "\r" === t.charAt(f)) {
                            if (o > a) {
                              if (-1 === u) u = o - a;
                              else if (o - a !== u)
                                throw new s.default("row lengths do not match");
                              (a = o), c++;
                            }
                            f++;
                          } else if (t.substring(f, f + r.length) === r)
                            (f += r.length), (i[o] = !0), o++;
                          else {
                            if (t.substring(f, f + n.length) !== n)
                              throw new s.default(
                                "illegal character encountered: " +
                                  t.substring(f)
                              );
                            (f += n.length), (i[o] = !1), o++;
                          }
                        if (o > a) {
                          if (-1 === u) u = o - a;
                          else if (o - a !== u)
                            throw new s.default("row lengths do not match");
                          c++;
                        }
                        for (var l = new e(u, c), d = 0; d < o; d++)
                          i[d] && l.set(Math.floor(d % u), Math.floor(d / u));
                        return l;
                      }),
                      (e.prototype.get = function (e, t) {
                        var r = t * this.rowSize + Math.floor(e / 32);
                        return 0 != ((this.bits[r] >>> (31 & e)) & 1);
                      }),
                      (e.prototype.set = function (e, t) {
                        var r = t * this.rowSize + Math.floor(e / 32);
                        this.bits[r] |= (1 << (31 & e)) & 4294967295;
                      }),
                      (e.prototype.unset = function (e, t) {
                        var r = t * this.rowSize + Math.floor(e / 32);
                        this.bits[r] &= ~((1 << (31 & e)) & 4294967295);
                      }),
                      (e.prototype.flip = function (e, t) {
                        var r = t * this.rowSize + Math.floor(e / 32);
                        this.bits[r] ^= (1 << (31 & e)) & 4294967295;
                      }),
                      (e.prototype.xor = function (e) {
                        if (
                          this.width !== e.getWidth() ||
                          this.height !== e.getHeight() ||
                          this.rowSize !== e.getRowSize()
                        )
                          throw new s.default(
                            "input matrix dimensions do not match"
                          );
                        for (
                          var t = new n.default(
                              Math.floor(this.width / 32) + 1
                            ),
                            r = this.rowSize,
                            i = this.bits,
                            o = 0,
                            a = this.height;
                          o < a;
                          o++
                        )
                          for (
                            var u = o * r,
                              c = e.getRow(o, t).getBitArray(),
                              f = 0;
                            f < r;
                            f++
                          )
                            i[u + f] ^= c[f];
                      }),
                      (e.prototype.clear = function () {
                        for (var e = this.bits, t = e.length, r = 0; r < t; r++)
                          e[r] = 0;
                      }),
                      (e.prototype.setRegion = function (e, t, r, n) {
                        if (t < 0 || e < 0)
                          throw new s.default(
                            "Left and top must be nonnegative"
                          );
                        if (n < 1 || r < 1)
                          throw new s.default(
                            "Height and width must be at least 1"
                          );
                        var i = e + r,
                          o = t + n;
                        if (o > this.height || i > this.width)
                          throw new s.default(
                            "The region must fit inside the matrix"
                          );
                        for (
                          var a = this.rowSize, u = this.bits, c = t;
                          c < o;
                          c++
                        )
                          for (var f = c * a, l = e; l < i; l++)
                            u[f + Math.floor(l / 32)] |=
                              (1 << (31 & l)) & 4294967295;
                      }),
                      (e.prototype.getRow = function (e, t) {
                        null == t || t.getSize() < this.width
                          ? (t = new n.default(this.width))
                          : t.clear();
                        for (
                          var r = this.rowSize, i = this.bits, o = e * r, a = 0;
                          a < r;
                          a++
                        )
                          t.setBulk(32 * a, i[o + a]);
                        return t;
                      }),
                      (e.prototype.setRow = function (e, t) {
                        i.default.arraycopy(
                          t.getBitArray(),
                          0,
                          this.bits,
                          e * this.rowSize,
                          this.rowSize
                        );
                      }),
                      (e.prototype.rotate180 = function () {
                        for (
                          var e = this.getWidth(),
                            t = this.getHeight(),
                            r = new n.default(e),
                            i = new n.default(e),
                            o = 0,
                            a = Math.floor((t + 1) / 2);
                          o < a;
                          o++
                        )
                          (r = this.getRow(o, r)),
                            (i = this.getRow(t - 1 - o, i)),
                            r.reverse(),
                            i.reverse(),
                            this.setRow(o, i),
                            this.setRow(t - 1 - o, r);
                      }),
                      (e.prototype.getEnclosingRectangle = function () {
                        for (
                          var e = this.width,
                            t = this.height,
                            r = this.rowSize,
                            n = this.bits,
                            i = e,
                            o = t,
                            a = -1,
                            s = -1,
                            u = 0;
                          u < t;
                          u++
                        )
                          for (var c = 0; c < r; c++) {
                            var f = n[u * r + c];
                            if (0 !== f) {
                              if (
                                (u < o && (o = u), u > s && (s = u), 32 * c < i)
                              ) {
                                for (
                                  var l = 0;
                                  0 == ((f << (31 - l)) & 4294967295);

                                )
                                  l++;
                                32 * c + l < i && (i = 32 * c + l);
                              }
                              if (32 * c + 31 > a) {
                                for (l = 31; f >>> l == 0; ) l--;
                                32 * c + l > a && (a = 32 * c + l);
                              }
                            }
                          }
                        return a < i || s < o
                          ? null
                          : Int32Array.from([i, o, a - i + 1, s - o + 1]);
                      }),
                      (e.prototype.getTopLeftOnBit = function () {
                        for (
                          var e = this.rowSize, t = this.bits, r = 0;
                          r < t.length && 0 === t[r];

                        )
                          r++;
                        if (r === t.length) return null;
                        for (
                          var n = r / e, i = (r % e) * 32, o = t[r], a = 0;
                          0 == ((o << (31 - a)) & 4294967295);

                        )
                          a++;
                        return (i += a), Int32Array.from([i, n]);
                      }),
                      (e.prototype.getBottomRightOnBit = function () {
                        for (
                          var e = this.rowSize, t = this.bits, r = t.length - 1;
                          r >= 0 && 0 === t[r];

                        )
                          r--;
                        if (r < 0) return null;
                        for (
                          var n = Math.floor(r / e),
                            i = 32 * Math.floor(r % e),
                            o = t[r],
                            a = 31;
                          o >>> a == 0;

                        )
                          a--;
                        return (i += a), Int32Array.from([i, n]);
                      }),
                      (e.prototype.getWidth = function () {
                        return this.width;
                      }),
                      (e.prototype.getHeight = function () {
                        return this.height;
                      }),
                      (e.prototype.getRowSize = function () {
                        return this.rowSize;
                      }),
                      (e.prototype.equals = function (t) {
                        if (!(t instanceof e)) return !1;
                        var r = t;
                        return (
                          this.width === r.width &&
                          this.height === r.height &&
                          this.rowSize === r.rowSize &&
                          o.default.equals(this.bits, r.bits)
                        );
                      }),
                      (e.prototype.hashCode = function () {
                        var e = this.width;
                        return (
                          31 *
                            (e =
                              31 *
                                (e =
                                  31 * (e = 31 * e + this.width) +
                                  this.height) +
                              this.rowSize) +
                          o.default.hashCode(this.bits)
                        );
                      }),
                      (e.prototype.toString = function (e, t, r) {
                        return (
                          void 0 === e && (e = "x"),
                          void 0 === t && (t = " "),
                          void 0 === r && (r = "\n"),
                          this.buildToString(e, t, r)
                        );
                      }),
                      (e.prototype.buildToString = function (e, t, r) {
                        var n = new a.default();
                        n.append(r);
                        for (var i = 0, o = this.height; i < o; i++) {
                          for (var s = 0, u = this.width; s < u; s++)
                            n.append(this.get(s, i) ? e : t);
                          n.append(r);
                        }
                        return n.toString();
                      }),
                      (e.prototype.clone = function () {
                        return new e(
                          this.width,
                          this.height,
                          this.rowSize,
                          this.bits.slice()
                        );
                      }),
                      e
                    );
                  })();
                t.default = u;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e() {}
                  return (
                    (e.arraycopy = function (e, t, r, n, i) {
                      for (; i--; ) r[n++] = e[t++];
                    }),
                    (e.currentTimeMillis = function () {
                      return Date.now();
                    }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(3),
                  i = r(7),
                  o = (function () {
                    function e(e, t, r, n, o, a) {
                      (this.text = e),
                        (this.rawBytes = t),
                        (this.numBits = r),
                        (this.resultPoints = n),
                        (this.format = o),
                        (this.timestamp = a),
                        (this.text = e),
                        (this.rawBytes = t),
                        (this.numBits =
                          null == r ? (null == t ? 0 : 8 * t.length) : r),
                        (this.resultPoints = n),
                        (this.format = o),
                        (this.resultMetadata = null),
                        (this.timestamp =
                          null == a ? i.default.currentTimeMillis() : a);
                    }
                    return (
                      (e.prototype.getText = function () {
                        return this.text;
                      }),
                      (e.prototype.getRawBytes = function () {
                        return this.rawBytes;
                      }),
                      (e.prototype.getNumBits = function () {
                        return this.numBits;
                      }),
                      (e.prototype.getResultPoints = function () {
                        return this.resultPoints;
                      }),
                      (e.prototype.getBarcodeFormat = function () {
                        return this.format;
                      }),
                      (e.prototype.getResultMetadata = function () {
                        return this.resultMetadata;
                      }),
                      (e.prototype.putMetadata = function (e, t) {
                        null === this.resultMetadata &&
                          (this.resultMetadata = new Map()),
                          this.resultMetadata.set(e, t);
                      }),
                      (e.prototype.putAllMetadata = function (e) {
                        null !== e &&
                          (null === this.resultMetadata
                            ? (this.resultMetadata = e)
                            : (this.resultMetadata = new Map(e)));
                      }),
                      (e.prototype.addResultPoints = function (e) {
                        var t = this.resultPoints;
                        if (null === t) this.resultPoints = e;
                        else if (null !== e && e.length > 0) {
                          var r = new n.default[t.length + e.length]();
                          i.default.arraycopy(t, 0, r, 0, t.length),
                            i.default.arraycopy(e, 0, r, t.length, e.length),
                            (this.resultPoints = r);
                        }
                      }),
                      (e.prototype.getTimestamp = function () {
                        return this.timestamp;
                      }),
                      (e.prototype.toString = function () {
                        return this.text;
                      }),
                      e
                    );
                  })();
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(14),
                  i = r(10),
                  o = r(3),
                  a = r(0),
                  s = (function () {
                    function e() {}
                    return (
                      (e.prototype.decode = function (e, t) {
                        try {
                          return this.doDecode(e, t);
                        } catch (d) {
                          if (t && !0 === t.get(3) && e.isRotateSupported()) {
                            var r = e.rotateCounterClockwise(),
                              n = this.doDecode(r, t),
                              s = n.getResultMetadata(),
                              u = 270;
                            null !== s &&
                              !0 === s.get(i.default.ORIENTATION) &&
                              (u += s.get(i.default.ORIENTATION) % 360),
                              n.putMetadata(i.default.ORIENTATION, u);
                            var c = n.getResultPoints();
                            if (null !== c)
                              for (
                                var f = r.getHeight(), l = 0;
                                l < c.length;
                                l++
                              )
                                c[l] = new o.default(
                                  f - c[l].getY() - 1,
                                  c[l].getX()
                                );
                            return n;
                          }
                          throw new a.default();
                        }
                      }),
                      (e.prototype.reset = function () {}),
                      (e.prototype.doDecode = function (e, t) {
                        var r,
                          s = e.getWidth(),
                          u = e.getHeight(),
                          c = new n.default(s),
                          f = t && !0 === t.get(3),
                          l = Math.max(1, u >> (f ? 8 : 5));
                        r = f ? u : 15;
                        for (var d = Math.trunc(u / 2), h = 0; h < r; h++) {
                          var p = Math.trunc((h + 1) / 2),
                            v = d + l * (0 == (1 & h) ? p : -p);
                          if (v < 0 || v >= u) break;
                          try {
                            c = e.getBlackRow(v, c);
                          } catch (e) {
                            continue;
                          }
                          for (
                            var g = function (e) {
                                if (
                                  1 === e &&
                                  (c.reverse(), t && !0 === t.get(9))
                                ) {
                                  var r = new Map();
                                  t.forEach(function (e, t) {
                                    return r.set(t, e);
                                  }),
                                    r.delete(9),
                                    (t = r);
                                }
                                try {
                                  var n = m.decodeRow(v, c, t);
                                  if (1 === e) {
                                    n.putMetadata(i.default.ORIENTATION, 180);
                                    var a = n.getResultPoints();
                                    null !== a &&
                                      ((a[0] = new o.default(
                                        s - a[0].getX() - 1,
                                        a[0].getY()
                                      )),
                                      (a[1] = new o.default(
                                        s - a[1].getX() - 1,
                                        a[1].getY()
                                      )));
                                  }
                                  return { value: n };
                                } catch (e) {}
                              },
                              m = this,
                              y = 0;
                            y < 2;
                            y++
                          ) {
                            var _ = g(y);
                            if ("object" == typeof _) return _.value;
                          }
                        }
                        throw new a.default();
                      }),
                      (e.recordPattern = function (e, t, r) {
                        for (var n = r.length, i = 0; i < n; i++) r[i] = 0;
                        var o = e.getSize();
                        if (t >= o) throw new a.default();
                        for (var s = !e.get(t), u = 0, c = t; c < o; ) {
                          if (e.get(c) !== s) r[u]++;
                          else {
                            if (++u === n) break;
                            (r[u] = 1), (s = !s);
                          }
                          c++;
                        }
                        if (u !== n && (u !== n - 1 || c !== o))
                          throw new a.default();
                      }),
                      (e.recordPatternInReverse = function (t, r, n) {
                        for (var i = n.length, o = t.get(r); r > 0 && i >= 0; )
                          t.get(--r) !== o && (i--, (o = !o));
                        if (i >= 0) throw new a.default();
                        e.recordPattern(t, r + 1, n);
                      }),
                      (e.patternMatchVariance = function (e, t, r) {
                        for (var n = e.length, i = 0, o = 0, a = 0; a < n; a++)
                          (i += e[a]), (o += t[a]);
                        if (i < o) return Number.POSITIVE_INFINITY;
                        var s = i / o;
                        r *= s;
                        for (var u = 0, c = 0; c < n; c++) {
                          var f = e[c],
                            l = t[c] * s,
                            d = f > l ? f - l : l - f;
                          if (d > r) return Number.POSITIVE_INFINITY;
                          u += d;
                        }
                        return u / i;
                      }),
                      e
                    );
                  })();
                t.default = s;
              },
              function (e, t, r) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (function (e) {
                    (e[(e.OTHER = 0)] = "OTHER"),
                      (e[(e.ORIENTATION = 1)] = "ORIENTATION"),
                      (e[(e.BYTE_SEGMENTS = 2)] = "BYTE_SEGMENTS"),
                      (e[(e.ERROR_CORRECTION_LEVEL = 3)] =
                        "ERROR_CORRECTION_LEVEL"),
                      (e[(e.ISSUE_NUMBER = 4)] = "ISSUE_NUMBER"),
                      (e[(e.SUGGESTED_PRICE = 5)] = "SUGGESTED_PRICE"),
                      (e[(e.POSSIBLE_COUNTRY = 6)] = "POSSIBLE_COUNTRY"),
                      (e[(e.UPC_EAN_EXTENSION = 7)] = "UPC_EAN_EXTENSION"),
                      (e[(e.PDF417_EXTRA_METADATA = 8)] =
                        "PDF417_EXTRA_METADATA"),
                      (e[(e.STRUCTURED_APPEND_SEQUENCE = 9)] =
                        "STRUCTURED_APPEND_SEQUENCE"),
                      (e[(e.STRUCTURED_APPEND_PARITY = 10)] =
                        "STRUCTURED_APPEND_PARITY");
                  })(n || (n = {})),
                  (t.default = n);
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return i(t, e), t;
                })(r(5).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e(e) {
                    void 0 === e && (e = ""), (this.value = e);
                  }
                  return (
                    (e.prototype.append = function (e) {
                      return (
                        (this.value +=
                          "string" == typeof e
                            ? e.toString()
                            : String.fromCharCode(e)),
                        this
                      );
                    }),
                    (e.prototype.length = function () {
                      return this.value.length;
                    }),
                    (e.prototype.charAt = function (e) {
                      return this.value.charAt(e);
                    }),
                    (e.prototype.deleteCharAt = function (e) {
                      this.value =
                        this.value.substr(0, e) + this.value.substring(e + 1);
                    }),
                    (e.prototype.setCharAt = function (e, t) {
                      this.value =
                        this.value.substr(0, e) + t + this.value.substr(e + 1);
                    }),
                    (e.prototype.toString = function () {
                      return this.value;
                    }),
                    (e.prototype.insert = function (e, t) {
                      this.value =
                        this.value.substr(0, e) +
                        t +
                        this.value.substr(e + t.length);
                    }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(23),
                  i = r(24),
                  o = r(1),
                  a = r(59),
                  s = (function () {
                    function e(e, t, r) {
                      (this.primitive = e),
                        (this.size = t),
                        (this.generatorBase = r);
                      for (var i = new Int32Array(t), o = 1, a = 0; a < t; a++)
                        (i[a] = o), (o *= 2) >= t && ((o ^= e), (o &= t - 1));
                      this.expTable = i;
                      var s = new Int32Array(t);
                      for (a = 0; a < t - 1; a++) s[i[a]] = a;
                      (this.logTable = s),
                        (this.zero = new n.default(this, Int32Array.from([0]))),
                        (this.one = new n.default(this, Int32Array.from([1])));
                    }
                    return (
                      (e.prototype.getZero = function () {
                        return this.zero;
                      }),
                      (e.prototype.getOne = function () {
                        return this.one;
                      }),
                      (e.prototype.buildMonomial = function (e, t) {
                        if (e < 0) throw new o.default();
                        if (0 === t) return this.zero;
                        var r = new Int32Array(e + 1);
                        return (r[0] = t), new n.default(this, r);
                      }),
                      (e.addOrSubtract = function (e, t) {
                        return e ^ t;
                      }),
                      (e.prototype.exp = function (e) {
                        return this.expTable[e];
                      }),
                      (e.prototype.log = function (e) {
                        if (0 === e) throw new o.default();
                        return this.logTable[e];
                      }),
                      (e.prototype.inverse = function (e) {
                        if (0 === e) throw new a.default();
                        return this.expTable[this.size - this.logTable[e] - 1];
                      }),
                      (e.prototype.multiply = function (e, t) {
                        return 0 === e || 0 === t
                          ? 0
                          : this.expTable[
                              (this.logTable[e] + this.logTable[t]) %
                                (this.size - 1)
                            ];
                      }),
                      (e.prototype.getSize = function () {
                        return this.size;
                      }),
                      (e.prototype.getGeneratorBase = function () {
                        return this.generatorBase;
                      }),
                      (e.prototype.toString = function () {
                        return (
                          "GF(0x" +
                          i.default.toHexString(this.primitive) +
                          "," +
                          this.size +
                          ")"
                        );
                      }),
                      (e.prototype.equals = function (e) {
                        return e === this;
                      }),
                      (e.AZTEC_DATA_12 = new e(4201, 4096, 1)),
                      (e.AZTEC_DATA_10 = new e(1033, 1024, 1)),
                      (e.AZTEC_DATA_6 = new e(67, 64, 1)),
                      (e.AZTEC_PARAM = new e(19, 16, 1)),
                      (e.QR_CODE_FIELD_256 = new e(285, 256, 0)),
                      (e.DATA_MATRIX_FIELD_256 = new e(301, 256, 1)),
                      (e.AZTEC_DATA_8 = e.DATA_MATRIX_FIELD_256),
                      (e.MAXICODE_FIELD_64 = e.AZTEC_DATA_6),
                      e
                    );
                  })();
                t.default = s;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(7),
                  i = r(24),
                  o = r(41),
                  a = r(1),
                  s = (function () {
                    function e(t, r) {
                      void 0 === t
                        ? ((this.size = 0), (this.bits = new Int32Array(1)))
                        : ((this.size = t),
                          (this.bits = null == r ? e.makeArray(t) : r));
                    }
                    return (
                      (e.prototype.getSize = function () {
                        return this.size;
                      }),
                      (e.prototype.getSizeInBytes = function () {
                        return Math.floor((this.size + 7) / 8);
                      }),
                      (e.prototype.ensureCapacity = function (t) {
                        if (t > 32 * this.bits.length) {
                          var r = e.makeArray(t);
                          n.default.arraycopy(
                            this.bits,
                            0,
                            r,
                            0,
                            this.bits.length
                          ),
                            (this.bits = r);
                        }
                      }),
                      (e.prototype.get = function (e) {
                        return (
                          0 != (this.bits[Math.floor(e / 32)] & (1 << (31 & e)))
                        );
                      }),
                      (e.prototype.set = function (e) {
                        this.bits[Math.floor(e / 32)] |= 1 << (31 & e);
                      }),
                      (e.prototype.flip = function (e) {
                        this.bits[Math.floor(e / 32)] ^= 1 << (31 & e);
                      }),
                      (e.prototype.getNextSet = function (e) {
                        var t = this.size;
                        if (e >= t) return t;
                        var r = this.bits,
                          n = Math.floor(e / 32),
                          o = r[n];
                        o &= ~((1 << (31 & e)) - 1);
                        for (var a = r.length; 0 === o; ) {
                          if (++n === a) return t;
                          o = r[n];
                        }
                        var s = 32 * n + i.default.numberOfTrailingZeros(o);
                        return s > t ? t : s;
                      }),
                      (e.prototype.getNextUnset = function (e) {
                        var t = this.size;
                        if (e >= t) return t;
                        var r = this.bits,
                          n = Math.floor(e / 32),
                          o = ~r[n];
                        o &= ~((1 << (31 & e)) - 1);
                        for (var a = r.length; 0 === o; ) {
                          if (++n === a) return t;
                          o = ~r[n];
                        }
                        var s = 32 * n + i.default.numberOfTrailingZeros(o);
                        return s > t ? t : s;
                      }),
                      (e.prototype.setBulk = function (e, t) {
                        this.bits[Math.floor(e / 32)] = t;
                      }),
                      (e.prototype.setRange = function (e, t) {
                        if (t < e || e < 0 || t > this.size)
                          throw new a.default();
                        if (t !== e) {
                          t--;
                          for (
                            var r = Math.floor(e / 32),
                              n = Math.floor(t / 32),
                              i = this.bits,
                              o = r;
                            o <= n;
                            o++
                          ) {
                            var s =
                              (2 << (o < n ? 31 : 31 & t)) -
                              (1 << (o > r ? 0 : 31 & e));
                            i[o] |= s;
                          }
                        }
                      }),
                      (e.prototype.clear = function () {
                        for (
                          var e = this.bits.length, t = this.bits, r = 0;
                          r < e;
                          r++
                        )
                          t[r] = 0;
                      }),
                      (e.prototype.isRange = function (e, t, r) {
                        if (t < e || e < 0 || t > this.size)
                          throw new a.default();
                        if (t === e) return !0;
                        t--;
                        for (
                          var n = Math.floor(e / 32),
                            i = Math.floor(t / 32),
                            o = this.bits,
                            s = n;
                          s <= i;
                          s++
                        ) {
                          var u =
                            ((2 << (s < i ? 31 : 31 & t)) -
                              (1 << (s > n ? 0 : 31 & e))) &
                            4294967295;
                          if ((o[s] & u) !== (r ? u : 0)) return !1;
                        }
                        return !0;
                      }),
                      (e.prototype.appendBit = function (e) {
                        this.ensureCapacity(this.size + 1),
                          e &&
                            (this.bits[Math.floor(this.size / 32)] |=
                              1 << (31 & this.size)),
                          this.size++;
                      }),
                      (e.prototype.appendBits = function (e, t) {
                        if (t < 0 || t > 32)
                          throw new a.default(
                            "Num bits must be between 0 and 32"
                          );
                        this.ensureCapacity(this.size + t), this.appendBit;
                        for (var r = t; r > 0; r--)
                          this.appendBit(1 == ((e >> (r - 1)) & 1));
                      }),
                      (e.prototype.appendBitArray = function (e) {
                        var t = e.size;
                        this.ensureCapacity(this.size + t), this.appendBit;
                        for (var r = 0; r < t; r++) this.appendBit(e.get(r));
                      }),
                      (e.prototype.xor = function (e) {
                        if (this.size !== e.size)
                          throw new a.default("Sizes don't match");
                        for (var t = this.bits, r = 0, n = t.length; r < n; r++)
                          t[r] ^= e.bits[r];
                      }),
                      (e.prototype.toBytes = function (e, t, r, n) {
                        for (var i = 0; i < n; i++) {
                          for (var o = 0, a = 0; a < 8; a++)
                            this.get(e) && (o |= 1 << (7 - a)), e++;
                          t[r + i] = o;
                        }
                      }),
                      (e.prototype.getBitArray = function () {
                        return this.bits;
                      }),
                      (e.prototype.reverse = function () {
                        for (
                          var e = new Int32Array(this.bits.length),
                            t = Math.floor((this.size - 1) / 32),
                            r = t + 1,
                            n = this.bits,
                            i = 0;
                          i < r;
                          i++
                        ) {
                          var o = n[i];
                          (o =
                            (((o =
                              (((o =
                                (((o =
                                  (((o =
                                    ((o >> 1) & 1431655765) |
                                    ((1431655765 & o) << 1)) >>
                                    2) &
                                    858993459) |
                                  ((858993459 & o) << 2)) >>
                                  4) &
                                  252645135) |
                                ((252645135 & o) << 4)) >>
                                8) &
                                16711935) |
                              ((16711935 & o) << 8)) >>
                              16) &
                              65535) |
                            ((65535 & o) << 16)),
                            (e[t - i] = o);
                        }
                        if (this.size !== 32 * r) {
                          var a = 32 * r - this.size,
                            s = e[0] >>> a;
                          for (i = 1; i < r; i++) {
                            var u = e[i];
                            (s |= u << (32 - a)), (e[i - 1] = s), (s = u >>> a);
                          }
                          e[r - 1] = s;
                        }
                        this.bits = e;
                      }),
                      (e.makeArray = function (e) {
                        return new Int32Array(Math.floor((e + 31) / 32));
                      }),
                      (e.prototype.equals = function (t) {
                        if (!(t instanceof e)) return !1;
                        var r = t;
                        return (
                          this.size === r.size &&
                          o.default.equals(this.bits, r.bits)
                        );
                      }),
                      (e.prototype.hashCode = function () {
                        return 31 * this.size + o.default.hashCode(this.bits);
                      }),
                      (e.prototype.toString = function () {
                        for (var e = "", t = 0, r = this.size; t < r; t++)
                          0 == (7 & t) && (e += " "),
                            (e += this.get(t) ? "X" : ".");
                        return e;
                      }),
                      (e.prototype.clone = function () {
                        return new e(this.size, this.bits.slice());
                      }),
                      e
                    );
                  })();
                t.default = s;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(4);
                !(function (e) {
                  (e[(e.Cp437 = 0)] = "Cp437"),
                    (e[(e.ISO8859_1 = 1)] = "ISO8859_1"),
                    (e[(e.ISO8859_2 = 2)] = "ISO8859_2"),
                    (e[(e.ISO8859_3 = 3)] = "ISO8859_3"),
                    (e[(e.ISO8859_4 = 4)] = "ISO8859_4"),
                    (e[(e.ISO8859_5 = 5)] = "ISO8859_5"),
                    (e[(e.ISO8859_6 = 6)] = "ISO8859_6"),
                    (e[(e.ISO8859_7 = 7)] = "ISO8859_7"),
                    (e[(e.ISO8859_8 = 8)] = "ISO8859_8"),
                    (e[(e.ISO8859_9 = 9)] = "ISO8859_9"),
                    (e[(e.ISO8859_10 = 10)] = "ISO8859_10"),
                    (e[(e.ISO8859_11 = 11)] = "ISO8859_11"),
                    (e[(e.ISO8859_13 = 12)] = "ISO8859_13"),
                    (e[(e.ISO8859_14 = 13)] = "ISO8859_14"),
                    (e[(e.ISO8859_15 = 14)] = "ISO8859_15"),
                    (e[(e.ISO8859_16 = 15)] = "ISO8859_16"),
                    (e[(e.SJIS = 16)] = "SJIS"),
                    (e[(e.Cp1250 = 17)] = "Cp1250"),
                    (e[(e.Cp1251 = 18)] = "Cp1251"),
                    (e[(e.Cp1252 = 19)] = "Cp1252"),
                    (e[(e.Cp1256 = 20)] = "Cp1256"),
                    (e[(e.UnicodeBigUnmarked = 21)] = "UnicodeBigUnmarked"),
                    (e[(e.UTF8 = 22)] = "UTF8"),
                    (e[(e.ASCII = 23)] = "ASCII"),
                    (e[(e.Big5 = 24)] = "Big5"),
                    (e[(e.GB18030 = 25)] = "GB18030"),
                    (e[(e.EUC_KR = 26)] = "EUC_KR");
                })(
                  t.CharacterSetValueIdentifiers ||
                    (t.CharacterSetValueIdentifiers = {})
                );
                var i = (function () {
                  function e(t, r, n) {
                    for (var i = [], o = 3; o < arguments.length; o++)
                      i[o - 3] = arguments[o];
                    (this.valueIdentifier = t),
                      (this.name = n),
                      (this.values =
                        "number" == typeof r ? Int32Array.from([r]) : r),
                      (this.otherEncodingNames = i),
                      e.VALUE_IDENTIFIER_TO_ECI.set(t, this),
                      e.NAME_TO_ECI.set(n, this);
                    for (
                      var a = this.values, s = 0, u = a.length;
                      s !== u;
                      s++
                    ) {
                      var c = a[s];
                      e.VALUES_TO_ECI.set(c, this);
                    }
                    for (var f = 0, l = i; f < l.length; f++) {
                      var d = l[f];
                      e.NAME_TO_ECI.set(d, this);
                    }
                  }
                  return (
                    (e.prototype.getValueIdentifier = function () {
                      return this.valueIdentifier;
                    }),
                    (e.prototype.getName = function () {
                      return this.name;
                    }),
                    (e.prototype.getValue = function () {
                      return this.values[0];
                    }),
                    (e.getCharacterSetECIByValue = function (t) {
                      if (t < 0 || t >= 900)
                        throw new n.default("incorect value");
                      var r = e.VALUES_TO_ECI.get(t);
                      if (void 0 === r) throw new n.default("incorect value");
                      return r;
                    }),
                    (e.getCharacterSetECIByName = function (t) {
                      var r = e.NAME_TO_ECI.get(t);
                      if (void 0 === r) throw new n.default("incorect value");
                      return r;
                    }),
                    (e.prototype.equals = function (t) {
                      if (!(t instanceof e)) return !1;
                      var r = t;
                      return this.getName() === r.getName();
                    }),
                    (e.VALUE_IDENTIFIER_TO_ECI = new Map()),
                    (e.VALUES_TO_ECI = new Map()),
                    (e.NAME_TO_ECI = new Map()),
                    (e.Cp437 = new e(0, Int32Array.from([0, 2]), "Cp437")),
                    (e.ISO8859_1 = new e(
                      1,
                      Int32Array.from([1, 3]),
                      "ISO-8859-1",
                      "ISO88591",
                      "ISO8859_1"
                    )),
                    (e.ISO8859_2 = new e(
                      2,
                      4,
                      "ISO-8859-2",
                      "ISO88592",
                      "ISO8859_2"
                    )),
                    (e.ISO8859_3 = new e(
                      3,
                      5,
                      "ISO-8859-3",
                      "ISO88593",
                      "ISO8859_3"
                    )),
                    (e.ISO8859_4 = new e(
                      4,
                      6,
                      "ISO-8859-4",
                      "ISO88594",
                      "ISO8859_4"
                    )),
                    (e.ISO8859_5 = new e(
                      5,
                      7,
                      "ISO-8859-5",
                      "ISO88595",
                      "ISO8859_5"
                    )),
                    (e.ISO8859_6 = new e(
                      6,
                      8,
                      "ISO-8859-6",
                      "ISO88596",
                      "ISO8859_6"
                    )),
                    (e.ISO8859_7 = new e(
                      7,
                      9,
                      "ISO-8859-7",
                      "ISO88597",
                      "ISO8859_7"
                    )),
                    (e.ISO8859_8 = new e(
                      8,
                      10,
                      "ISO-8859-8",
                      "ISO88598",
                      "ISO8859_8"
                    )),
                    (e.ISO8859_9 = new e(
                      9,
                      11,
                      "ISO-8859-9",
                      "ISO88599",
                      "ISO8859_9"
                    )),
                    (e.ISO8859_10 = new e(
                      10,
                      12,
                      "ISO-8859-10",
                      "ISO885910",
                      "ISO8859_10"
                    )),
                    (e.ISO8859_11 = new e(
                      11,
                      13,
                      "ISO-8859-11",
                      "ISO885911",
                      "ISO8859_11"
                    )),
                    (e.ISO8859_13 = new e(
                      12,
                      15,
                      "ISO-8859-13",
                      "ISO885913",
                      "ISO8859_13"
                    )),
                    (e.ISO8859_14 = new e(
                      13,
                      16,
                      "ISO-8859-14",
                      "ISO885914",
                      "ISO8859_14"
                    )),
                    (e.ISO8859_15 = new e(
                      14,
                      17,
                      "ISO-8859-15",
                      "ISO885915",
                      "ISO8859_15"
                    )),
                    (e.ISO8859_16 = new e(
                      15,
                      18,
                      "ISO-8859-16",
                      "ISO885916",
                      "ISO8859_16"
                    )),
                    (e.SJIS = new e(16, 20, "SJIS", "Shift_JIS")),
                    (e.Cp1250 = new e(17, 21, "Cp1250", "windows-1250")),
                    (e.Cp1251 = new e(18, 22, "Cp1251", "windows-1251")),
                    (e.Cp1252 = new e(19, 23, "Cp1252", "windows-1252")),
                    (e.Cp1256 = new e(20, 24, "Cp1256", "windows-1256")),
                    (e.UnicodeBigUnmarked = new e(
                      21,
                      25,
                      "UnicodeBigUnmarked",
                      "UTF-16BE",
                      "UnicodeBig"
                    )),
                    (e.UTF8 = new e(22, 26, "UTF8", "UTF-8")),
                    (e.ASCII = new e(
                      23,
                      Int32Array.from([27, 170]),
                      "ASCII",
                      "US-ASCII"
                    )),
                    (e.Big5 = new e(24, 28, "Big5")),
                    (e.GB18030 = new e(
                      25,
                      29,
                      "GB18030",
                      "GB2312",
                      "EUC_CN",
                      "GBK"
                    )),
                    (e.EUC_KR = new e(26, 30, "EUC_KR", "EUC-KR")),
                    e
                  );
                })();
                t.default = i;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return i(t, e), t;
                })(r(5).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e() {}
                  return (
                    (e.prototype.MathUtils = function () {}),
                    (e.round = function (e) {
                      return NaN === e
                        ? 0
                        : e <= Number.MIN_SAFE_INTEGER
                        ? Number.MIN_SAFE_INTEGER
                        : e >= Number.MAX_SAFE_INTEGER
                        ? Number.MAX_SAFE_INTEGER
                        : (e + (e < 0 ? -0.5 : 0.5)) | 0;
                    }),
                    (e.distance = function (e, t, r, n) {
                      var i = e - r,
                        o = t - n;
                      return Math.sqrt(i * i + o * o);
                    }),
                    (e.sum = function (e) {
                      for (var t = 0, r = 0, n = e.length; r !== n; r++)
                        t += e[r];
                      return t;
                    }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(12),
                  i = r(42),
                  o = (function () {
                    function e(e, t) {
                      (this.width = e), (this.height = t);
                    }
                    return (
                      (e.prototype.getWidth = function () {
                        return this.width;
                      }),
                      (e.prototype.getHeight = function () {
                        return this.height;
                      }),
                      (e.prototype.isCropSupported = function () {
                        return !1;
                      }),
                      (e.prototype.crop = function (e, t, r, n) {
                        throw new i.default(
                          "This luminance source does not support cropping."
                        );
                      }),
                      (e.prototype.isRotateSupported = function () {
                        return !1;
                      }),
                      (e.prototype.rotateCounterClockwise = function () {
                        throw new i.default(
                          "This luminance source does not support rotation by 90 degrees."
                        );
                      }),
                      (e.prototype.rotateCounterClockwise45 = function () {
                        throw new i.default(
                          "This luminance source does not support rotation by 45 degrees."
                        );
                      }),
                      (e.prototype.toString = function () {
                        for (
                          var e = new Uint8ClampedArray(this.width),
                            t = new n.default(),
                            r = 0;
                          r < this.height;
                          r++
                        ) {
                          for (
                            var i = this.getRow(r, e), o = 0;
                            o < this.width;
                            o++
                          ) {
                            var a,
                              s = 255 & i[o];
                            (a =
                              s < 64
                                ? "#"
                                : s < 128
                                ? "+"
                                : s < 192
                                ? "."
                                : " "),
                              t.append(a);
                          }
                          t.append("\n");
                        }
                        return t.toString();
                      }),
                      e
                    );
                  })();
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t(t) {
                    var r = e.call(this, t.getWidth(), t.getHeight()) || this;
                    return (r.delegate = t), r;
                  }
                  return (
                    i(t, e),
                    (t.prototype.getRow = function (e, t) {
                      for (
                        var r = this.delegate.getRow(e, t),
                          n = this.getWidth(),
                          i = 0;
                        i < n;
                        i++
                      )
                        r[i] = 255 - (255 & r[i]);
                      return r;
                    }),
                    (t.prototype.getMatrix = function () {
                      for (
                        var e = this.delegate.getMatrix(),
                          t = this.getWidth() * this.getHeight(),
                          r = new Uint8ClampedArray(t),
                          n = 0;
                        n < t;
                        n++
                      )
                        r[n] = 255 - (255 & e[n]);
                      return r;
                    }),
                    (t.prototype.isCropSupported = function () {
                      return this.delegate.isCropSupported();
                    }),
                    (t.prototype.crop = function (e, r, n, i) {
                      return new t(this.delegate.crop(e, r, n, i));
                    }),
                    (t.prototype.isRotateSupported = function () {
                      return this.delegate.isRotateSupported();
                    }),
                    (t.prototype.invert = function () {
                      return this.delegate;
                    }),
                    (t.prototype.rotateCounterClockwise = function () {
                      return new t(this.delegate.rotateCounterClockwise());
                    }),
                    (t.prototype.rotateCounterClockwise45 = function () {
                      return new t(this.delegate.rotateCounterClockwise45());
                    }),
                    t
                  );
                })(r(18).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(2),
                  a = r(8),
                  s = r(10),
                  u = r(3),
                  c = r(9),
                  f = r(74),
                  l = r(0),
                  d = r(4),
                  h = r(11),
                  p = (function (e) {
                    function t() {
                      var r = e.call(this) || this;
                      (r.decodeRowStringBuffer = ""),
                        (r.decodeRowStringBuffer = ""),
                        (t.L_AND_G_PATTERNS = t.L_PATTERNS.map(function (e) {
                          return e.slice();
                        }));
                      for (var n = 10; n < 20; n++) {
                        for (
                          var i = t.L_PATTERNS[n - 10],
                            o = new Array(i.length),
                            a = 0;
                          a < i.length;
                          a++
                        )
                          o[a] = i[i.length - a - 1];
                        t.L_AND_G_PATTERNS[n] = o;
                      }
                      return r;
                    }
                    return (
                      i(t, e),
                      (t.findStartGuardPattern = function (e) {
                        for (var r = !1, n = null, i = 0, o = [0, 0, 0]; !r; ) {
                          o = [0, 0, 0];
                          var a = (n = t.findGuardPattern(
                              e,
                              i,
                              !1,
                              this.START_END_PATTERN,
                              o
                            ))[0],
                            s = a - ((i = n[1]) - a);
                          s >= 0 && (r = e.isRange(s, a, !1));
                        }
                        return n;
                      }),
                      (t.prototype.decodeRow = function (e, r, n) {
                        var i = t.findStartGuardPattern(r),
                          c = null == n ? null : n.get(9);
                        if (null != c) {
                          var p = new u.default((i[0] + i[1]) / 2, e);
                          c.foundPossibleResultPoint(p);
                        }
                        var v = this.decodeMiddle(
                            r,
                            i,
                            this.decodeRowStringBuffer
                          ),
                          g = v.rowOffset,
                          m = v.resultString;
                        if (null != c) {
                          var y = new u.default(g, e);
                          c.foundPossibleResultPoint(y);
                        }
                        var _ = t.decodeEnd(r, g);
                        if (null != c) {
                          var w = new u.default((_[0] + _[1]) / 2, e);
                          c.foundPossibleResultPoint(w);
                        }
                        var C = _[1],
                          E = C + (C - _[0]);
                        if (E >= r.getSize() || !r.isRange(C, E, !1))
                          throw new l.default();
                        var S = m.toString();
                        if (S.length < 8) throw new d.default();
                        if (!t.checkChecksum(S)) throw new h.default();
                        var b = (i[1] + i[0]) / 2,
                          T = (_[1] + _[0]) / 2,
                          A = this.getBarcodeFormat(),
                          O = [new u.default(b, e), new u.default(T, e)],
                          I = new a.default(
                            S,
                            null,
                            0,
                            O,
                            A,
                            new Date().getTime()
                          ),
                          R = 0;
                        try {
                          var P = f.default.decodeRow(e, r, _[1]);
                          I.putMetadata(
                            s.default.UPC_EAN_EXTENSION,
                            P.getText()
                          ),
                            I.putAllMetadata(P.getResultMetadata()),
                            I.addResultPoints(P.getResultPoints()),
                            (R = P.getText().length);
                        } catch (e) {}
                        var M = null == n ? null : n.get(10);
                        if (null != M) {
                          var N = !1;
                          for (var D in M)
                            if (R.toString() === D) {
                              N = !0;
                              break;
                            }
                          if (!N) throw new l.default();
                        }
                        return A === o.default.EAN_13 || o.default.UPC_A, I;
                      }),
                      (t.checkChecksum = function (e) {
                        return t.checkStandardUPCEANChecksum(e);
                      }),
                      (t.checkStandardUPCEANChecksum = function (e) {
                        var r = e.length;
                        if (0 === r) return !1;
                        var n = parseInt(e.charAt(r - 1), 10);
                        return (
                          t.getStandardUPCEANChecksum(e.substring(0, r - 1)) ===
                          n
                        );
                      }),
                      (t.getStandardUPCEANChecksum = function (e) {
                        for (
                          var t = e.length, r = 0, n = t - 1;
                          n >= 0;
                          n -= 2
                        ) {
                          if (
                            (i =
                              e.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) <
                              0 ||
                            i > 9
                          )
                            throw new d.default();
                          r += i;
                        }
                        for (r *= 3, n = t - 2; n >= 0; n -= 2) {
                          var i;
                          if (
                            (i =
                              e.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) <
                              0 ||
                            i > 9
                          )
                            throw new d.default();
                          r += i;
                        }
                        return (1e3 - r) % 10;
                      }),
                      (t.decodeEnd = function (e, r) {
                        return t.findGuardPattern(
                          e,
                          r,
                          !1,
                          t.START_END_PATTERN,
                          new Array(t.START_END_PATTERN.length).fill(0)
                        );
                      }),
                      (t.findGuardPattern = function (e, r, n, i, o) {
                        for (
                          var a = e.getSize(),
                            s = 0,
                            u = (r = n ? e.getNextUnset(r) : e.getNextSet(r)),
                            f = i.length,
                            d = n,
                            h = r;
                          h < a;
                          h++
                        )
                          if (e.get(h) !== d) o[s]++;
                          else {
                            if (s === f - 1) {
                              if (
                                c.default.patternMatchVariance(
                                  o,
                                  i,
                                  t.MAX_INDIVIDUAL_VARIANCE
                                ) < t.MAX_AVG_VARIANCE
                              )
                                return [u, h];
                              u += o[0] + o[1];
                              for (
                                var p = o.slice(2, o.length), v = 0;
                                v < s - 1;
                                v++
                              )
                                o[v] = p[v];
                              (o[s - 1] = 0), (o[s] = 0), s--;
                            } else s++;
                            (o[s] = 1), (d = !d);
                          }
                        throw new l.default();
                      }),
                      (t.decodeDigit = function (e, r, n, i) {
                        this.recordPattern(e, n, r);
                        for (
                          var o = this.MAX_AVG_VARIANCE,
                            a = -1,
                            s = i.length,
                            u = 0;
                          u < s;
                          u++
                        ) {
                          var f = i[u],
                            d = c.default.patternMatchVariance(
                              r,
                              f,
                              t.MAX_INDIVIDUAL_VARIANCE
                            );
                          d < o && ((o = d), (a = u));
                        }
                        if (a >= 0) return a;
                        throw new l.default();
                      }),
                      (t.MAX_AVG_VARIANCE = 0.48),
                      (t.MAX_INDIVIDUAL_VARIANCE = 0.7),
                      (t.START_END_PATTERN = [1, 1, 1]),
                      (t.MIDDLE_PATTERN = [1, 1, 1, 1, 1]),
                      (t.END_PATTERN = [1, 1, 1, 1, 1, 1]),
                      (t.L_PATTERNS = [
                        [3, 2, 1, 1],
                        [2, 2, 2, 1],
                        [2, 1, 2, 2],
                        [1, 4, 1, 1],
                        [1, 1, 3, 2],
                        [1, 2, 3, 1],
                        [1, 1, 1, 4],
                        [1, 3, 1, 2],
                        [1, 2, 1, 3],
                        [3, 1, 1, 2],
                      ]),
                      t
                    );
                  })(c.default);
                t.default = p;
              },
              function (e, t, r) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (function (e) {
                    (e[(e.ERROR_CORRECTION = 0)] = "ERROR_CORRECTION"),
                      (e[(e.CHARACTER_SET = 1)] = "CHARACTER_SET"),
                      (e[(e.DATA_MATRIX_SHAPE = 2)] = "DATA_MATRIX_SHAPE"),
                      (e[(e.MIN_SIZE = 3)] = "MIN_SIZE"),
                      (e[(e.MAX_SIZE = 4)] = "MAX_SIZE"),
                      (e[(e.MARGIN = 5)] = "MARGIN"),
                      (e[(e.PDF417_COMPACT = 6)] = "PDF417_COMPACT"),
                      (e[(e.PDF417_COMPACTION = 7)] = "PDF417_COMPACTION"),
                      (e[(e.PDF417_DIMENSIONS = 8)] = "PDF417_DIMENSIONS"),
                      (e[(e.AZTEC_LAYERS = 9)] = "AZTEC_LAYERS"),
                      (e[(e.QR_VERSION = 10)] = "QR_VERSION");
                  })(n || (n = {})),
                  (t.default = n);
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(40),
                  i = r(1);
                !(function (e) {
                  (e[(e.L = 0)] = "L"),
                    (e[(e.M = 1)] = "M"),
                    (e[(e.Q = 2)] = "Q"),
                    (e[(e.H = 3)] = "H");
                })(
                  t.ErrorCorrectionLevelValues ||
                    (t.ErrorCorrectionLevelValues = {})
                );
                var o = (function () {
                  function e(t, r, n) {
                    (this.value = t),
                      (this.stringValue = r),
                      (this.bits = n),
                      e.FOR_BITS.set(n, this),
                      e.FOR_VALUE.set(t, this);
                  }
                  return (
                    (e.prototype.getValue = function () {
                      return this.value;
                    }),
                    (e.prototype.getBits = function () {
                      return this.bits;
                    }),
                    (e.fromString = function (t) {
                      switch (t) {
                        case "L":
                          return e.L;
                        case "M":
                          return e.M;
                        case "Q":
                          return e.Q;
                        case "H":
                          return e.H;
                        default:
                          throw new n.default(t + "not available");
                      }
                    }),
                    (e.prototype.toString = function () {
                      return this.stringValue;
                    }),
                    (e.prototype.equals = function (t) {
                      if (!(t instanceof e)) return !1;
                      var r = t;
                      return this.value === r.value;
                    }),
                    (e.forBits = function (t) {
                      if (t < 0 || t >= e.FOR_BITS.size) throw new i.default();
                      return e.FOR_BITS.get(t);
                    }),
                    (e.FOR_BITS = new Map()),
                    (e.FOR_VALUE = new Map()),
                    (e.L = new e(0, "L", 1)),
                    (e.M = new e(1, "M", 0)),
                    (e.Q = new e(2, "Q", 3)),
                    (e.H = new e(3, "H", 2)),
                    e
                  );
                })();
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(13),
                  i = r(7),
                  o = r(1),
                  a = (function () {
                    function e(e, t) {
                      if (0 === t.length) throw new o.default();
                      this.field = e;
                      var r = t.length;
                      if (r > 1 && 0 === t[0]) {
                        for (var n = 1; n < r && 0 === t[n]; ) n++;
                        n === r
                          ? (this.coefficients = Int32Array.from([0]))
                          : ((this.coefficients = new Int32Array(r - n)),
                            i.default.arraycopy(
                              t,
                              n,
                              this.coefficients,
                              0,
                              this.coefficients.length
                            ));
                      } else this.coefficients = t;
                    }
                    return (
                      (e.prototype.getCoefficients = function () {
                        return this.coefficients;
                      }),
                      (e.prototype.getDegree = function () {
                        return this.coefficients.length - 1;
                      }),
                      (e.prototype.isZero = function () {
                        return 0 === this.coefficients[0];
                      }),
                      (e.prototype.getCoefficient = function (e) {
                        return this.coefficients[
                          this.coefficients.length - 1 - e
                        ];
                      }),
                      (e.prototype.evaluateAt = function (e) {
                        if (0 === e) return this.getCoefficient(0);
                        var t,
                          r = this.coefficients;
                        if (1 === e) {
                          t = 0;
                          for (var i = 0, o = r.length; i !== o; i++) {
                            var a = r[i];
                            t = n.default.addOrSubtract(t, a);
                          }
                          return t;
                        }
                        t = r[0];
                        var s = r.length,
                          u = this.field;
                        for (i = 1; i < s; i++)
                          t = n.default.addOrSubtract(u.multiply(e, t), r[i]);
                        return t;
                      }),
                      (e.prototype.addOrSubtract = function (t) {
                        if (!this.field.equals(t.field))
                          throw new o.default(
                            "GenericGFPolys do not have same GenericGF field"
                          );
                        if (this.isZero()) return t;
                        if (t.isZero()) return this;
                        var r = this.coefficients,
                          a = t.coefficients;
                        if (r.length > a.length) {
                          var s = r;
                          (r = a), (a = s);
                        }
                        var u = new Int32Array(a.length),
                          c = a.length - r.length;
                        i.default.arraycopy(a, 0, u, 0, c);
                        for (var f = c; f < a.length; f++)
                          u[f] = n.default.addOrSubtract(r[f - c], a[f]);
                        return new e(this.field, u);
                      }),
                      (e.prototype.multiply = function (t) {
                        if (!this.field.equals(t.field))
                          throw new o.default(
                            "GenericGFPolys do not have same GenericGF field"
                          );
                        if (this.isZero() || t.isZero())
                          return this.field.getZero();
                        for (
                          var r = this.coefficients,
                            i = r.length,
                            a = t.coefficients,
                            s = a.length,
                            u = new Int32Array(i + s - 1),
                            c = this.field,
                            f = 0;
                          f < i;
                          f++
                        )
                          for (var l = r[f], d = 0; d < s; d++)
                            u[f + d] = n.default.addOrSubtract(
                              u[f + d],
                              c.multiply(l, a[d])
                            );
                        return new e(c, u);
                      }),
                      (e.prototype.multiplyScalar = function (t) {
                        if (0 === t) return this.field.getZero();
                        if (1 === t) return this;
                        for (
                          var r = this.coefficients.length,
                            n = this.field,
                            i = new Int32Array(r),
                            o = this.coefficients,
                            a = 0;
                          a < r;
                          a++
                        )
                          i[a] = n.multiply(o[a], t);
                        return new e(n, i);
                      }),
                      (e.prototype.multiplyByMonomial = function (t, r) {
                        if (t < 0) throw new o.default();
                        if (0 === r) return this.field.getZero();
                        for (
                          var n = this.coefficients,
                            i = n.length,
                            a = new Int32Array(i + t),
                            s = this.field,
                            u = 0;
                          u < i;
                          u++
                        )
                          a[u] = s.multiply(n[u], r);
                        return new e(s, a);
                      }),
                      (e.prototype.divide = function (e) {
                        if (!this.field.equals(e.field))
                          throw new o.default(
                            "GenericGFPolys do not have same GenericGF field"
                          );
                        if (e.isZero()) throw new o.default("Divide by 0");
                        for (
                          var t = this.field,
                            r = t.getZero(),
                            n = this,
                            i = e.getCoefficient(e.getDegree()),
                            a = t.inverse(i);
                          n.getDegree() >= e.getDegree() && !n.isZero();

                        ) {
                          var s = n.getDegree() - e.getDegree(),
                            u = t.multiply(n.getCoefficient(n.getDegree()), a),
                            c = e.multiplyByMonomial(s, u),
                            f = t.buildMonomial(s, u);
                          (r = r.addOrSubtract(f)), (n = n.addOrSubtract(c));
                        }
                        return [r, n];
                      }),
                      (e.prototype.toString = function () {
                        for (var e = "", t = this.getDegree(); t >= 0; t--) {
                          var r = this.getCoefficient(t);
                          if (0 !== r) {
                            if (
                              (r < 0
                                ? ((e += " - "), (r = -r))
                                : e.length > 0 && (e += " + "),
                              0 === t || 1 !== r)
                            ) {
                              var n = this.field.log(r);
                              0 === n
                                ? (e += "1")
                                : 1 === n
                                ? (e += "a")
                                : ((e += "a^"), (e += n));
                            }
                            0 !== t &&
                              (1 === t ? (e += "x") : ((e += "x^"), (e += t)));
                          }
                        }
                        return e;
                      }),
                      e
                    );
                  })();
                t.default = a;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e() {}
                  return (
                    (e.numberOfTrailingZeros = function (e) {
                      var t;
                      if (0 === e) return 32;
                      var r = 31;
                      return (
                        0 != (t = e << 16) && ((r -= 16), (e = t)),
                        0 != (t = e << 8) && ((r -= 8), (e = t)),
                        0 != (t = e << 4) && ((r -= 4), (e = t)),
                        0 != (t = e << 2) && ((r -= 2), (e = t)),
                        r - ((e << 1) >>> 31)
                      );
                    }),
                    (e.numberOfLeadingZeros = function (e) {
                      if (0 === e) return 32;
                      var t = 1;
                      return (
                        e >>> 16 == 0 && ((t += 16), (e <<= 16)),
                        e >>> 24 == 0 && ((t += 8), (e <<= 8)),
                        e >>> 28 == 0 && ((t += 4), (e <<= 4)),
                        e >>> 30 == 0 && ((t += 2), (e <<= 2)),
                        t - (e >>> 31)
                      );
                    }),
                    (e.toHexString = function (e) {
                      return e.toString(16);
                    }),
                    (e.bitCount = function (e) {
                      return (
                        (e =
                          ((e =
                            (858993459 & (e -= (e >>> 1) & 1431655765)) +
                            ((e >>> 2) & 858993459)) +
                            (e >>> 4)) &
                          252645135),
                        63 & ((e += e >>> 8) + (e >>> 16))
                      );
                    }),
                    (e.MIN_VALUE_32_BITS = -2147483648),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(65),
                  i = r(64),
                  o = r(63),
                  a = r(62),
                  s = r(0),
                  u = r(40),
                  c = r(11),
                  f = r(4),
                  l = (function () {
                    function e(e, t, r) {
                      void 0 === t && (t = 500),
                        (this.reader = e),
                        (this.timeBetweenScansMillis = t),
                        (this.hints = r);
                    }
                    return (
                      (e.prototype.getVideoInputDevices = function () {
                        return new Promise(function (e, t) {
                          navigator.mediaDevices
                            .enumerateDevices()
                            .then(function (t) {
                              for (
                                var r = new Array(), n = 0, o = 0, a = t.length;
                                o !== a;
                                o++
                              ) {
                                var s = t[o];
                                "videoinput" === s.kind &&
                                  (r.push(
                                    new i.VideoInputDevice(
                                      s.deviceId,
                                      s.label || "Video source " + n
                                    )
                                  ),
                                  n++);
                              }
                              e(r);
                            })
                            .catch(function (e) {
                              t(e);
                            });
                        });
                      }),
                      (e.prototype.decodeFromInputVideoDevice = function (
                        e,
                        t
                      ) {
                        var r;
                        this.reset(),
                          this.prepareVideoElement(t),
                          (r =
                            void 0 === e
                              ? { video: { facingMode: "environment" } }
                              : { video: { deviceId: { exact: e } } });
                        var n = this;
                        return new Promise(function (e, t) {
                          navigator.mediaDevices
                            .getUserMedia(r)
                            .then(function (r) {
                              (n.stream = r),
                                (n.videoElement.srcObject = r),
                                (n.videoPlayingEventListener = function () {
                                  n.decodeOnceWithDelay(e, t);
                                }),
                                n.videoElement.addEventListener(
                                  "playing",
                                  n.videoPlayingEventListener
                                ),
                                n.videoElement.play();
                            })
                            .catch(function (e) {
                              t(e);
                            });
                        });
                      }),
                      (e.prototype.decodeFromVideoSource = function (e, t) {
                        this.reset(), this.prepareVideoElement(t);
                        var r = this;
                        return new Promise(function (t, n) {
                          (r.videoPlayEndedEventListener = function () {
                            r.stop(), n(new s.default());
                          }),
                            r.videoElement.addEventListener(
                              "ended",
                              r.videoPlayEndedEventListener
                            ),
                            (r.videoPlayingEventListener = function () {
                              r.decodeOnceWithDelay(t, n);
                            }),
                            r.videoElement.addEventListener(
                              "playing",
                              r.videoPlayingEventListener
                            ),
                            r.videoElement.setAttribute("autoplay", "true"),
                            r.videoElement.setAttribute("src", e);
                        });
                      }),
                      (e.prototype.prepareVideoElement = function (e) {
                        void 0 === e
                          ? ((this.videoElement =
                              document.createElement("video")),
                            (this.videoElement.width = 640),
                            (this.videoElement.height = 480))
                          : (this.videoElement =
                              "string" == typeof e
                                ? this.getMediaElement(e, "video")
                                : e),
                          this.videoElement.setAttribute("autoplay", "true"),
                          this.videoElement.setAttribute("muted", "true"),
                          this.videoElement.setAttribute("playsinline", "true"),
                          this.videoElement.setAttribute("autofocus", "true");
                      }),
                      (e.prototype.getMediaElement = function (e, t) {
                        var r = document.getElementById(e);
                        if (null === r)
                          throw new u.default(
                            "element with id '" + e + "' not found"
                          );
                        if (r.nodeName.toLowerCase() !== t.toLowerCase())
                          throw new u.default(
                            "element with id '" +
                              e +
                              "' must be an " +
                              t +
                              " element"
                          );
                        return r;
                      }),
                      (e.prototype.decodeFromImage = function (e, t) {
                        var r = this;
                        if ((this.reset(), void 0 === e && void 0 === t))
                          throw new u.default(
                            "either imageElement with a src set or an url must be provided"
                          );
                        this.prepareImageElement(e);
                        var n = this;
                        return new Promise(function (e, i) {
                          if (void 0 !== t)
                            (n.imageLoadedEventListener = function () {
                              n.decodeOnce(e, i, !1, !0);
                            }),
                              n.imageElement.addEventListener(
                                "load",
                                n.imageLoadedEventListener
                              ),
                              (n.imageElement.src = t);
                          else {
                            if (!r.isImageLoaded(r.imageElement))
                              throw new u.default(
                                "either src or a loaded img should be provided"
                              );
                            n.decodeOnce(e, i, !1, !0);
                          }
                        });
                      }),
                      (e.prototype.isImageLoaded = function (e) {
                        return !!e.complete && 0 !== e.naturalWidth;
                      }),
                      (e.prototype.prepareImageElement = function (e) {
                        void 0 === e
                          ? ((this.imageElement =
                              document.createElement("img")),
                            (this.imageElement.width = 200),
                            (this.imageElement.height = 200))
                          : (this.imageElement =
                              "string" == typeof e
                                ? this.getMediaElement(e, "img")
                                : e);
                      }),
                      (e.prototype.decodeOnceWithDelay = function (e, t) {
                        this.timeoutHandler = window.setTimeout(
                          this.decodeOnce.bind(this, e, t),
                          this.timeBetweenScansMillis
                        );
                      }),
                      (e.prototype.decodeOnce = function (e, t, r, i) {
                        void 0 === r && (r = !0),
                          void 0 === i && (i = !0),
                          void 0 === this.canvasElementContext &&
                            this.prepareCaptureCanvas(),
                          this.drawImageOnCanvas(
                            this.canvasElementContext,
                            this.videoElement || this.imageElement
                          );
                        var u = new n.HTMLCanvasElementLuminanceSource(
                            this.canvasElement
                          ),
                          l = new o.default(new a.default(u));
                        try {
                          e(this.readerDecode(l));
                        } catch (n) {
                          r && n instanceof s.default
                            ? this.decodeOnceWithDelay(e, t)
                            : i &&
                              (n instanceof c.default || n instanceof f.default)
                            ? this.decodeOnceWithDelay(e, t)
                            : t(n);
                        }
                      }),
                      (e.prototype.drawImageOnCanvas = function (e, t) {
                        e.drawImage(t, 0, 0);
                      }),
                      (e.prototype.readerDecode = function (e) {
                        return this.reader.decode(e, this.hints);
                      }),
                      (e.prototype.prepareCaptureCanvas = function () {
                        var e,
                          t,
                          r = document.createElement("canvas");
                        void 0 !== this.videoElement
                          ? ((e = this.videoElement.videoWidth),
                            (t = this.videoElement.videoHeight))
                          : ((e =
                              this.imageElement.naturalWidth ||
                              this.imageElement.width),
                            (t =
                              this.imageElement.naturalHeight ||
                              this.imageElement.height)),
                          (r.style.width = e + "px"),
                          (r.style.height = t + "px"),
                          (r.width = e),
                          (r.height = t),
                          (this.canvasElement = r),
                          (this.canvasElementContext = r.getContext("2d"));
                      }),
                      (e.prototype.stop = function () {
                        void 0 !== this.timeoutHandler &&
                          (window.clearTimeout(this.timeoutHandler),
                          (this.timeoutHandler = void 0)),
                          void 0 !== this.stream &&
                            (this.stream.getTracks()[0].stop(),
                            (this.stream = void 0));
                      }),
                      (e.prototype.reset = function () {
                        this.stop(),
                          void 0 !== this.videoPlayEndedEventListener &&
                            void 0 !== this.videoElement &&
                            this.videoElement.removeEventListener(
                              "ended",
                              this.videoPlayEndedEventListener
                            ),
                          void 0 !== this.videoPlayingEventListener &&
                            void 0 !== this.videoElement &&
                            this.videoElement.removeEventListener(
                              "playing",
                              this.videoPlayingEventListener
                            ),
                          void 0 !== this.videoElement &&
                            ((this.videoElement.srcObject = void 0),
                            this.videoElement.removeAttribute("src"),
                            (this.videoElement = void 0)),
                          void 0 !== this.videoPlayEndedEventListener &&
                            void 0 !== this.imageElement &&
                            this.imageElement.removeEventListener(
                              "load",
                              this.imageLoadedEventListener
                            ),
                          void 0 !== this.imageElement &&
                            ((this.imageElement.src = void 0),
                            this.imageElement.removeAttribute("src"),
                            (this.imageElement = void 0)),
                          (this.canvasElementContext = void 0),
                          (this.canvasElement = void 0);
                      }),
                      e
                    );
                  })();
                t.BrowserCodeReader = l;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(2),
                  a = r(48),
                  s = r(47),
                  u = r(46),
                  c = r(75),
                  f = r(0),
                  l = (function (e) {
                    function t(t) {
                      var r = e.call(this) || this;
                      r.readers = [];
                      var n = t ? t.get(2) : null,
                        i = t && void 0 !== t.get(6);
                      return (
                        n &&
                          (n.includes(o.default.EAN_13) &&
                            r.readers.push(new c.default(t)),
                          n.includes(o.default.CODE_39) &&
                            r.readers.push(new a.default(i)),
                          n.includes(o.default.CODE_128) &&
                            r.readers.push(new s.default()),
                          n.includes(o.default.ITF) &&
                            r.readers.push(new u.default())),
                        0 === r.readers.length &&
                          (r.readers.push(new a.default()),
                          r.readers.push(new c.default(t)),
                          r.readers.push(new s.default()),
                          r.readers.push(new u.default())),
                        r
                      );
                    }
                    return (
                      i(t, e),
                      (t.prototype.decodeRow = function (e, t, r) {
                        for (var n = 0; n < this.readers.length; n++)
                          try {
                            return this.readers[n].decodeRow(e, t, r);
                          } catch (e) {}
                        throw new f.default();
                      }),
                      (t.prototype.reset = function () {
                        this.readers.forEach(function (e) {
                          return e.reset();
                        });
                      }),
                      t
                    );
                  })(r(9).default);
                t.default = l;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return i(t, e), t;
                })(r(5).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(12),
                  i = (function () {
                    function e() {
                      this.maskPattern = -1;
                    }
                    return (
                      (e.prototype.getMode = function () {
                        return this.mode;
                      }),
                      (e.prototype.getECLevel = function () {
                        return this.ecLevel;
                      }),
                      (e.prototype.getVersion = function () {
                        return this.version;
                      }),
                      (e.prototype.getMaskPattern = function () {
                        return this.maskPattern;
                      }),
                      (e.prototype.getMatrix = function () {
                        return this.matrix;
                      }),
                      (e.prototype.toString = function () {
                        var e = new n.default();
                        return (
                          e.append("<<\n"),
                          e.append(" mode: "),
                          e.append(this.mode ? this.mode.toString() : "null"),
                          e.append("\n ecLevel: "),
                          e.append(
                            this.ecLevel ? this.ecLevel.toString() : "null"
                          ),
                          e.append("\n version: "),
                          e.append(
                            this.version ? this.version.toString() : "null"
                          ),
                          e.append("\n maskPattern: "),
                          e.append(this.maskPattern.toString()),
                          this.matrix
                            ? (e.append("\n matrix:\n"),
                              e.append(this.matrix.toString()))
                            : e.append("\n matrix: null\n"),
                          e.append(">>\n"),
                          e.toString()
                        );
                      }),
                      (e.prototype.setMode = function (e) {
                        this.mode = e;
                      }),
                      (e.prototype.setECLevel = function (e) {
                        this.ecLevel = e;
                      }),
                      (e.prototype.setVersion = function (e) {
                        this.version = e;
                      }),
                      (e.prototype.setMaskPattern = function (e) {
                        this.maskPattern = e;
                      }),
                      (e.prototype.setMatrix = function (e) {
                        this.matrix = e;
                      }),
                      (e.isValidMaskPattern = function (t) {
                        return t >= 0 && t < e.NUM_MASK_PATTERNS;
                      }),
                      (e.NUM_MASK_PATTERNS = 8),
                      e
                    );
                  })();
                t.default = i;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(21),
                  i = r(14),
                  o = r(15),
                  a = r(13),
                  s = r(50),
                  u = r(54),
                  c = r(37),
                  f = r(49),
                  l = r(79),
                  d = r(28),
                  h = r(78),
                  p = r(34),
                  v = r(77),
                  g = r(27),
                  m = (function () {
                    function e() {}
                    return (
                      (e.calculateMaskPenalty = function (e) {
                        return (
                          f.default.applyMaskPenaltyRule1(e) +
                          f.default.applyMaskPenaltyRule2(e) +
                          f.default.applyMaskPenaltyRule3(e) +
                          f.default.applyMaskPenaltyRule4(e)
                        );
                      }),
                      (e.encode = function (t, r, a) {
                        void 0 === a && (a = null);
                        var s = e.DEFAULT_BYTE_MODE_ENCODING,
                          f =
                            null !== a &&
                            void 0 !== a.get(n.default.CHARACTER_SET);
                        f && (s = a.get(n.default.CHARACTER_SET).toString());
                        var p = this.chooseMode(t, s),
                          v = new i.default();
                        if (
                          p === u.default.BYTE &&
                          (f || e.DEFAULT_BYTE_MODE_ENCODING !== s)
                        ) {
                          var m = o.default.getCharacterSetECIByName(s);
                          void 0 !== m && this.appendECI(m, v);
                        }
                        this.appendModeInfo(p, v);
                        var y,
                          _ = new i.default();
                        if (
                          (this.appendBytes(t, p, _, s),
                          null !== a && void 0 !== a.get(n.default.QR_VERSION))
                        ) {
                          var w = Number.parseInt(
                            a.get(n.default.QR_VERSION).toString(),
                            10
                          );
                          y = c.default.getVersionForNumber(w);
                          var C = this.calculateBitsNeeded(p, v, _, y);
                          if (!this.willFit(C, y, r))
                            throw new g.default(
                              "Data too big for requested version"
                            );
                        } else y = this.recommendVersion(r, p, v, _);
                        var E = new i.default();
                        E.appendBitArray(v);
                        var S =
                          p === u.default.BYTE ? _.getSizeInBytes() : t.length;
                        this.appendLengthInfo(S, y, p, E), E.appendBitArray(_);
                        var b = y.getECBlocksForLevel(r),
                          T = y.getTotalCodewords() - b.getTotalECCodewords();
                        this.terminateBits(T, E);
                        var A = this.interleaveWithECBytes(
                            E,
                            y.getTotalCodewords(),
                            T,
                            b.getNumBlocks()
                          ),
                          O = new d.default();
                        O.setECLevel(r), O.setMode(p), O.setVersion(y);
                        var I = y.getDimensionForVersion(),
                          R = new l.default(I, I),
                          P = this.chooseMaskPattern(A, r, y, R);
                        return (
                          O.setMaskPattern(P),
                          h.default.buildMatrix(A, r, y, P, R),
                          O.setMatrix(R),
                          O
                        );
                      }),
                      (e.recommendVersion = function (e, t, r, n) {
                        var i = this.calculateBitsNeeded(
                            t,
                            r,
                            n,
                            c.default.getVersionForNumber(1)
                          ),
                          o = this.chooseVersion(i, e),
                          a = this.calculateBitsNeeded(t, r, n, o);
                        return this.chooseVersion(a, e);
                      }),
                      (e.calculateBitsNeeded = function (e, t, r, n) {
                        return (
                          t.getSize() + e.getCharacterCountBits(n) + r.getSize()
                        );
                      }),
                      (e.getAlphanumericCode = function (t) {
                        return t < e.ALPHANUMERIC_TABLE.length
                          ? e.ALPHANUMERIC_TABLE[t]
                          : -1;
                      }),
                      (e.chooseMode = function (t, r) {
                        if (
                          (void 0 === r && (r = null),
                          o.default.SJIS.getName() === r &&
                            this.isOnlyDoubleByteKanji(t))
                        )
                          return u.default.KANJI;
                        for (
                          var n = !1, i = !1, a = 0, s = t.length;
                          a < s;
                          ++a
                        ) {
                          var c = t.charAt(a);
                          if (e.isDigit(c)) n = !0;
                          else {
                            if (
                              -1 === this.getAlphanumericCode(c.charCodeAt(0))
                            )
                              return u.default.BYTE;
                            i = !0;
                          }
                        }
                        return i
                          ? u.default.ALPHANUMERIC
                          : n
                          ? u.default.NUMERIC
                          : u.default.BYTE;
                      }),
                      (e.isOnlyDoubleByteKanji = function (e) {
                        var t;
                        try {
                          t = p.default.encode(e, o.default.SJIS);
                        } catch (e) {
                          return !1;
                        }
                        var r = t.length;
                        if (r % 2 != 0) return !1;
                        for (var n = 0; n < r; n += 2) {
                          var i = 255 & t[n];
                          if ((i < 129 || i > 159) && (i < 224 || i > 235))
                            return !1;
                        }
                        return !0;
                      }),
                      (e.chooseMaskPattern = function (e, t, r, n) {
                        for (
                          var i = Number.MAX_SAFE_INTEGER, o = -1, a = 0;
                          a < d.default.NUM_MASK_PATTERNS;
                          a++
                        ) {
                          h.default.buildMatrix(e, t, r, a, n);
                          var s = this.calculateMaskPenalty(n);
                          s < i && ((i = s), (o = a));
                        }
                        return o;
                      }),
                      (e.chooseVersion = function (t, r) {
                        for (var n = 1; n <= 40; n++) {
                          var i = c.default.getVersionForNumber(n);
                          if (e.willFit(t, i, r)) return i;
                        }
                        throw new g.default("Data too big");
                      }),
                      (e.willFit = function (e, t, r) {
                        return (
                          t.getTotalCodewords() -
                            t.getECBlocksForLevel(r).getTotalECCodewords() >=
                          (e + 7) / 8
                        );
                      }),
                      (e.terminateBits = function (e, t) {
                        var r = 8 * e;
                        if (t.getSize() > r)
                          throw new g.default(
                            "data bits cannot fit in the QR Code" +
                              t.getSize() +
                              " > " +
                              r
                          );
                        for (var n = 0; n < 4 && t.getSize() < r; ++n)
                          t.appendBit(!1);
                        var i = 7 & t.getSize();
                        if (i > 0) for (n = i; n < 8; n++) t.appendBit(!1);
                        var o = e - t.getSizeInBytes();
                        for (n = 0; n < o; ++n)
                          t.appendBits(0 == (1 & n) ? 236 : 17, 8);
                        if (t.getSize() !== r)
                          throw new g.default(
                            "Bits size does not equal capacity"
                          );
                      }),
                      (e.getNumDataBytesAndNumECBytesForBlockID = function (
                        e,
                        t,
                        r,
                        n,
                        i,
                        o
                      ) {
                        if (n >= r) throw new g.default("Block ID too large");
                        var a = e % r,
                          s = r - a,
                          u = Math.floor(e / r),
                          c = u + 1,
                          f = Math.floor(t / r),
                          l = f + 1,
                          d = u - f,
                          h = c - l;
                        if (d !== h) throw new g.default("EC bytes mismatch");
                        if (r !== s + a)
                          throw new g.default("RS blocks mismatch");
                        if (e !== (f + d) * s + (l + h) * a)
                          throw new g.default("Total bytes mismatch");
                        n < s
                          ? ((i[0] = f), (o[0] = d))
                          : ((i[0] = l), (o[0] = h));
                      }),
                      (e.interleaveWithECBytes = function (t, r, n, o) {
                        if (t.getSizeInBytes() !== n)
                          throw new g.default(
                            "Number of bits and data bytes does not match"
                          );
                        for (
                          var a = 0, s = 0, u = 0, c = new Array(), f = 0;
                          f < o;
                          ++f
                        ) {
                          var l = new Int32Array(1),
                            d = new Int32Array(1);
                          e.getNumDataBytesAndNumECBytesForBlockID(
                            r,
                            n,
                            o,
                            f,
                            l,
                            d
                          );
                          var h = l[0],
                            p = new Uint8Array(h);
                          t.toBytes(8 * a, p, 0, h);
                          var m = e.generateECBytes(p, d[0]);
                          c.push(new v.default(p, m)),
                            (s = Math.max(s, h)),
                            (u = Math.max(u, m.length)),
                            (a += l[0]);
                        }
                        if (n !== a)
                          throw new g.default(
                            "Data bytes does not match offset"
                          );
                        var y = new i.default();
                        for (f = 0; f < s; ++f)
                          for (var _ = 0, w = c; _ < w.length; _++)
                            f < (p = w[_].getDataBytes()).length &&
                              y.appendBits(p[f], 8);
                        for (f = 0; f < u; ++f)
                          for (var C = 0, E = c; C < E.length; C++)
                            f < (m = E[C].getErrorCorrectionBytes()).length &&
                              y.appendBits(m[f], 8);
                        if (r !== y.getSizeInBytes())
                          throw new g.default(
                            "Interleaving error: " +
                              r +
                              " and " +
                              y.getSizeInBytes() +
                              " differ."
                          );
                        return y;
                      }),
                      (e.generateECBytes = function (e, t) {
                        for (
                          var r = e.length, n = new Int32Array(r + t), i = 0;
                          i < r;
                          i++
                        )
                          n[i] = 255 & e[i];
                        new s.default(a.default.QR_CODE_FIELD_256).encode(n, t);
                        var o = new Uint8Array(t);
                        for (i = 0; i < t; i++) o[i] = n[r + i];
                        return o;
                      }),
                      (e.appendModeInfo = function (e, t) {
                        t.appendBits(e.getBits(), 4);
                      }),
                      (e.appendLengthInfo = function (e, t, r, n) {
                        var i = r.getCharacterCountBits(t);
                        if (e >= 1 << i)
                          throw new g.default(
                            e + " is bigger than " + ((1 << i) - 1)
                          );
                        n.appendBits(e, i);
                      }),
                      (e.appendBytes = function (t, r, n, i) {
                        switch (r) {
                          case u.default.NUMERIC:
                            e.appendNumericBytes(t, n);
                            break;
                          case u.default.ALPHANUMERIC:
                            e.appendAlphanumericBytes(t, n);
                            break;
                          case u.default.BYTE:
                            e.append8BitBytes(t, n, i);
                            break;
                          case u.default.KANJI:
                            e.appendKanjiBytes(t, n);
                            break;
                          default:
                            throw new g.default("Invalid mode: " + r);
                        }
                      }),
                      (e.getDigit = function (e) {
                        return e.charCodeAt(0) - 48;
                      }),
                      (e.isDigit = function (t) {
                        var r = e.getDigit(t);
                        return r >= 0 && r <= 9;
                      }),
                      (e.appendNumericBytes = function (t, r) {
                        for (var n = t.length, i = 0; i < n; ) {
                          var o = e.getDigit(t.charAt(i));
                          if (i + 2 < n) {
                            var a = e.getDigit(t.charAt(i + 1)),
                              s = e.getDigit(t.charAt(i + 2));
                            r.appendBits(100 * o + 10 * a + s, 10), (i += 3);
                          } else
                            i + 1 < n
                              ? ((a = e.getDigit(t.charAt(i + 1))),
                                r.appendBits(10 * o + a, 7),
                                (i += 2))
                              : (r.appendBits(o, 4), i++);
                        }
                      }),
                      (e.appendAlphanumericBytes = function (t, r) {
                        for (var n = t.length, i = 0; i < n; ) {
                          var o = e.getAlphanumericCode(t.charCodeAt(i));
                          if (-1 === o) throw new g.default();
                          if (i + 1 < n) {
                            var a = e.getAlphanumericCode(t.charCodeAt(i + 1));
                            if (-1 === a) throw new g.default();
                            r.appendBits(45 * o + a, 11), (i += 2);
                          } else r.appendBits(o, 6), i++;
                        }
                      }),
                      (e.append8BitBytes = function (e, t, r) {
                        var n;
                        try {
                          n = p.default.encode(e, r);
                        } catch (e) {
                          throw new g.default(e);
                        }
                        for (var i = 0, o = n.length; i !== o; i++) {
                          var a = n[i];
                          t.appendBits(a, 8);
                        }
                      }),
                      (e.appendKanjiBytes = function (e, t) {
                        var r;
                        try {
                          r = p.default.encode(e, o.default.SJIS);
                        } catch (e) {
                          throw new g.default(e);
                        }
                        for (var n = r.length, i = 0; i < n; i += 2) {
                          var a =
                              (((255 & r[i]) << 8) & 4294967295) |
                              (255 & r[i + 1]),
                            s = -1;
                          if (
                            (a >= 33088 && a <= 40956
                              ? (s = a - 33088)
                              : a >= 57408 && a <= 60351 && (s = a - 49472),
                            -1 === s)
                          )
                            throw new g.default("Invalid byte sequence");
                          var u = 192 * (s >> 8) + (255 & s);
                          t.appendBits(u, 13);
                        }
                      }),
                      (e.appendECI = function (e, t) {
                        t.appendBits(u.default.ECI.getBits(), 4),
                          t.appendBits(e.getValue(), 8);
                      }),
                      (e.ALPHANUMERIC_TABLE = Int32Array.from([
                        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                        -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1,
                        39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                        44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                        31, 32, 33, 34, 35, -1, -1, -1, -1, -1,
                      ])),
                      (e.DEFAULT_BYTE_MODE_ENCODING = o.default.UTF8.getName()),
                      e
                    );
                  })();
                t.default = m;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(86),
                  i = r(8),
                  o = r(2),
                  a = r(10),
                  s = r(6),
                  u = r(81),
                  c = r(7),
                  f = r(0),
                  l = (function () {
                    function e() {
                      this.decoder = new n.default();
                    }
                    return (
                      (e.prototype.decode = function (t, r) {
                        var n, s;
                        if (
                          (void 0 === r && (r = null), null != r && r.has(1))
                        ) {
                          var f = e.extractPureBits(t.getBlackMatrix());
                          (n = this.decoder.decode(f)), (s = e.NO_POINTS);
                        } else {
                          var l = new u.default(t.getBlackMatrix()).detect();
                          (n = this.decoder.decode(l.getBits())),
                            (s = l.getPoints());
                        }
                        var d = n.getRawBytes(),
                          h = new i.default(
                            n.getText(),
                            d,
                            8 * d.length,
                            s,
                            o.default.DATA_MATRIX,
                            c.default.currentTimeMillis()
                          ),
                          p = n.getByteSegments();
                        null != p && h.putMetadata(a.default.BYTE_SEGMENTS, p);
                        var v = n.getECLevel();
                        return (
                          null != v &&
                            h.putMetadata(a.default.ERROR_CORRECTION_LEVEL, v),
                          h
                        );
                      }),
                      (e.prototype.reset = function () {}),
                      (e.extractPureBits = function (e) {
                        var t = e.getTopLeftOnBit(),
                          r = e.getBottomRightOnBit();
                        if (null == t || null == r) throw new f.default();
                        var n = this.moduleSize(t, e),
                          i = t[1],
                          o = r[1],
                          a = t[0],
                          u = (r[0] - a + 1) / n,
                          c = (o - i + 1) / n;
                        if (u <= 0 || c <= 0) throw new f.default();
                        var l = n / 2;
                        (i += l), (a += l);
                        for (var d = new s.default(u, c), h = 0; h < c; h++)
                          for (var p = i + h * n, v = 0; v < u; v++)
                            e.get(a + v * n, p) && d.set(v, h);
                        return d;
                      }),
                      (e.moduleSize = function (e, t) {
                        for (
                          var r = t.getWidth(), n = e[0], i = e[1];
                          n < r && t.get(n, i);

                        )
                          n++;
                        if (n === r) throw new f.default();
                        var o = n - e[0];
                        if (0 === o) throw new f.default();
                        return o;
                      }),
                      (e.NO_POINTS = []),
                      e
                    );
                  })();
                t.default = l;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e(e, t, r, n, i, o, a, s, u) {
                    (this.a11 = e),
                      (this.a21 = t),
                      (this.a31 = r),
                      (this.a12 = n),
                      (this.a22 = i),
                      (this.a32 = o),
                      (this.a13 = a),
                      (this.a23 = s),
                      (this.a33 = u);
                  }
                  return (
                    (e.quadrilateralToQuadrilateral = function (
                      t,
                      r,
                      n,
                      i,
                      o,
                      a,
                      s,
                      u,
                      c,
                      f,
                      l,
                      d,
                      h,
                      p,
                      v,
                      g
                    ) {
                      var m = e.quadrilateralToSquare(t, r, n, i, o, a, s, u);
                      return e
                        .squareToQuadrilateral(c, f, l, d, h, p, v, g)
                        .times(m);
                    }),
                    (e.prototype.transformPoints = function (e) {
                      for (
                        var t = e.length,
                          r = this.a11,
                          n = this.a12,
                          i = this.a13,
                          o = this.a21,
                          a = this.a22,
                          s = this.a23,
                          u = this.a31,
                          c = this.a32,
                          f = this.a33,
                          l = 0;
                        l < t;
                        l += 2
                      ) {
                        var d = e[l],
                          h = e[l + 1],
                          p = i * d + s * h + f;
                        (e[l] = (r * d + o * h + u) / p),
                          (e[l + 1] = (n * d + a * h + c) / p);
                      }
                    }),
                    (e.prototype.transformPointsWithValues = function (e, t) {
                      for (
                        var r = this.a11,
                          n = this.a12,
                          i = this.a13,
                          o = this.a21,
                          a = this.a22,
                          s = this.a23,
                          u = this.a31,
                          c = this.a32,
                          f = this.a33,
                          l = e.length,
                          d = 0;
                        d < l;
                        d++
                      ) {
                        var h = e[d],
                          p = t[d],
                          v = i * h + s * p + f;
                        (e[d] = (r * h + o * p + u) / v),
                          (t[d] = (n * h + a * p + c) / v);
                      }
                    }),
                    (e.squareToQuadrilateral = function (
                      t,
                      r,
                      n,
                      i,
                      o,
                      a,
                      s,
                      u
                    ) {
                      var c = t - n + o - s,
                        f = r - i + a - u;
                      if (0 === c && 0 === f)
                        return new e(n - t, o - n, t, i - r, a - i, r, 0, 0, 1);
                      var l = n - o,
                        d = s - o,
                        h = i - a,
                        p = u - a,
                        v = l * p - d * h,
                        g = (c * p - d * f) / v,
                        m = (l * f - c * h) / v;
                      return new e(
                        n - t + g * n,
                        s - t + m * s,
                        t,
                        i - r + g * i,
                        u - r + m * u,
                        r,
                        g,
                        m,
                        1
                      );
                    }),
                    (e.quadrilateralToSquare = function (
                      t,
                      r,
                      n,
                      i,
                      o,
                      a,
                      s,
                      u
                    ) {
                      return e
                        .squareToQuadrilateral(t, r, n, i, o, a, s, u)
                        .buildAdjoint();
                    }),
                    (e.prototype.buildAdjoint = function () {
                      return new e(
                        this.a22 * this.a33 - this.a23 * this.a32,
                        this.a23 * this.a31 - this.a21 * this.a33,
                        this.a21 * this.a32 - this.a22 * this.a31,
                        this.a13 * this.a32 - this.a12 * this.a33,
                        this.a11 * this.a33 - this.a13 * this.a31,
                        this.a12 * this.a31 - this.a11 * this.a32,
                        this.a12 * this.a23 - this.a13 * this.a22,
                        this.a13 * this.a21 - this.a11 * this.a23,
                        this.a11 * this.a22 - this.a12 * this.a21
                      );
                    }),
                    (e.prototype.times = function (t) {
                      return new e(
                        this.a11 * t.a11 + this.a21 * t.a12 + this.a31 * t.a13,
                        this.a11 * t.a21 + this.a21 * t.a22 + this.a31 * t.a23,
                        this.a11 * t.a31 + this.a21 * t.a32 + this.a31 * t.a33,
                        this.a12 * t.a11 + this.a22 * t.a12 + this.a32 * t.a13,
                        this.a12 * t.a21 + this.a22 * t.a22 + this.a32 * t.a23,
                        this.a12 * t.a31 + this.a22 * t.a32 + this.a32 * t.a33,
                        this.a13 * t.a11 + this.a23 * t.a12 + this.a33 * t.a13,
                        this.a13 * t.a21 + this.a23 * t.a22 + this.a33 * t.a23,
                        this.a13 * t.a31 + this.a23 * t.a32 + this.a33 * t.a33
                      );
                    }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(53),
                  i = (function () {
                    function e() {}
                    return (
                      (e.setGridSampler = function (t) {
                        e.gridSampler = t;
                      }),
                      (e.getInstance = function () {
                        return e.gridSampler;
                      }),
                      (e.gridSampler = new n.default()),
                      e
                    );
                  })();
                t.default = i;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e(e, t) {
                    (this.bits = e), (this.points = t);
                  }
                  return (
                    (e.prototype.getBits = function () {
                      return this.bits;
                    }),
                    (e.prototype.getPoints = function () {
                      return this.points;
                    }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(42),
                  i = r(15),
                  o = (function () {
                    function e() {}
                    return (
                      (e.decode = function (e, t) {
                        var r = this.encodingName(t);
                        return "undefined" == typeof TextDecoder
                          ? this.decodeFallback(e, r)
                          : new TextDecoder(r).decode(e);
                      }),
                      (e.encode = function (t, r) {
                        return e.isBrowser()
                          ? "undefined" == typeof TextEncoder
                            ? this.encodeFallback(t)
                            : new TextEncoder().encode(t)
                          : new TextEncoder(this.encodingName(r), {
                              NONSTANDARD_allowLegacyEncoding: !0,
                            }).encode(t);
                      }),
                      (e.isBrowser = function () {
                        return (
                          "undefined" != typeof window &&
                          "[object Window]" === {}.toString.call(window)
                        );
                      }),
                      (e.encodingName = function (e) {
                        return "string" == typeof e ? e : e.getName();
                      }),
                      (e.encodingCharacterSet = function (e) {
                        return i.default.getCharacterSetECIByName(
                          this.encodingName(e)
                        );
                      }),
                      (e.decodeFallback = function (e, t) {
                        var r = this.encodingCharacterSet(t);
                        if (
                          r.equals(i.default.UTF8) ||
                          r.equals(i.default.ISO8859_1) ||
                          r.equals(i.default.ASCII)
                        ) {
                          for (var o = "", a = 0, s = e.length; a < s; a++) {
                            var u = e[a].toString(16);
                            u.length < 2 && (u = "0" + u), (o += "%" + u);
                          }
                          return decodeURIComponent(o);
                        }
                        if (r.equals(i.default.UnicodeBigUnmarked))
                          return String.fromCharCode.apply(
                            null,
                            new Uint16Array(e.buffer)
                          );
                        throw new n.default(
                          "Encoding " +
                            this.encodingName(t) +
                            " not supported by fallback."
                        );
                      }),
                      (e.encodeFallback = function (e) {
                        for (
                          var t = btoa(unescape(encodeURIComponent(e))).split(
                              ""
                            ),
                            r = [],
                            n = 0;
                          n < t.length;
                          n++
                        )
                          r.push(t[n].charCodeAt(0));
                        return new Uint8Array(r);
                      }),
                      e
                    );
                  })();
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e(e, t, r, n, i, o) {
                    void 0 === i && (i = -1),
                      void 0 === o && (o = -1),
                      (this.rawBytes = e),
                      (this.text = t),
                      (this.byteSegments = r),
                      (this.ecLevel = n),
                      (this.structuredAppendSequenceNumber = i),
                      (this.structuredAppendParity = o),
                      (this.numBits = null == e ? 0 : 8 * e.length);
                  }
                  return (
                    (e.prototype.getRawBytes = function () {
                      return this.rawBytes;
                    }),
                    (e.prototype.getNumBits = function () {
                      return this.numBits;
                    }),
                    (e.prototype.setNumBits = function (e) {
                      this.numBits = e;
                    }),
                    (e.prototype.getText = function () {
                      return this.text;
                    }),
                    (e.prototype.getByteSegments = function () {
                      return this.byteSegments;
                    }),
                    (e.prototype.getECLevel = function () {
                      return this.ecLevel;
                    }),
                    (e.prototype.getErrorsCorrected = function () {
                      return this.errorsCorrected;
                    }),
                    (e.prototype.setErrorsCorrected = function (e) {
                      this.errorsCorrected = e;
                    }),
                    (e.prototype.getErasures = function () {
                      return this.erasures;
                    }),
                    (e.prototype.setErasures = function (e) {
                      this.erasures = e;
                    }),
                    (e.prototype.getOther = function () {
                      return this.other;
                    }),
                    (e.prototype.setOther = function (e) {
                      this.other = e;
                    }),
                    (e.prototype.hasStructuredAppend = function () {
                      return (
                        this.structuredAppendParity >= 0 &&
                        this.structuredAppendSequenceNumber >= 0
                      );
                    }),
                    (e.prototype.getStructuredAppendParity = function () {
                      return this.structuredAppendParity;
                    }),
                    (e.prototype.getStructuredAppendSequenceNumber =
                      function () {
                        return this.structuredAppendSequenceNumber;
                      }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(1),
                  i = (function () {
                    function e(e) {
                      (this.bytes = e),
                        (this.byteOffset = 0),
                        (this.bitOffset = 0);
                    }
                    return (
                      (e.prototype.getBitOffset = function () {
                        return this.bitOffset;
                      }),
                      (e.prototype.getByteOffset = function () {
                        return this.byteOffset;
                      }),
                      (e.prototype.readBits = function (e) {
                        if (e < 1 || e > 32 || e > this.available())
                          throw new n.default("" + e);
                        var t = 0,
                          r = this.bitOffset,
                          i = this.byteOffset,
                          o = this.bytes;
                        if (r > 0) {
                          var a = 8 - r,
                            s = e < a ? e : a,
                            u = (255 >> (8 - s)) << (c = a - s);
                          (t = (o[i] & u) >> c),
                            (e -= s),
                            8 === (r += s) && ((r = 0), i++);
                        }
                        if (e > 0) {
                          for (; e >= 8; )
                            (t = (t << 8) | (255 & o[i])), i++, (e -= 8);
                          var c;
                          e > 0 &&
                            ((u = (255 >> (c = 8 - e)) << c),
                            (t = (t << e) | ((o[i] & u) >> c)),
                            (r += e));
                        }
                        return (this.bitOffset = r), (this.byteOffset = i), t;
                      }),
                      (e.prototype.available = function () {
                        return (
                          8 * (this.bytes.length - this.byteOffset) -
                          this.bitOffset
                        );
                      }),
                      e
                    );
                  })();
                t.default = i;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(6),
                  i = r(57),
                  o = r(98),
                  a = r(97),
                  s = r(4),
                  u = r(1),
                  c = (function () {
                    function e(e, t) {
                      for (var r = [], n = 2; n < arguments.length; n++)
                        r[n - 2] = arguments[n];
                      (this.versionNumber = e),
                        (this.alignmentPatternCenters = t),
                        (this.ecBlocks = r);
                      for (
                        var i = 0,
                          o = r[0].getECCodewordsPerBlock(),
                          a = 0,
                          s = r[0].getECBlocks();
                        a < s.length;
                        a++
                      ) {
                        var u = s[a];
                        i += u.getCount() * (u.getDataCodewords() + o);
                      }
                      this.totalCodewords = i;
                    }
                    return (
                      (e.prototype.getVersionNumber = function () {
                        return this.versionNumber;
                      }),
                      (e.prototype.getAlignmentPatternCenters = function () {
                        return this.alignmentPatternCenters;
                      }),
                      (e.prototype.getTotalCodewords = function () {
                        return this.totalCodewords;
                      }),
                      (e.prototype.getDimensionForVersion = function () {
                        return 17 + 4 * this.versionNumber;
                      }),
                      (e.prototype.getECBlocksForLevel = function (e) {
                        return this.ecBlocks[e.getValue()];
                      }),
                      (e.getProvisionalVersionForDimension = function (e) {
                        if (e % 4 != 1) throw new s.default();
                        try {
                          return this.getVersionForNumber((e - 17) / 4);
                        } catch (e) {
                          throw new s.default();
                        }
                      }),
                      (e.getVersionForNumber = function (t) {
                        if (t < 1 || t > 40) throw new u.default();
                        return e.VERSIONS[t - 1];
                      }),
                      (e.decodeVersionInformation = function (t) {
                        for (
                          var r = Number.MAX_SAFE_INTEGER, n = 0, o = 0;
                          o < e.VERSION_DECODE_INFO.length;
                          o++
                        ) {
                          var a = e.VERSION_DECODE_INFO[o];
                          if (a === t) return e.getVersionForNumber(o + 7);
                          var s = i.default.numBitsDiffering(t, a);
                          s < r && ((n = o + 7), (r = s));
                        }
                        return r <= 3 ? e.getVersionForNumber(n) : null;
                      }),
                      (e.prototype.buildFunctionPattern = function () {
                        var e = this.getDimensionForVersion(),
                          t = new n.default(e);
                        t.setRegion(0, 0, 9, 9),
                          t.setRegion(e - 8, 0, 8, 9),
                          t.setRegion(0, e - 8, 9, 8);
                        for (
                          var r = this.alignmentPatternCenters.length, i = 0;
                          i < r;
                          i++
                        )
                          for (
                            var o = this.alignmentPatternCenters[i] - 2, a = 0;
                            a < r;
                            a++
                          )
                            (0 === i && (0 === a || a === r - 1)) ||
                              (i === r - 1 && 0 === a) ||
                              t.setRegion(
                                this.alignmentPatternCenters[a] - 2,
                                o,
                                5,
                                5
                              );
                        return (
                          t.setRegion(6, 9, 1, e - 17),
                          t.setRegion(9, 6, e - 17, 1),
                          this.versionNumber > 6 &&
                            (t.setRegion(e - 11, 0, 3, 6),
                            t.setRegion(0, e - 11, 6, 3)),
                          t
                        );
                      }),
                      (e.prototype.toString = function () {
                        return "" + this.versionNumber;
                      }),
                      (e.VERSION_DECODE_INFO = Int32Array.from([
                        31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893,
                        63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361,
                        96236, 102084, 102881, 110507, 110734, 117786, 119615,
                        126325, 127568, 133589, 136944, 141498, 145311, 150283,
                        152622, 158308, 161089, 167017,
                      ])),
                      (e.VERSIONS = [
                        new e(
                          1,
                          new Int32Array(0),
                          new o.default(7, new a.default(1, 19)),
                          new o.default(10, new a.default(1, 16)),
                          new o.default(13, new a.default(1, 13)),
                          new o.default(17, new a.default(1, 9))
                        ),
                        new e(
                          2,
                          Int32Array.from([6, 18]),
                          new o.default(10, new a.default(1, 34)),
                          new o.default(16, new a.default(1, 28)),
                          new o.default(22, new a.default(1, 22)),
                          new o.default(28, new a.default(1, 16))
                        ),
                        new e(
                          3,
                          Int32Array.from([6, 22]),
                          new o.default(15, new a.default(1, 55)),
                          new o.default(26, new a.default(1, 44)),
                          new o.default(18, new a.default(2, 17)),
                          new o.default(22, new a.default(2, 13))
                        ),
                        new e(
                          4,
                          Int32Array.from([6, 26]),
                          new o.default(20, new a.default(1, 80)),
                          new o.default(18, new a.default(2, 32)),
                          new o.default(26, new a.default(2, 24)),
                          new o.default(16, new a.default(4, 9))
                        ),
                        new e(
                          5,
                          Int32Array.from([6, 30]),
                          new o.default(26, new a.default(1, 108)),
                          new o.default(24, new a.default(2, 43)),
                          new o.default(
                            18,
                            new a.default(2, 15),
                            new a.default(2, 16)
                          ),
                          new o.default(
                            22,
                            new a.default(2, 11),
                            new a.default(2, 12)
                          )
                        ),
                        new e(
                          6,
                          Int32Array.from([6, 34]),
                          new o.default(18, new a.default(2, 68)),
                          new o.default(16, new a.default(4, 27)),
                          new o.default(24, new a.default(4, 19)),
                          new o.default(28, new a.default(4, 15))
                        ),
                        new e(
                          7,
                          Int32Array.from([6, 22, 38]),
                          new o.default(20, new a.default(2, 78)),
                          new o.default(18, new a.default(4, 31)),
                          new o.default(
                            18,
                            new a.default(2, 14),
                            new a.default(4, 15)
                          ),
                          new o.default(
                            26,
                            new a.default(4, 13),
                            new a.default(1, 14)
                          )
                        ),
                        new e(
                          8,
                          Int32Array.from([6, 24, 42]),
                          new o.default(24, new a.default(2, 97)),
                          new o.default(
                            22,
                            new a.default(2, 38),
                            new a.default(2, 39)
                          ),
                          new o.default(
                            22,
                            new a.default(4, 18),
                            new a.default(2, 19)
                          ),
                          new o.default(
                            26,
                            new a.default(4, 14),
                            new a.default(2, 15)
                          )
                        ),
                        new e(
                          9,
                          Int32Array.from([6, 26, 46]),
                          new o.default(30, new a.default(2, 116)),
                          new o.default(
                            22,
                            new a.default(3, 36),
                            new a.default(2, 37)
                          ),
                          new o.default(
                            20,
                            new a.default(4, 16),
                            new a.default(4, 17)
                          ),
                          new o.default(
                            24,
                            new a.default(4, 12),
                            new a.default(4, 13)
                          )
                        ),
                        new e(
                          10,
                          Int32Array.from([6, 28, 50]),
                          new o.default(
                            18,
                            new a.default(2, 68),
                            new a.default(2, 69)
                          ),
                          new o.default(
                            26,
                            new a.default(4, 43),
                            new a.default(1, 44)
                          ),
                          new o.default(
                            24,
                            new a.default(6, 19),
                            new a.default(2, 20)
                          ),
                          new o.default(
                            28,
                            new a.default(6, 15),
                            new a.default(2, 16)
                          )
                        ),
                        new e(
                          11,
                          Int32Array.from([6, 30, 54]),
                          new o.default(20, new a.default(4, 81)),
                          new o.default(
                            30,
                            new a.default(1, 50),
                            new a.default(4, 51)
                          ),
                          new o.default(
                            28,
                            new a.default(4, 22),
                            new a.default(4, 23)
                          ),
                          new o.default(
                            24,
                            new a.default(3, 12),
                            new a.default(8, 13)
                          )
                        ),
                        new e(
                          12,
                          Int32Array.from([6, 32, 58]),
                          new o.default(
                            24,
                            new a.default(2, 92),
                            new a.default(2, 93)
                          ),
                          new o.default(
                            22,
                            new a.default(6, 36),
                            new a.default(2, 37)
                          ),
                          new o.default(
                            26,
                            new a.default(4, 20),
                            new a.default(6, 21)
                          ),
                          new o.default(
                            28,
                            new a.default(7, 14),
                            new a.default(4, 15)
                          )
                        ),
                        new e(
                          13,
                          Int32Array.from([6, 34, 62]),
                          new o.default(26, new a.default(4, 107)),
                          new o.default(
                            22,
                            new a.default(8, 37),
                            new a.default(1, 38)
                          ),
                          new o.default(
                            24,
                            new a.default(8, 20),
                            new a.default(4, 21)
                          ),
                          new o.default(
                            22,
                            new a.default(12, 11),
                            new a.default(4, 12)
                          )
                        ),
                        new e(
                          14,
                          Int32Array.from([6, 26, 46, 66]),
                          new o.default(
                            30,
                            new a.default(3, 115),
                            new a.default(1, 116)
                          ),
                          new o.default(
                            24,
                            new a.default(4, 40),
                            new a.default(5, 41)
                          ),
                          new o.default(
                            20,
                            new a.default(11, 16),
                            new a.default(5, 17)
                          ),
                          new o.default(
                            24,
                            new a.default(11, 12),
                            new a.default(5, 13)
                          )
                        ),
                        new e(
                          15,
                          Int32Array.from([6, 26, 48, 70]),
                          new o.default(
                            22,
                            new a.default(5, 87),
                            new a.default(1, 88)
                          ),
                          new o.default(
                            24,
                            new a.default(5, 41),
                            new a.default(5, 42)
                          ),
                          new o.default(
                            30,
                            new a.default(5, 24),
                            new a.default(7, 25)
                          ),
                          new o.default(
                            24,
                            new a.default(11, 12),
                            new a.default(7, 13)
                          )
                        ),
                        new e(
                          16,
                          Int32Array.from([6, 26, 50, 74]),
                          new o.default(
                            24,
                            new a.default(5, 98),
                            new a.default(1, 99)
                          ),
                          new o.default(
                            28,
                            new a.default(7, 45),
                            new a.default(3, 46)
                          ),
                          new o.default(
                            24,
                            new a.default(15, 19),
                            new a.default(2, 20)
                          ),
                          new o.default(
                            30,
                            new a.default(3, 15),
                            new a.default(13, 16)
                          )
                        ),
                        new e(
                          17,
                          Int32Array.from([6, 30, 54, 78]),
                          new o.default(
                            28,
                            new a.default(1, 107),
                            new a.default(5, 108)
                          ),
                          new o.default(
                            28,
                            new a.default(10, 46),
                            new a.default(1, 47)
                          ),
                          new o.default(
                            28,
                            new a.default(1, 22),
                            new a.default(15, 23)
                          ),
                          new o.default(
                            28,
                            new a.default(2, 14),
                            new a.default(17, 15)
                          )
                        ),
                        new e(
                          18,
                          Int32Array.from([6, 30, 56, 82]),
                          new o.default(
                            30,
                            new a.default(5, 120),
                            new a.default(1, 121)
                          ),
                          new o.default(
                            26,
                            new a.default(9, 43),
                            new a.default(4, 44)
                          ),
                          new o.default(
                            28,
                            new a.default(17, 22),
                            new a.default(1, 23)
                          ),
                          new o.default(
                            28,
                            new a.default(2, 14),
                            new a.default(19, 15)
                          )
                        ),
                        new e(
                          19,
                          Int32Array.from([6, 30, 58, 86]),
                          new o.default(
                            28,
                            new a.default(3, 113),
                            new a.default(4, 114)
                          ),
                          new o.default(
                            26,
                            new a.default(3, 44),
                            new a.default(11, 45)
                          ),
                          new o.default(
                            26,
                            new a.default(17, 21),
                            new a.default(4, 22)
                          ),
                          new o.default(
                            26,
                            new a.default(9, 13),
                            new a.default(16, 14)
                          )
                        ),
                        new e(
                          20,
                          Int32Array.from([6, 34, 62, 90]),
                          new o.default(
                            28,
                            new a.default(3, 107),
                            new a.default(5, 108)
                          ),
                          new o.default(
                            26,
                            new a.default(3, 41),
                            new a.default(13, 42)
                          ),
                          new o.default(
                            30,
                            new a.default(15, 24),
                            new a.default(5, 25)
                          ),
                          new o.default(
                            28,
                            new a.default(15, 15),
                            new a.default(10, 16)
                          )
                        ),
                        new e(
                          21,
                          Int32Array.from([6, 28, 50, 72, 94]),
                          new o.default(
                            28,
                            new a.default(4, 116),
                            new a.default(4, 117)
                          ),
                          new o.default(26, new a.default(17, 42)),
                          new o.default(
                            28,
                            new a.default(17, 22),
                            new a.default(6, 23)
                          ),
                          new o.default(
                            30,
                            new a.default(19, 16),
                            new a.default(6, 17)
                          )
                        ),
                        new e(
                          22,
                          Int32Array.from([6, 26, 50, 74, 98]),
                          new o.default(
                            28,
                            new a.default(2, 111),
                            new a.default(7, 112)
                          ),
                          new o.default(28, new a.default(17, 46)),
                          new o.default(
                            30,
                            new a.default(7, 24),
                            new a.default(16, 25)
                          ),
                          new o.default(24, new a.default(34, 13))
                        ),
                        new e(
                          23,
                          Int32Array.from([6, 30, 54, 78, 102]),
                          new o.default(
                            30,
                            new a.default(4, 121),
                            new a.default(5, 122)
                          ),
                          new o.default(
                            28,
                            new a.default(4, 47),
                            new a.default(14, 48)
                          ),
                          new o.default(
                            30,
                            new a.default(11, 24),
                            new a.default(14, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(16, 15),
                            new a.default(14, 16)
                          )
                        ),
                        new e(
                          24,
                          Int32Array.from([6, 28, 54, 80, 106]),
                          new o.default(
                            30,
                            new a.default(6, 117),
                            new a.default(4, 118)
                          ),
                          new o.default(
                            28,
                            new a.default(6, 45),
                            new a.default(14, 46)
                          ),
                          new o.default(
                            30,
                            new a.default(11, 24),
                            new a.default(16, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(30, 16),
                            new a.default(2, 17)
                          )
                        ),
                        new e(
                          25,
                          Int32Array.from([6, 32, 58, 84, 110]),
                          new o.default(
                            26,
                            new a.default(8, 106),
                            new a.default(4, 107)
                          ),
                          new o.default(
                            28,
                            new a.default(8, 47),
                            new a.default(13, 48)
                          ),
                          new o.default(
                            30,
                            new a.default(7, 24),
                            new a.default(22, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(22, 15),
                            new a.default(13, 16)
                          )
                        ),
                        new e(
                          26,
                          Int32Array.from([6, 30, 58, 86, 114]),
                          new o.default(
                            28,
                            new a.default(10, 114),
                            new a.default(2, 115)
                          ),
                          new o.default(
                            28,
                            new a.default(19, 46),
                            new a.default(4, 47)
                          ),
                          new o.default(
                            28,
                            new a.default(28, 22),
                            new a.default(6, 23)
                          ),
                          new o.default(
                            30,
                            new a.default(33, 16),
                            new a.default(4, 17)
                          )
                        ),
                        new e(
                          27,
                          Int32Array.from([6, 34, 62, 90, 118]),
                          new o.default(
                            30,
                            new a.default(8, 122),
                            new a.default(4, 123)
                          ),
                          new o.default(
                            28,
                            new a.default(22, 45),
                            new a.default(3, 46)
                          ),
                          new o.default(
                            30,
                            new a.default(8, 23),
                            new a.default(26, 24)
                          ),
                          new o.default(
                            30,
                            new a.default(12, 15),
                            new a.default(28, 16)
                          )
                        ),
                        new e(
                          28,
                          Int32Array.from([6, 26, 50, 74, 98, 122]),
                          new o.default(
                            30,
                            new a.default(3, 117),
                            new a.default(10, 118)
                          ),
                          new o.default(
                            28,
                            new a.default(3, 45),
                            new a.default(23, 46)
                          ),
                          new o.default(
                            30,
                            new a.default(4, 24),
                            new a.default(31, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(11, 15),
                            new a.default(31, 16)
                          )
                        ),
                        new e(
                          29,
                          Int32Array.from([6, 30, 54, 78, 102, 126]),
                          new o.default(
                            30,
                            new a.default(7, 116),
                            new a.default(7, 117)
                          ),
                          new o.default(
                            28,
                            new a.default(21, 45),
                            new a.default(7, 46)
                          ),
                          new o.default(
                            30,
                            new a.default(1, 23),
                            new a.default(37, 24)
                          ),
                          new o.default(
                            30,
                            new a.default(19, 15),
                            new a.default(26, 16)
                          )
                        ),
                        new e(
                          30,
                          Int32Array.from([6, 26, 52, 78, 104, 130]),
                          new o.default(
                            30,
                            new a.default(5, 115),
                            new a.default(10, 116)
                          ),
                          new o.default(
                            28,
                            new a.default(19, 47),
                            new a.default(10, 48)
                          ),
                          new o.default(
                            30,
                            new a.default(15, 24),
                            new a.default(25, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(23, 15),
                            new a.default(25, 16)
                          )
                        ),
                        new e(
                          31,
                          Int32Array.from([6, 30, 56, 82, 108, 134]),
                          new o.default(
                            30,
                            new a.default(13, 115),
                            new a.default(3, 116)
                          ),
                          new o.default(
                            28,
                            new a.default(2, 46),
                            new a.default(29, 47)
                          ),
                          new o.default(
                            30,
                            new a.default(42, 24),
                            new a.default(1, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(23, 15),
                            new a.default(28, 16)
                          )
                        ),
                        new e(
                          32,
                          Int32Array.from([6, 34, 60, 86, 112, 138]),
                          new o.default(30, new a.default(17, 115)),
                          new o.default(
                            28,
                            new a.default(10, 46),
                            new a.default(23, 47)
                          ),
                          new o.default(
                            30,
                            new a.default(10, 24),
                            new a.default(35, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(19, 15),
                            new a.default(35, 16)
                          )
                        ),
                        new e(
                          33,
                          Int32Array.from([6, 30, 58, 86, 114, 142]),
                          new o.default(
                            30,
                            new a.default(17, 115),
                            new a.default(1, 116)
                          ),
                          new o.default(
                            28,
                            new a.default(14, 46),
                            new a.default(21, 47)
                          ),
                          new o.default(
                            30,
                            new a.default(29, 24),
                            new a.default(19, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(11, 15),
                            new a.default(46, 16)
                          )
                        ),
                        new e(
                          34,
                          Int32Array.from([6, 34, 62, 90, 118, 146]),
                          new o.default(
                            30,
                            new a.default(13, 115),
                            new a.default(6, 116)
                          ),
                          new o.default(
                            28,
                            new a.default(14, 46),
                            new a.default(23, 47)
                          ),
                          new o.default(
                            30,
                            new a.default(44, 24),
                            new a.default(7, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(59, 16),
                            new a.default(1, 17)
                          )
                        ),
                        new e(
                          35,
                          Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
                          new o.default(
                            30,
                            new a.default(12, 121),
                            new a.default(7, 122)
                          ),
                          new o.default(
                            28,
                            new a.default(12, 47),
                            new a.default(26, 48)
                          ),
                          new o.default(
                            30,
                            new a.default(39, 24),
                            new a.default(14, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(22, 15),
                            new a.default(41, 16)
                          )
                        ),
                        new e(
                          36,
                          Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
                          new o.default(
                            30,
                            new a.default(6, 121),
                            new a.default(14, 122)
                          ),
                          new o.default(
                            28,
                            new a.default(6, 47),
                            new a.default(34, 48)
                          ),
                          new o.default(
                            30,
                            new a.default(46, 24),
                            new a.default(10, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(2, 15),
                            new a.default(64, 16)
                          )
                        ),
                        new e(
                          37,
                          Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
                          new o.default(
                            30,
                            new a.default(17, 122),
                            new a.default(4, 123)
                          ),
                          new o.default(
                            28,
                            new a.default(29, 46),
                            new a.default(14, 47)
                          ),
                          new o.default(
                            30,
                            new a.default(49, 24),
                            new a.default(10, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(24, 15),
                            new a.default(46, 16)
                          )
                        ),
                        new e(
                          38,
                          Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
                          new o.default(
                            30,
                            new a.default(4, 122),
                            new a.default(18, 123)
                          ),
                          new o.default(
                            28,
                            new a.default(13, 46),
                            new a.default(32, 47)
                          ),
                          new o.default(
                            30,
                            new a.default(48, 24),
                            new a.default(14, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(42, 15),
                            new a.default(32, 16)
                          )
                        ),
                        new e(
                          39,
                          Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
                          new o.default(
                            30,
                            new a.default(20, 117),
                            new a.default(4, 118)
                          ),
                          new o.default(
                            28,
                            new a.default(40, 47),
                            new a.default(7, 48)
                          ),
                          new o.default(
                            30,
                            new a.default(43, 24),
                            new a.default(22, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(10, 15),
                            new a.default(67, 16)
                          )
                        ),
                        new e(
                          40,
                          Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
                          new o.default(
                            30,
                            new a.default(19, 118),
                            new a.default(6, 119)
                          ),
                          new o.default(
                            28,
                            new a.default(18, 47),
                            new a.default(31, 48)
                          ),
                          new o.default(
                            30,
                            new a.default(34, 24),
                            new a.default(34, 25)
                          ),
                          new o.default(
                            30,
                            new a.default(20, 15),
                            new a.default(61, 16)
                          )
                        ),
                      ]),
                      e
                    );
                  })();
                t.default = c;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(13),
                  i = r(23),
                  o = r(58),
                  a = r(16),
                  s = (function () {
                    function e(e) {
                      this.field = e;
                    }
                    return (
                      (e.prototype.decode = function (e, t) {
                        for (
                          var r = this.field,
                            a = new i.default(r, e),
                            s = new Int32Array(t),
                            u = !0,
                            c = 0;
                          c < t;
                          c++
                        ) {
                          var f = a.evaluateAt(r.exp(c + r.getGeneratorBase()));
                          (s[s.length - 1 - c] = f), 0 !== f && (u = !1);
                        }
                        if (!u) {
                          var l = new i.default(r, s),
                            d = this.runEuclideanAlgorithm(
                              r.buildMonomial(t, 1),
                              l,
                              t
                            ),
                            h = d[0],
                            p = d[1],
                            v = this.findErrorLocations(h),
                            g = this.findErrorMagnitudes(p, v);
                          for (c = 0; c < v.length; c++) {
                            var m = e.length - 1 - r.log(v[c]);
                            if (m < 0)
                              throw new o.default("Bad error location");
                            e[m] = n.default.addOrSubtract(e[m], g[c]);
                          }
                        }
                      }),
                      (e.prototype.runEuclideanAlgorithm = function (e, t, r) {
                        if (e.getDegree() < t.getDegree()) {
                          var n = e;
                          (e = t), (t = n);
                        }
                        for (
                          var i = this.field,
                            s = e,
                            u = t,
                            c = i.getZero(),
                            f = i.getOne();
                          u.getDegree() >= ((r / 2) | 0);

                        ) {
                          var l = s,
                            d = c;
                          if (((c = f), (s = u).isZero()))
                            throw new o.default("r_{i-1} was zero");
                          u = l;
                          for (
                            var h = i.getZero(),
                              p = s.getCoefficient(s.getDegree()),
                              v = i.inverse(p);
                            u.getDegree() >= s.getDegree() && !u.isZero();

                          ) {
                            var g = u.getDegree() - s.getDegree(),
                              m = i.multiply(
                                u.getCoefficient(u.getDegree()),
                                v
                              );
                            (h = h.addOrSubtract(i.buildMonomial(g, m))),
                              (u = u.addOrSubtract(s.multiplyByMonomial(g, m)));
                          }
                          if (
                            ((f = h.multiply(c).addOrSubtract(d)),
                            u.getDegree() >= s.getDegree())
                          )
                            throw new a.default(
                              "Division algorithm failed to reduce polynomial?"
                            );
                        }
                        var y = f.getCoefficient(0);
                        if (0 === y)
                          throw new o.default("sigmaTilde(0) was zero");
                        var _ = i.inverse(y);
                        return [f.multiplyScalar(_), u.multiplyScalar(_)];
                      }),
                      (e.prototype.findErrorLocations = function (e) {
                        var t = e.getDegree();
                        if (1 === t)
                          return Int32Array.from([e.getCoefficient(1)]);
                        for (
                          var r = new Int32Array(t),
                            n = 0,
                            i = this.field,
                            a = 1;
                          a < i.getSize() && n < t;
                          a++
                        )
                          0 === e.evaluateAt(a) && ((r[n] = i.inverse(a)), n++);
                        if (n !== t)
                          throw new o.default(
                            "Error locator degree does not match number of roots"
                          );
                        return r;
                      }),
                      (e.prototype.findErrorMagnitudes = function (e, t) {
                        for (
                          var r = t.length,
                            n = new Int32Array(r),
                            i = this.field,
                            o = 0;
                          o < r;
                          o++
                        ) {
                          for (
                            var a = i.inverse(t[o]), s = 1, u = 0;
                            u < r;
                            u++
                          )
                            if (o !== u) {
                              var c = i.multiply(t[u], a),
                                f = 0 == (1 & c) ? 1 | c : -2 & c;
                              s = i.multiply(s, f);
                            }
                          (n[o] = i.multiply(e.evaluateAt(a), i.inverse(s))),
                            0 !== i.getGeneratorBase() &&
                              (n[o] = i.multiply(n[o], a));
                        }
                        return n;
                      }),
                      e
                    );
                  })();
                t.default = s;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(2),
                  i = r(8),
                  o = r(10),
                  a = r(6),
                  s = r(100),
                  u = r(56),
                  c = r(93),
                  f = r(0),
                  l = (function () {
                    function e() {
                      this.decoder = new s.default();
                    }
                    return (
                      (e.prototype.getDecoder = function () {
                        return this.decoder;
                      }),
                      (e.prototype.decode = function (t, r) {
                        var a, s;
                        if (null != r && void 0 !== r.get(1)) {
                          var f = e.extractPureBits(t.getBlackMatrix());
                          (a = this.decoder.decodeBitMatrix(f, r)),
                            (s = e.NO_POINTS);
                        } else {
                          var l = new c.default(t.getBlackMatrix()).detect(r);
                          (a = this.decoder.decodeBitMatrix(l.getBits(), r)),
                            (s = l.getPoints());
                        }
                        a.getOther() instanceof u.default &&
                          a.getOther().applyMirroredCorrection(s);
                        var d = new i.default(
                            a.getText(),
                            a.getRawBytes(),
                            void 0,
                            s,
                            n.default.QR_CODE,
                            void 0
                          ),
                          h = a.getByteSegments();
                        null !== h && d.putMetadata(o.default.BYTE_SEGMENTS, h);
                        var p = a.getECLevel();
                        return (
                          null !== p &&
                            d.putMetadata(o.default.ERROR_CORRECTION_LEVEL, p),
                          a.hasStructuredAppend() &&
                            (d.putMetadata(
                              o.default.STRUCTURED_APPEND_SEQUENCE,
                              a.getStructuredAppendSequenceNumber()
                            ),
                            d.putMetadata(
                              o.default.STRUCTURED_APPEND_PARITY,
                              a.getStructuredAppendParity()
                            )),
                          d
                        );
                      }),
                      (e.prototype.reset = function () {}),
                      (e.extractPureBits = function (e) {
                        var t = e.getTopLeftOnBit(),
                          r = e.getBottomRightOnBit();
                        if (null === t || null === r) throw new f.default();
                        var n = this.moduleSize(t, e),
                          i = t[1],
                          o = r[1],
                          s = t[0],
                          u = r[0];
                        if (s >= u || i >= o) throw new f.default();
                        if (o - i != u - s && (u = s + (o - i)) >= e.getWidth())
                          throw new f.default();
                        var c = Math.round((u - s + 1) / n),
                          l = Math.round((o - i + 1) / n);
                        if (c <= 0 || l <= 0) throw new f.default();
                        if (l !== c) throw new f.default();
                        var d = Math.floor(n / 2);
                        i += d;
                        var h = (s += d) + Math.floor((c - 1) * n) - u;
                        if (h > 0) {
                          if (h > d) throw new f.default();
                          s -= h;
                        }
                        var p = i + Math.floor((l - 1) * n) - o;
                        if (p > 0) {
                          if (p > d) throw new f.default();
                          i -= p;
                        }
                        for (var v = new a.default(c, l), g = 0; g < l; g++)
                          for (var m = i + Math.floor(g * n), y = 0; y < c; y++)
                            e.get(s + Math.floor(y * n), m) && v.set(y, g);
                        return v;
                      }),
                      (e.moduleSize = function (e, t) {
                        for (
                          var r = t.getHeight(),
                            n = t.getWidth(),
                            i = e[0],
                            o = e[1],
                            a = !0,
                            s = 0;
                          i < n && o < r;

                        ) {
                          if (a !== t.get(i, o)) {
                            if (5 == ++s) break;
                            a = !a;
                          }
                          i++, o++;
                        }
                        if (i === n || o === r) throw new f.default();
                        return (i - e[0]) / 7;
                      }),
                      (e.NO_POINTS = new Array()),
                      e
                    );
                  })();
                t.default = l;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return i(t, e), t;
                })(r(5).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(7),
                  i = (function () {
                    function e() {}
                    return (
                      (e.equals = function (e, t) {
                        if (!e) return !1;
                        if (!t) return !1;
                        if (!e.length) return !1;
                        if (!t.length) return !1;
                        if (e.length !== t.length) return !1;
                        for (var r = 0, n = e.length; r < n; r++)
                          if (e[r] !== t[r]) return !1;
                        return !0;
                      }),
                      (e.hashCode = function (e) {
                        if (null === e) return 0;
                        for (var t = 1, r = 0, n = e; r < n.length; r++)
                          t = 31 * t + n[r];
                        return t;
                      }),
                      (e.fillUint8Array = function (e, t) {
                        for (var r = 0; r !== e.length; r++) e[r] = t;
                      }),
                      (e.copyOf = function (e, t) {
                        var r = new Int32Array(t);
                        return (
                          n.default.arraycopy(
                            e,
                            0,
                            r,
                            0,
                            Math.min(e.length, t)
                          ),
                          r
                        );
                      }),
                      (e.binarySearch = function (t, r, n) {
                        void 0 === n && (n = e.numberComparator);
                        for (var i = 0, o = t.length - 1; i <= o; ) {
                          var a = (o + i) >> 1,
                            s = n(r, t[a]);
                          if (s > 0) i = a + 1;
                          else {
                            if (!(s < 0)) return a;
                            o = a - 1;
                          }
                        }
                        return -i - 1;
                      }),
                      (e.numberComparator = function (e, t) {
                        return e - t;
                      }),
                      e
                    );
                  })();
                t.default = i;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return i(t, e), t;
                })(r(5).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(2),
                  i = r(21),
                  o = r(6),
                  a = r(22),
                  s = r(29),
                  u = r(1),
                  c = r(16),
                  f = (function () {
                    function e() {}
                    return (
                      (e.prototype.encode = function (t, r, o, c, f) {
                        if (0 === t.length)
                          throw new u.default("Found empty contents");
                        if (r !== n.default.QR_CODE)
                          throw new u.default(
                            "Can only encode QR_CODE, but got " + r
                          );
                        if (o < 0 || c < 0)
                          throw new u.default(
                            "Requested dimensions are too small: " + o + "x" + c
                          );
                        var l = a.default.L,
                          d = e.QUIET_ZONE_SIZE;
                        null !== f &&
                          (void 0 !== f.get(i.default.ERROR_CORRECTION) &&
                            (l = a.default.fromString(
                              f.get(i.default.ERROR_CORRECTION).toString()
                            )),
                          void 0 !== f.get(i.default.MARGIN) &&
                            (d = Number.parseInt(
                              f.get(i.default.MARGIN).toString(),
                              10
                            )));
                        var h = s.default.encode(t, l, f);
                        return e.renderResult(h, o, c, d);
                      }),
                      (e.renderResult = function (e, t, r, n) {
                        var i = e.getMatrix();
                        if (null === i) throw new c.default();
                        for (
                          var a = i.getWidth(),
                            s = i.getHeight(),
                            u = a + 2 * n,
                            f = s + 2 * n,
                            l = Math.max(t, u),
                            d = Math.max(r, f),
                            h = Math.min(Math.floor(l / u), Math.floor(d / f)),
                            p = Math.floor((l - a * h) / 2),
                            v = Math.floor((d - s * h) / 2),
                            g = new o.default(l, d),
                            m = 0,
                            y = v;
                          m < s;
                          m++, y += h
                        )
                          for (var _ = 0, w = p; _ < a; _++, w += h)
                            1 === i.get(_, m) && g.setRegion(w, y, h, h);
                        return g;
                      }),
                      (e.QUIET_ZONE_SIZE = 4),
                      e
                    );
                  })();
                t.default = f;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return i(t, e), t;
                })(r(5).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(2),
                  a = r(20),
                  s = r(0),
                  u = (function (e) {
                    function t() {
                      var t = e.call(this) || this;
                      return (t.decodeMiddleCounters = [0, 0, 0, 0]), t;
                    }
                    return (
                      i(t, e),
                      (t.prototype.decodeMiddle = function (e, r, n) {
                        var i = this.decodeMiddleCounters;
                        (i[0] = 0), (i[1] = 0), (i[2] = 0), (i[3] = 0);
                        for (
                          var o = e.getSize(), s = r[1], u = 0, c = 0;
                          c < 6 && s < o;
                          c++
                        ) {
                          var f = a.default.decodeDigit(
                            e,
                            i,
                            s,
                            a.default.L_AND_G_PATTERNS
                          );
                          n += String.fromCharCode(
                            "0".charCodeAt(0) + (f % 10)
                          );
                          for (var l = 0, d = i; l < d.length; l++) s += d[l];
                          f >= 10 && (u |= 1 << (5 - c));
                        }
                        for (
                          n = t.determineFirstDigit(n, u),
                            s = a.default.findGuardPattern(
                              e,
                              s,
                              !0,
                              a.default.MIDDLE_PATTERN,
                              new Array(a.default.MIDDLE_PATTERN.length).fill(0)
                            )[1],
                            c = 0;
                          c < 6 && s < o;
                          c++
                        ) {
                          (f = a.default.decodeDigit(
                            e,
                            i,
                            s,
                            a.default.L_PATTERNS
                          )),
                            (n += String.fromCharCode("0".charCodeAt(0) + f));
                          for (var h = 0, p = i; h < p.length; h++) s += p[h];
                        }
                        return { rowOffset: s, resultString: n };
                      }),
                      (t.prototype.getBarcodeFormat = function () {
                        return o.default.EAN_13;
                      }),
                      (t.determineFirstDigit = function (e, t) {
                        for (var r = 0; r < 10; r++)
                          if (t === this.FIRST_DIGIT_ENCODINGS[r])
                            return (
                              String.fromCharCode("0".charCodeAt(0) + r) + e
                            );
                        throw new s.default();
                      }),
                      (t.FIRST_DIGIT_ENCODINGS = [
                        0, 11, 13, 14, 19, 25, 28, 21, 22, 26,
                      ]),
                      t
                    );
                  })(a.default);
                t.default = u;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(2),
                  a = r(8),
                  s = r(3),
                  u = r(9),
                  c = r(12),
                  f = r(7),
                  l = r(4),
                  d = r(0),
                  h = (function (e) {
                    function t() {
                      var t = (null !== e && e.apply(this, arguments)) || this;
                      return (t.narrowLineWidth = -1), t;
                    }
                    return (
                      i(t, e),
                      (t.prototype.decodeRow = function (e, r, n) {
                        var i = this.decodeStart(r),
                          u = this.decodeEnd(r),
                          f = new c.default();
                        t.decodeMiddle(r, i[1], u[0], f);
                        var d = f.toString(),
                          h = null;
                        null != n && (h = n.get(5)),
                          null == h && (h = t.DEFAULT_ALLOWED_LENGTHS);
                        for (
                          var p = d.length, v = !1, g = 0, m = 0, y = h;
                          m < y.length;
                          m++
                        ) {
                          var _ = y[m];
                          if (p === _) {
                            v = !0;
                            break;
                          }
                          _ > g && (g = _);
                        }
                        if ((!v && p > g && (v = !0), !v))
                          throw new l.default();
                        var w = [
                          new s.default(i[1], e),
                          new s.default(u[0], e),
                        ];
                        return new a.default(
                          d,
                          null,
                          0,
                          w,
                          o.default.ITF,
                          new Date().getTime()
                        );
                      }),
                      (t.decodeMiddle = function (e, r, n, i) {
                        var o = new Array(10),
                          a = new Array(5),
                          s = new Array(5);
                        for (o.fill(0), a.fill(0), s.fill(0); r < n; ) {
                          u.default.recordPattern(e, r, o);
                          for (var c = 0; c < 5; c++) {
                            var f = 2 * c;
                            (a[c] = o[f]), (s[c] = o[f + 1]);
                          }
                          var l = t.decodeDigit(a);
                          i.append(l.toString()),
                            (l = this.decodeDigit(s)),
                            i.append(l.toString()),
                            o.forEach(function (e) {
                              r += e;
                            });
                        }
                      }),
                      (t.prototype.decodeStart = function (e) {
                        var r = t.skipWhiteSpace(e),
                          n = t.findGuardPattern(e, r, t.START_PATTERN);
                        return (
                          (this.narrowLineWidth = (n[1] - n[0]) / 4),
                          this.validateQuietZone(e, n[0]),
                          n
                        );
                      }),
                      (t.prototype.validateQuietZone = function (e, t) {
                        var r = 10 * this.narrowLineWidth;
                        r = r < t ? r : t;
                        for (var n = t - 1; r > 0 && n >= 0 && !e.get(n); n--)
                          r--;
                        if (0 !== r) throw new d.default();
                      }),
                      (t.skipWhiteSpace = function (e) {
                        var t = e.getSize(),
                          r = e.getNextSet(0);
                        if (r === t) throw new d.default();
                        return r;
                      }),
                      (t.prototype.decodeEnd = function (e) {
                        e.reverse();
                        try {
                          var r = t.skipWhiteSpace(e),
                            n = void 0;
                          try {
                            n = t.findGuardPattern(
                              e,
                              r,
                              t.END_PATTERN_REVERSED[0]
                            );
                          } catch (i) {
                            n = t.findGuardPattern(
                              e,
                              r,
                              t.END_PATTERN_REVERSED[1]
                            );
                          }
                          this.validateQuietZone(e, n[0]);
                          var i = n[0];
                          return (
                            (n[0] = e.getSize() - n[1]),
                            (n[1] = e.getSize() - i),
                            n
                          );
                        } finally {
                          e.reverse();
                        }
                      }),
                      (t.findGuardPattern = function (e, r, n) {
                        var i = n.length,
                          o = new Array(i),
                          a = e.getSize(),
                          s = !1,
                          c = 0,
                          l = r;
                        o.fill(0);
                        for (var h = r; h < a; h++)
                          if (e.get(h) !== s) o[c]++;
                          else {
                            if (c === i - 1) {
                              if (
                                u.default.patternMatchVariance(
                                  o,
                                  n,
                                  t.MAX_INDIVIDUAL_VARIANCE
                                ) < t.MAX_AVG_VARIANCE
                              )
                                return [l, h];
                              (l += o[0] + o[1]),
                                f.default.arraycopy(o, 2, o, 0, c - 1),
                                (o[c - 1] = 0),
                                (o[c] = 0),
                                c--;
                            } else c++;
                            (o[c] = 1), (s = !s);
                          }
                        throw new d.default();
                      }),
                      (t.decodeDigit = function (e) {
                        for (
                          var r = t.MAX_AVG_VARIANCE,
                            n = -1,
                            i = t.PATTERNS.length,
                            o = 0;
                          o < i;
                          o++
                        ) {
                          var a = t.PATTERNS[o],
                            s = u.default.patternMatchVariance(
                              e,
                              a,
                              t.MAX_INDIVIDUAL_VARIANCE
                            );
                          s < r ? ((r = s), (n = o)) : s === r && (n = -1);
                        }
                        if (n >= 0) return n % 10;
                        throw new d.default();
                      }),
                      (t.W = 3),
                      (t.w = 2),
                      (t.N = 1),
                      (t.PATTERNS = [
                        [1, 1, 2, 2, 1],
                        [2, 1, 1, 1, 2],
                        [1, 2, 1, 1, 2],
                        [2, 2, 1, 1, 1],
                        [1, 1, 2, 1, 2],
                        [2, 1, 2, 1, 1],
                        [1, 2, 2, 1, 1],
                        [1, 1, 1, 2, 2],
                        [2, 1, 1, 2, 1],
                        [1, 2, 1, 2, 1],
                        [1, 1, 3, 3, 1],
                        [3, 1, 1, 1, 3],
                        [1, 3, 1, 1, 3],
                        [3, 3, 1, 1, 1],
                        [1, 1, 3, 1, 3],
                        [3, 1, 3, 1, 1],
                        [1, 3, 3, 1, 1],
                        [1, 1, 1, 3, 3],
                        [3, 1, 1, 3, 1],
                        [1, 3, 1, 3, 1],
                      ]),
                      (t.MAX_AVG_VARIANCE = 0.38),
                      (t.MAX_INDIVIDUAL_VARIANCE = 0.5),
                      (t.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14]),
                      (t.START_PATTERN = [1, 1, 1, 1]),
                      (t.END_PATTERN_REVERSED = [
                        [1, 1, 2],
                        [1, 1, 3],
                      ]),
                      t
                    );
                  })(u.default);
                t.default = h;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(2),
                  a = r(8),
                  s = r(3),
                  u = r(9),
                  c = r(0),
                  f = r(4),
                  l = r(11),
                  d = (function (e) {
                    function t() {
                      return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                      i(t, e),
                      (t.findStartPattern = function (e) {
                        for (
                          var r = e.getSize(),
                            n = e.getNextSet(0),
                            i = 0,
                            o = [0, 0, 0, 0, 0, 0],
                            a = n,
                            s = !1,
                            f = n;
                          f < r;
                          f++
                        )
                          if (e.get(f) !== s) o[i]++;
                          else {
                            if (5 === i) {
                              for (
                                var l = t.MAX_AVG_VARIANCE,
                                  d = -1,
                                  h = t.CODE_START_A;
                                h <= t.CODE_START_C;
                                h++
                              ) {
                                var p = u.default.patternMatchVariance(
                                  o,
                                  t.CODE_PATTERNS[h],
                                  t.MAX_INDIVIDUAL_VARIANCE
                                );
                                p < l && ((l = p), (d = h));
                              }
                              if (
                                d >= 0 &&
                                e.isRange(Math.max(0, a - (f - a) / 2), a, !1)
                              )
                                return [a, f, d];
                              (a += o[0] + o[1]),
                                o.splice(0, 2),
                                (o[i - 1] = 0),
                                (o[i] = 0),
                                i--;
                            } else i++;
                            (o[i] = 1), (s = !s);
                          }
                        throw new c.default();
                      }),
                      (t.decodeCode = function (e, r, n) {
                        u.default.recordPattern(e, n, r);
                        for (
                          var i = t.MAX_AVG_VARIANCE, o = -1, a = 0;
                          a < t.CODE_PATTERNS.length;
                          a++
                        ) {
                          var s = t.CODE_PATTERNS[a],
                            f = this.patternMatchVariance(
                              r,
                              s,
                              t.MAX_INDIVIDUAL_VARIANCE
                            );
                          f < i && ((i = f), (o = a));
                        }
                        if (o >= 0) return o;
                        throw new c.default();
                      }),
                      (t.prototype.decodeRow = function (e, r, n) {
                        var i,
                          u = n && !0 === n.get(7),
                          d = t.findStartPattern(r),
                          h = d[2],
                          p = 0,
                          v = new Uint8Array(20);
                        switch (((v[p++] = h), h)) {
                          case t.CODE_START_A:
                            i = t.CODE_CODE_A;
                            break;
                          case t.CODE_START_B:
                            i = t.CODE_CODE_B;
                            break;
                          case t.CODE_START_C:
                            i = t.CODE_CODE_C;
                            break;
                          default:
                            throw new f.default();
                        }
                        for (
                          var g = !1,
                            m = !1,
                            y = "",
                            _ = d[0],
                            w = d[1],
                            C = [0, 0, 0, 0, 0, 0],
                            E = 0,
                            S = 0,
                            b = h,
                            T = 0,
                            A = !0,
                            O = !1,
                            I = !1;
                          !g;

                        ) {
                          var R = m;
                          switch (
                            ((m = !1),
                            (E = S),
                            (S = t.decodeCode(r, C, w)),
                            (v[p++] = S),
                            S !== t.CODE_STOP && (A = !0),
                            S !== t.CODE_STOP && (b += ++T * S),
                            (_ = w),
                            (w += C.reduce(function (e, t) {
                              return e + t;
                            }, 0)),
                            S)
                          ) {
                            case t.CODE_START_A:
                            case t.CODE_START_B:
                            case t.CODE_START_C:
                              throw new f.default();
                          }
                          switch (i) {
                            case t.CODE_CODE_A:
                              if (S < 64)
                                (y +=
                                  I === O
                                    ? String.fromCharCode(" ".charCodeAt(0) + S)
                                    : String.fromCharCode(
                                        " ".charCodeAt(0) + S + 128
                                      )),
                                  (I = !1);
                              else if (S < 96)
                                (y +=
                                  I === O
                                    ? String.fromCharCode(S - 64)
                                    : String.fromCharCode(S + 64)),
                                  (I = !1);
                              else
                                switch ((S !== t.CODE_STOP && (A = !1), S)) {
                                  case t.CODE_FNC_1:
                                    u &&
                                      (0 === y.length
                                        ? (y += "]C1")
                                        : (y += String.fromCharCode(29)));
                                    break;
                                  case t.CODE_FNC_2:
                                  case t.CODE_FNC_3:
                                    break;
                                  case t.CODE_FNC_4_A:
                                    !O && I
                                      ? ((O = !0), (I = !1))
                                      : O && I
                                      ? ((O = !1), (I = !1))
                                      : (I = !0);
                                    break;
                                  case t.CODE_SHIFT:
                                    (m = !0), (i = t.CODE_CODE_B);
                                    break;
                                  case t.CODE_CODE_B:
                                    i = t.CODE_CODE_B;
                                    break;
                                  case t.CODE_CODE_C:
                                    i = t.CODE_CODE_C;
                                    break;
                                  case t.CODE_STOP:
                                    g = !0;
                                }
                              break;
                            case t.CODE_CODE_B:
                              if (S < 96)
                                (y +=
                                  I === O
                                    ? String.fromCharCode(" ".charCodeAt(0) + S)
                                    : String.fromCharCode(
                                        " ".charCodeAt(0) + S + 128
                                      )),
                                  (I = !1);
                              else
                                switch ((S !== t.CODE_STOP && (A = !1), S)) {
                                  case t.CODE_FNC_1:
                                    u &&
                                      (0 === y.length
                                        ? (y += "]C1")
                                        : (y += String.fromCharCode(29)));
                                    break;
                                  case t.CODE_FNC_2:
                                  case t.CODE_FNC_3:
                                    break;
                                  case t.CODE_FNC_4_B:
                                    !O && I
                                      ? ((O = !0), (I = !1))
                                      : O && I
                                      ? ((O = !1), (I = !1))
                                      : (I = !0);
                                    break;
                                  case t.CODE_SHIFT:
                                    (m = !0), (i = t.CODE_CODE_A);
                                    break;
                                  case t.CODE_CODE_A:
                                    i = t.CODE_CODE_A;
                                    break;
                                  case t.CODE_CODE_C:
                                    i = t.CODE_CODE_C;
                                    break;
                                  case t.CODE_STOP:
                                    g = !0;
                                }
                              break;
                            case t.CODE_CODE_C:
                              if (S < 100) S < 10 && (y += "0"), (y += S);
                              else
                                switch ((S !== t.CODE_STOP && (A = !1), S)) {
                                  case t.CODE_FNC_1:
                                    u &&
                                      (0 === y.length
                                        ? (y += "]C1")
                                        : (y += String.fromCharCode(29)));
                                    break;
                                  case t.CODE_CODE_A:
                                    i = t.CODE_CODE_A;
                                    break;
                                  case t.CODE_CODE_B:
                                    i = t.CODE_CODE_B;
                                    break;
                                  case t.CODE_STOP:
                                    g = !0;
                                }
                          }
                          R &&
                            (i =
                              i === t.CODE_CODE_A
                                ? t.CODE_CODE_B
                                : t.CODE_CODE_A);
                        }
                        var P = w - _;
                        if (
                          ((w = r.getNextUnset(w)),
                          !r.isRange(
                            w,
                            Math.min(r.getSize(), w + (w - _) / 2),
                            !1
                          ))
                        )
                          throw new c.default();
                        if ((b -= T * E) % 103 !== E) throw new l.default();
                        var M = y.length;
                        if (0 === M) throw new c.default();
                        M > 0 &&
                          A &&
                          (y =
                            i === t.CODE_CODE_C
                              ? y.substring(0, M - 2)
                              : y.substring(0, M - 1));
                        for (
                          var N = (d[1] + d[0]) / 2,
                            D = _ + P / 2,
                            k = v.length,
                            x = new Uint8Array(k),
                            B = 0;
                          B < k;
                          B++
                        )
                          x[B] = v[B];
                        var L = [new s.default(N, e), new s.default(D, e)];
                        return new a.default(
                          y,
                          x,
                          0,
                          L,
                          o.default.CODE_128,
                          new Date().getTime()
                        );
                      }),
                      (t.CODE_PATTERNS = [
                        [2, 1, 2, 2, 2, 2],
                        [2, 2, 2, 1, 2, 2],
                        [2, 2, 2, 2, 2, 1],
                        [1, 2, 1, 2, 2, 3],
                        [1, 2, 1, 3, 2, 2],
                        [1, 3, 1, 2, 2, 2],
                        [1, 2, 2, 2, 1, 3],
                        [1, 2, 2, 3, 1, 2],
                        [1, 3, 2, 2, 1, 2],
                        [2, 2, 1, 2, 1, 3],
                        [2, 2, 1, 3, 1, 2],
                        [2, 3, 1, 2, 1, 2],
                        [1, 1, 2, 2, 3, 2],
                        [1, 2, 2, 1, 3, 2],
                        [1, 2, 2, 2, 3, 1],
                        [1, 1, 3, 2, 2, 2],
                        [1, 2, 3, 1, 2, 2],
                        [1, 2, 3, 2, 2, 1],
                        [2, 2, 3, 2, 1, 1],
                        [2, 2, 1, 1, 3, 2],
                        [2, 2, 1, 2, 3, 1],
                        [2, 1, 3, 2, 1, 2],
                        [2, 2, 3, 1, 1, 2],
                        [3, 1, 2, 1, 3, 1],
                        [3, 1, 1, 2, 2, 2],
                        [3, 2, 1, 1, 2, 2],
                        [3, 2, 1, 2, 2, 1],
                        [3, 1, 2, 2, 1, 2],
                        [3, 2, 2, 1, 1, 2],
                        [3, 2, 2, 2, 1, 1],
                        [2, 1, 2, 1, 2, 3],
                        [2, 1, 2, 3, 2, 1],
                        [2, 3, 2, 1, 2, 1],
                        [1, 1, 1, 3, 2, 3],
                        [1, 3, 1, 1, 2, 3],
                        [1, 3, 1, 3, 2, 1],
                        [1, 1, 2, 3, 1, 3],
                        [1, 3, 2, 1, 1, 3],
                        [1, 3, 2, 3, 1, 1],
                        [2, 1, 1, 3, 1, 3],
                        [2, 3, 1, 1, 1, 3],
                        [2, 3, 1, 3, 1, 1],
                        [1, 1, 2, 1, 3, 3],
                        [1, 1, 2, 3, 3, 1],
                        [1, 3, 2, 1, 3, 1],
                        [1, 1, 3, 1, 2, 3],
                        [1, 1, 3, 3, 2, 1],
                        [1, 3, 3, 1, 2, 1],
                        [3, 1, 3, 1, 2, 1],
                        [2, 1, 1, 3, 3, 1],
                        [2, 3, 1, 1, 3, 1],
                        [2, 1, 3, 1, 1, 3],
                        [2, 1, 3, 3, 1, 1],
                        [2, 1, 3, 1, 3, 1],
                        [3, 1, 1, 1, 2, 3],
                        [3, 1, 1, 3, 2, 1],
                        [3, 3, 1, 1, 2, 1],
                        [3, 1, 2, 1, 1, 3],
                        [3, 1, 2, 3, 1, 1],
                        [3, 3, 2, 1, 1, 1],
                        [3, 1, 4, 1, 1, 1],
                        [2, 2, 1, 4, 1, 1],
                        [4, 3, 1, 1, 1, 1],
                        [1, 1, 1, 2, 2, 4],
                        [1, 1, 1, 4, 2, 2],
                        [1, 2, 1, 1, 2, 4],
                        [1, 2, 1, 4, 2, 1],
                        [1, 4, 1, 1, 2, 2],
                        [1, 4, 1, 2, 2, 1],
                        [1, 1, 2, 2, 1, 4],
                        [1, 1, 2, 4, 1, 2],
                        [1, 2, 2, 1, 1, 4],
                        [1, 2, 2, 4, 1, 1],
                        [1, 4, 2, 1, 1, 2],
                        [1, 4, 2, 2, 1, 1],
                        [2, 4, 1, 2, 1, 1],
                        [2, 2, 1, 1, 1, 4],
                        [4, 1, 3, 1, 1, 1],
                        [2, 4, 1, 1, 1, 2],
                        [1, 3, 4, 1, 1, 1],
                        [1, 1, 1, 2, 4, 2],
                        [1, 2, 1, 1, 4, 2],
                        [1, 2, 1, 2, 4, 1],
                        [1, 1, 4, 2, 1, 2],
                        [1, 2, 4, 1, 1, 2],
                        [1, 2, 4, 2, 1, 1],
                        [4, 1, 1, 2, 1, 2],
                        [4, 2, 1, 1, 1, 2],
                        [4, 2, 1, 2, 1, 1],
                        [2, 1, 2, 1, 4, 1],
                        [2, 1, 4, 1, 2, 1],
                        [4, 1, 2, 1, 2, 1],
                        [1, 1, 1, 1, 4, 3],
                        [1, 1, 1, 3, 4, 1],
                        [1, 3, 1, 1, 4, 1],
                        [1, 1, 4, 1, 1, 3],
                        [1, 1, 4, 3, 1, 1],
                        [4, 1, 1, 1, 1, 3],
                        [4, 1, 1, 3, 1, 1],
                        [1, 1, 3, 1, 4, 1],
                        [1, 1, 4, 1, 3, 1],
                        [3, 1, 1, 1, 4, 1],
                        [4, 1, 1, 1, 3, 1],
                        [2, 1, 1, 4, 1, 2],
                        [2, 1, 1, 2, 1, 4],
                        [2, 1, 1, 2, 3, 2],
                        [2, 3, 3, 1, 1, 1, 2],
                      ]),
                      (t.MAX_AVG_VARIANCE = 0.25),
                      (t.MAX_INDIVIDUAL_VARIANCE = 0.7),
                      (t.CODE_SHIFT = 98),
                      (t.CODE_CODE_C = 99),
                      (t.CODE_CODE_B = 100),
                      (t.CODE_CODE_A = 101),
                      (t.CODE_FNC_1 = 102),
                      (t.CODE_FNC_2 = 97),
                      (t.CODE_FNC_3 = 96),
                      (t.CODE_FNC_4_A = 101),
                      (t.CODE_FNC_4_B = 100),
                      (t.CODE_START_A = 103),
                      (t.CODE_START_B = 104),
                      (t.CODE_START_C = 105),
                      (t.CODE_STOP = 106),
                      t
                    );
                  })(u.default);
                t.default = d;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(2),
                  a = r(11),
                  s = r(4),
                  u = r(0),
                  c = r(9),
                  f = r(8),
                  l = r(3),
                  d = (function (e) {
                    function t(t, r) {
                      void 0 === t && (t = !1), void 0 === r && (r = !1);
                      var n = e.call(this) || this;
                      return (
                        (n.usingCheckDigit = t),
                        (n.extendedMode = r),
                        (n.decodeRowResult = ""),
                        (n.counters = new Array(9)),
                        n
                      );
                    }
                    return (
                      i(t, e),
                      (t.prototype.decodeRow = function (e, r, n) {
                        var i = this.counters;
                        i.fill(0), (this.decodeRowResult = "");
                        var s,
                          c,
                          d,
                          h = t.findAsteriskPattern(r, i),
                          p = r.getNextSet(h[1]),
                          v = r.getSize();
                        do {
                          t.recordPattern(r, p, i);
                          var g = t.toNarrowWidePattern(i);
                          if (g < 0) throw new u.default();
                          (s = t.patternToChar(g)),
                            (this.decodeRowResult += s),
                            (c = p);
                          for (var m = 0, y = i; m < y.length; m++) p += y[m];
                          p = r.getNextSet(p);
                        } while ("*" !== s);
                        this.decodeRowResult = this.decodeRowResult.substring(
                          0,
                          this.decodeRowResult.length - 1
                        );
                        for (var _ = 0, w = 0, C = i; w < C.length; w++)
                          _ += C[w];
                        if (p !== v && 2 * (p - c - _) < _)
                          throw new u.default();
                        if (this.usingCheckDigit) {
                          for (
                            var E = this.decodeRowResult.length - 1,
                              S = 0,
                              b = 0;
                            b < E;
                            b++
                          )
                            S += t.ALPHABET_STRING.indexOf(
                              this.decodeRowResult.charAt(b)
                            );
                          if (
                            this.decodeRowResult.charAt(E) !==
                            t.ALPHABET_STRING.charAt(S % 43)
                          )
                            throw new a.default();
                          this.decodeRowResult = this.decodeRowResult.substring(
                            0,
                            E
                          );
                        }
                        if (0 === this.decodeRowResult.length)
                          throw new u.default();
                        d = this.extendedMode
                          ? t.decodeExtended(this.decodeRowResult)
                          : this.decodeRowResult;
                        var T = (h[1] + h[0]) / 2,
                          A = c + _ / 2;
                        return new f.default(
                          d,
                          null,
                          0,
                          [new l.default(T, e), new l.default(A, e)],
                          o.default.CODE_39,
                          new Date().getTime()
                        );
                      }),
                      (t.findAsteriskPattern = function (e, r) {
                        for (
                          var n = e.getSize(),
                            i = e.getNextSet(0),
                            o = 0,
                            a = i,
                            s = !1,
                            c = r.length,
                            f = i;
                          f < n;
                          f++
                        )
                          if (e.get(f) !== s) r[o]++;
                          else {
                            if (o === c - 1) {
                              if (
                                this.toNarrowWidePattern(r) ===
                                  t.ASTERISK_ENCODING &&
                                e.isRange(
                                  Math.max(0, a - Math.floor((f - a) / 2)),
                                  a,
                                  !1
                                )
                              )
                                return [a, f];
                              (a += r[0] + r[1]),
                                r.copyWithin(0, 2, 2 + o - 1),
                                (r[o - 1] = 0),
                                (r[o] = 0),
                                o--;
                            } else o++;
                            (r[o] = 1), (s = !s);
                          }
                        throw new u.default();
                      }),
                      (t.toNarrowWidePattern = function (e) {
                        var t,
                          r = e.length,
                          n = 0;
                        do {
                          for (
                            var i = 2147483647, o = 0, a = e;
                            o < a.length;
                            o++
                          )
                            (f = a[o]) < i && f > n && (i = f);
                          (n = i), (t = 0);
                          for (var s = 0, u = 0, c = 0; c < r; c++)
                            (f = e[c]) > n &&
                              ((u |= 1 << (r - 1 - c)), t++, (s += f));
                          if (3 === t) {
                            for (c = 0; c < r && t > 0; c++) {
                              var f;
                              if ((f = e[c]) > n && (t--, 2 * f >= s))
                                return -1;
                            }
                            return u;
                          }
                        } while (t > 3);
                        return -1;
                      }),
                      (t.patternToChar = function (e) {
                        for (var r = 0; r < t.CHARACTER_ENCODINGS.length; r++)
                          if (t.CHARACTER_ENCODINGS[r] === e)
                            return t.ALPHABET_STRING.charAt(r);
                        if (e === t.ASTERISK_ENCODING) return "*";
                        throw new u.default();
                      }),
                      (t.decodeExtended = function (e) {
                        for (var t = e.length, r = "", n = 0; n < t; n++) {
                          var i = e.charAt(n);
                          if (
                            "+" === i ||
                            "$" === i ||
                            "%" === i ||
                            "/" === i
                          ) {
                            var o = e.charAt(n + 1),
                              a = "\0";
                            switch (i) {
                              case "+":
                                if (!(o >= "A" && o <= "Z"))
                                  throw new s.default();
                                a = String.fromCharCode(o.charCodeAt(0) + 32);
                                break;
                              case "$":
                                if (!(o >= "A" && o <= "Z"))
                                  throw new s.default();
                                a = String.fromCharCode(o.charCodeAt(0) - 64);
                                break;
                              case "%":
                                if (o >= "A" && o <= "E")
                                  a = String.fromCharCode(o.charCodeAt(0) - 38);
                                else if (o >= "F" && o <= "J")
                                  a = String.fromCharCode(o.charCodeAt(0) - 11);
                                else if (o >= "K" && o <= "O")
                                  a = String.fromCharCode(o.charCodeAt(0) + 16);
                                else if (o >= "P" && o <= "T")
                                  a = String.fromCharCode(o.charCodeAt(0) + 43);
                                else if ("U" === o) a = "\0";
                                else if ("V" === o) a = "@";
                                else if ("W" === o) a = "`";
                                else {
                                  if ("X" !== o && "Y" !== o && "Z" !== o)
                                    throw new s.default();
                                  a = "";
                                }
                                break;
                              case "/":
                                if (o >= "A" && o <= "O")
                                  a = String.fromCharCode(o.charCodeAt(0) - 32);
                                else {
                                  if ("Z" !== o) throw new s.default();
                                  a = ":";
                                }
                            }
                            (r += a), n++;
                          } else r += i;
                        }
                        return r;
                      }),
                      (t.ALPHABET_STRING =
                        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%"),
                      (t.CHARACTER_ENCODINGS = [
                        52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73,
                        328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19,
                        274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208,
                        133, 388, 196, 168, 162, 138, 42,
                      ]),
                      (t.ASTERISK_ENCODING = 148),
                      t
                    );
                  })(c.default);
                t.default = d;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(1),
                  i = (function () {
                    function e() {}
                    return (
                      (e.applyMaskPenaltyRule1 = function (t) {
                        return (
                          e.applyMaskPenaltyRule1Internal(t, !0) +
                          e.applyMaskPenaltyRule1Internal(t, !1)
                        );
                      }),
                      (e.applyMaskPenaltyRule2 = function (t) {
                        for (
                          var r = 0,
                            n = t.getArray(),
                            i = t.getWidth(),
                            o = t.getHeight(),
                            a = 0;
                          a < o - 1;
                          a++
                        )
                          for (var s = n[a], u = 0; u < i - 1; u++) {
                            var c = s[u];
                            c === s[u + 1] &&
                              c === n[a + 1][u] &&
                              c === n[a + 1][u + 1] &&
                              r++;
                          }
                        return e.N2 * r;
                      }),
                      (e.applyMaskPenaltyRule3 = function (t) {
                        for (
                          var r = 0,
                            n = t.getArray(),
                            i = t.getWidth(),
                            o = t.getHeight(),
                            a = 0;
                          a < o;
                          a++
                        )
                          for (var s = 0; s < i; s++) {
                            var u = n[a];
                            s + 6 < i &&
                              1 === u[s] &&
                              0 === u[s + 1] &&
                              1 === u[s + 2] &&
                              1 === u[s + 3] &&
                              1 === u[s + 4] &&
                              0 === u[s + 5] &&
                              1 === u[s + 6] &&
                              (e.isWhiteHorizontal(u, s - 4, s) ||
                                e.isWhiteHorizontal(u, s + 7, s + 11)) &&
                              r++,
                              a + 6 < o &&
                                1 === n[a][s] &&
                                0 === n[a + 1][s] &&
                                1 === n[a + 2][s] &&
                                1 === n[a + 3][s] &&
                                1 === n[a + 4][s] &&
                                0 === n[a + 5][s] &&
                                1 === n[a + 6][s] &&
                                (e.isWhiteVertical(n, s, a - 4, a) ||
                                  e.isWhiteVertical(n, s, a + 7, a + 11)) &&
                                r++;
                          }
                        return r * e.N3;
                      }),
                      (e.isWhiteHorizontal = function (e, t, r) {
                        (t = Math.max(t, 0)), (r = Math.min(r, e.length));
                        for (var n = t; n < r; n++) if (1 === e[n]) return !1;
                        return !0;
                      }),
                      (e.isWhiteVertical = function (e, t, r, n) {
                        (r = Math.max(r, 0)), (n = Math.min(n, e.length));
                        for (var i = r; i < n; i++)
                          if (1 === e[i][t]) return !1;
                        return !0;
                      }),
                      (e.applyMaskPenaltyRule4 = function (t) {
                        for (
                          var r = 0,
                            n = t.getArray(),
                            i = t.getWidth(),
                            o = t.getHeight(),
                            a = 0;
                          a < o;
                          a++
                        )
                          for (var s = n[a], u = 0; u < i; u++)
                            1 === s[u] && r++;
                        var c = t.getHeight() * t.getWidth();
                        return (
                          Math.floor((10 * Math.abs(2 * r - c)) / c) * e.N4
                        );
                      }),
                      (e.getDataMaskBit = function (e, t, r) {
                        var i, o;
                        switch (e) {
                          case 0:
                            i = (r + t) & 1;
                            break;
                          case 1:
                            i = 1 & r;
                            break;
                          case 2:
                            i = t % 3;
                            break;
                          case 3:
                            i = (r + t) % 3;
                            break;
                          case 4:
                            i = (Math.floor(r / 2) + Math.floor(t / 3)) & 1;
                            break;
                          case 5:
                            i = (1 & (o = r * t)) + (o % 3);
                            break;
                          case 6:
                            i = ((1 & (o = r * t)) + (o % 3)) & 1;
                            break;
                          case 7:
                            i = (((o = r * t) % 3) + ((r + t) & 1)) & 1;
                            break;
                          default:
                            throw new n.default("Invalid mask pattern: " + e);
                        }
                        return 0 === i;
                      }),
                      (e.applyMaskPenaltyRule1Internal = function (t, r) {
                        for (
                          var n = 0,
                            i = r ? t.getHeight() : t.getWidth(),
                            o = r ? t.getWidth() : t.getHeight(),
                            a = t.getArray(),
                            s = 0;
                          s < i;
                          s++
                        ) {
                          for (var u = 0, c = -1, f = 0; f < o; f++) {
                            var l = r ? a[s][f] : a[f][s];
                            l === c
                              ? u++
                              : (u >= 5 && (n += e.N1 + (u - 5)),
                                (u = 1),
                                (c = l));
                          }
                          u >= 5 && (n += e.N1 + (u - 5));
                        }
                        return n;
                      }),
                      (e.N1 = 3),
                      (e.N2 = 3),
                      (e.N3 = 40),
                      (e.N4 = 10),
                      e
                    );
                  })();
                t.default = i;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(23),
                  i = r(7),
                  o = r(1),
                  a = (function () {
                    function e(e) {
                      (this.field = e),
                        (this.cachedGenerators = []),
                        this.cachedGenerators.push(
                          new n.default(e, Int32Array.from([1]))
                        );
                    }
                    return (
                      (e.prototype.buildGenerator = function (e) {
                        var t = this.cachedGenerators;
                        if (e >= t.length)
                          for (
                            var r = t[t.length - 1],
                              i = this.field,
                              o = t.length;
                            o <= e;
                            o++
                          ) {
                            var a = r.multiply(
                              new n.default(
                                i,
                                Int32Array.from([
                                  1,
                                  i.exp(o - 1 + i.getGeneratorBase()),
                                ])
                              )
                            );
                            t.push(a), (r = a);
                          }
                        return t[e];
                      }),
                      (e.prototype.encode = function (e, t) {
                        if (0 === t)
                          throw new o.default("No error correction bytes");
                        var r = e.length - t;
                        if (r <= 0)
                          throw new o.default("No data bytes provided");
                        var a = this.buildGenerator(t),
                          s = new Int32Array(r);
                        i.default.arraycopy(e, 0, s, 0, r);
                        for (
                          var u = new n.default(this.field, s),
                            c = (u = u.multiplyByMonomial(t, 1))
                              .divide(a)[1]
                              .getCoefficients(),
                            f = t - c.length,
                            l = 0;
                          l < f;
                          l++
                        )
                          e[r + l] = 0;
                        i.default.arraycopy(c, 0, e, r + f, c.length);
                      }),
                      e
                    );
                  })();
                t.default = a;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(3),
                  i = r(17),
                  o = r(0),
                  a = (function () {
                    function e(t, r, n, i) {
                      (this.image = t),
                        (this.height = t.getHeight()),
                        (this.width = t.getWidth()),
                        null != r || (r = e.INIT_SIZE),
                        null != n || (n = (t.getWidth() / 2) | 0),
                        null != i || (i = (t.getHeight() / 2) | 0);
                      var a = (r / 2) | 0;
                      if (
                        ((this.leftInit = n - a),
                        (this.rightInit = n + a),
                        (this.upInit = i - a),
                        (this.downInit = i + a),
                        this.upInit < 0 ||
                          this.leftInit < 0 ||
                          this.downInit >= this.height ||
                          this.rightInit >= this.width)
                      )
                        throw new o.default();
                    }
                    return (
                      (e.prototype.detect = function () {
                        for (
                          var e = this.leftInit,
                            t = this.rightInit,
                            r = this.upInit,
                            n = this.downInit,
                            i = !1,
                            a = !0,
                            s = !1,
                            u = !1,
                            c = !1,
                            f = !1,
                            l = !1,
                            d = this.width,
                            h = this.height;
                          a;

                        ) {
                          a = !1;
                          for (var p = !0; (p || !u) && t < d; )
                            (p = this.containsBlackPoint(r, n, t, !1))
                              ? (t++, (a = !0), (u = !0))
                              : u || t++;
                          if (t >= d) {
                            i = !0;
                            break;
                          }
                          for (var v = !0; (v || !c) && n < h; )
                            (v = this.containsBlackPoint(e, t, n, !0))
                              ? (n++, (a = !0), (c = !0))
                              : c || n++;
                          if (n >= h) {
                            i = !0;
                            break;
                          }
                          for (var g = !0; (g || !f) && e >= 0; )
                            (g = this.containsBlackPoint(r, n, e, !1))
                              ? (e--, (a = !0), (f = !0))
                              : f || e--;
                          if (e < 0) {
                            i = !0;
                            break;
                          }
                          for (var m = !0; (m || !l) && r >= 0; )
                            (m = this.containsBlackPoint(e, t, r, !0))
                              ? (r--, (a = !0), (l = !0))
                              : l || r--;
                          if (r < 0) {
                            i = !0;
                            break;
                          }
                          a && (s = !0);
                        }
                        if (!i && s) {
                          for (
                            var y = t - e, _ = null, w = 1;
                            null === _ && w < y;
                            w++
                          )
                            _ = this.getBlackPointOnSegment(e, n - w, e + w, n);
                          if (null == _) throw new o.default();
                          var C = null;
                          for (w = 1; null === C && w < y; w++)
                            C = this.getBlackPointOnSegment(e, r + w, e + w, r);
                          if (null == C) throw new o.default();
                          var E = null;
                          for (w = 1; null === E && w < y; w++)
                            E = this.getBlackPointOnSegment(t, r + w, t - w, r);
                          if (null == E) throw new o.default();
                          var S = null;
                          for (w = 1; null === S && w < y; w++)
                            S = this.getBlackPointOnSegment(t, n - w, t - w, n);
                          if (null == S) throw new o.default();
                          return this.centerEdges(S, _, E, C);
                        }
                        throw new o.default();
                      }),
                      (e.prototype.getBlackPointOnSegment = function (
                        e,
                        t,
                        r,
                        o
                      ) {
                        for (
                          var a = i.default.round(
                              i.default.distance(e, t, r, o)
                            ),
                            s = (r - e) / a,
                            u = (o - t) / a,
                            c = this.image,
                            f = 0;
                          f < a;
                          f++
                        ) {
                          var l = i.default.round(e + f * s),
                            d = i.default.round(t + f * u);
                          if (c.get(l, d)) return new n.default(l, d);
                        }
                        return null;
                      }),
                      (e.prototype.centerEdges = function (t, r, i, o) {
                        var a = t.getX(),
                          s = t.getY(),
                          u = r.getX(),
                          c = r.getY(),
                          f = i.getX(),
                          l = i.getY(),
                          d = o.getX(),
                          h = o.getY(),
                          p = e.CORR;
                        return a < this.width / 2
                          ? [
                              new n.default(d - p, h + p),
                              new n.default(u + p, c + p),
                              new n.default(f - p, l - p),
                              new n.default(a + p, s - p),
                            ]
                          : [
                              new n.default(d + p, h + p),
                              new n.default(u + p, c - p),
                              new n.default(f - p, l + p),
                              new n.default(a - p, s - p),
                            ];
                      }),
                      (e.prototype.containsBlackPoint = function (e, t, r, n) {
                        var i = this.image;
                        if (n) {
                          for (var o = e; o <= t; o++)
                            if (i.get(o, r)) return !0;
                        } else
                          for (var a = e; a <= t; a++)
                            if (i.get(r, a)) return !0;
                        return !1;
                      }),
                      (e.INIT_SIZE = 10),
                      (e.CORR = 1),
                      e
                    );
                  })();
                t.default = a;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(0),
                  i = (function () {
                    function e() {}
                    return (
                      (e.checkAndNudgePoints = function (e, t) {
                        for (
                          var r = e.getWidth(),
                            i = e.getHeight(),
                            o = !0,
                            a = 0;
                          a < t.length && o;
                          a += 2
                        ) {
                          var s = Math.floor(t[a]),
                            u = Math.floor(t[a + 1]);
                          if (s < -1 || s > r || u < -1 || u > i)
                            throw new n.default();
                          (o = !1),
                            -1 === s
                              ? ((t[a] = 0), (o = !0))
                              : s === r && ((t[a] = r - 1), (o = !0)),
                            -1 === u
                              ? ((t[a + 1] = 0), (o = !0))
                              : u === i && ((t[a + 1] = i - 1), (o = !0));
                        }
                        for (o = !0, a = t.length - 2; a >= 0 && o; a -= 2) {
                          if (
                            ((s = Math.floor(t[a])),
                            (u = Math.floor(t[a + 1])),
                            s < -1 || s > r || u < -1 || u > i)
                          )
                            throw new n.default();
                          (o = !1),
                            -1 === s
                              ? ((t[a] = 0), (o = !0))
                              : s === r && ((t[a] = r - 1), (o = !0)),
                            -1 === u
                              ? ((t[a + 1] = 0), (o = !0))
                              : u === i && ((t[a + 1] = i - 1), (o = !0));
                        }
                      }),
                      e
                    );
                  })();
                t.default = i;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(52),
                  a = r(6),
                  s = r(31),
                  u = r(0),
                  c = (function (e) {
                    function t() {
                      return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                      i(t, e),
                      (t.prototype.sampleGrid = function (
                        e,
                        t,
                        r,
                        n,
                        i,
                        o,
                        a,
                        u,
                        c,
                        f,
                        l,
                        d,
                        h,
                        p,
                        v,
                        g,
                        m,
                        y,
                        _
                      ) {
                        var w = s.default.quadrilateralToQuadrilateral(
                          n,
                          i,
                          o,
                          a,
                          u,
                          c,
                          f,
                          l,
                          d,
                          h,
                          p,
                          v,
                          g,
                          m,
                          y,
                          _
                        );
                        return this.sampleGridWithTransform(e, t, r, w);
                      }),
                      (t.prototype.sampleGridWithTransform = function (
                        e,
                        t,
                        r,
                        n
                      ) {
                        if (t <= 0 || r <= 0) throw new u.default();
                        for (
                          var i = new a.default(t, r),
                            s = new Float32Array(2 * t),
                            c = 0;
                          c < r;
                          c++
                        ) {
                          for (
                            var f = s.length, l = c + 0.5, d = 0;
                            d < f;
                            d += 2
                          )
                            (s[d] = d / 2 + 0.5), (s[d + 1] = l);
                          n.transformPoints(s),
                            o.default.checkAndNudgePoints(e, s);
                          try {
                            for (d = 0; d < f; d += 2)
                              e.get(Math.floor(s[d]), Math.floor(s[d + 1])) &&
                                i.set(d / 2, c);
                          } catch (e) {
                            throw new u.default();
                          }
                        }
                        return i;
                      }),
                      t
                    );
                  })(o.default);
                t.default = c;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(1);
                !(function (e) {
                  (e[(e.TERMINATOR = 0)] = "TERMINATOR"),
                    (e[(e.NUMERIC = 1)] = "NUMERIC"),
                    (e[(e.ALPHANUMERIC = 2)] = "ALPHANUMERIC"),
                    (e[(e.STRUCTURED_APPEND = 3)] = "STRUCTURED_APPEND"),
                    (e[(e.BYTE = 4)] = "BYTE"),
                    (e[(e.ECI = 5)] = "ECI"),
                    (e[(e.KANJI = 6)] = "KANJI"),
                    (e[(e.FNC1_FIRST_POSITION = 7)] = "FNC1_FIRST_POSITION"),
                    (e[(e.FNC1_SECOND_POSITION = 8)] = "FNC1_SECOND_POSITION"),
                    (e[(e.HANZI = 9)] = "HANZI");
                })(t.ModeValues || (t.ModeValues = {}));
                var i = (function () {
                  function e(t, r, n, i) {
                    (this.value = t),
                      (this.stringValue = r),
                      (this.characterCountBitsForVersions = n),
                      (this.bits = i),
                      e.FOR_BITS.set(i, this),
                      e.FOR_VALUE.set(t, this);
                  }
                  return (
                    (e.forBits = function (t) {
                      var r = e.FOR_BITS.get(t);
                      if (void 0 === r) throw new n.default();
                      return r;
                    }),
                    (e.prototype.getCharacterCountBits = function (e) {
                      var t,
                        r = e.getVersionNumber();
                      return (
                        (t = r <= 9 ? 0 : r <= 26 ? 1 : 2),
                        this.characterCountBitsForVersions[t]
                      );
                    }),
                    (e.prototype.getValue = function () {
                      return this.value;
                    }),
                    (e.prototype.getBits = function () {
                      return this.bits;
                    }),
                    (e.prototype.equals = function (t) {
                      if (!(t instanceof e)) return !1;
                      var r = t;
                      return this.value === r.value;
                    }),
                    (e.prototype.toString = function () {
                      return this.stringValue;
                    }),
                    (e.FOR_BITS = new Map()),
                    (e.FOR_VALUE = new Map()),
                    (e.TERMINATOR = new e(
                      0,
                      "TERMINATOR",
                      Int32Array.from([0, 0, 0]),
                      0
                    )),
                    (e.NUMERIC = new e(
                      1,
                      "NUMERIC",
                      Int32Array.from([10, 12, 14]),
                      1
                    )),
                    (e.ALPHANUMERIC = new e(
                      2,
                      "ALPHANUMERIC",
                      Int32Array.from([9, 11, 13]),
                      2
                    )),
                    (e.STRUCTURED_APPEND = new e(
                      3,
                      "STRUCTURED_APPEND",
                      Int32Array.from([0, 0, 0]),
                      3
                    )),
                    (e.BYTE = new e(
                      4,
                      "BYTE",
                      Int32Array.from([8, 16, 16]),
                      4
                    )),
                    (e.ECI = new e(5, "ECI", Int32Array.from([0, 0, 0]), 7)),
                    (e.KANJI = new e(
                      6,
                      "KANJI",
                      Int32Array.from([8, 10, 12]),
                      8
                    )),
                    (e.FNC1_FIRST_POSITION = new e(
                      7,
                      "FNC1_FIRST_POSITION",
                      Int32Array.from([0, 0, 0]),
                      5
                    )),
                    (e.FNC1_SECOND_POSITION = new e(
                      8,
                      "FNC1_SECOND_POSITION",
                      Int32Array.from([0, 0, 0]),
                      9
                    )),
                    (e.HANZI = new e(
                      9,
                      "HANZI",
                      Int32Array.from([8, 10, 12]),
                      13
                    )),
                    e
                  );
                })();
                t.default = i;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(15),
                  i = (function () {
                    function e() {}
                    return (
                      (e.prototype.StringUtils = function () {}),
                      (e.guessEncoding = function (t, r) {
                        if (null != r && void 0 !== r.get(4))
                          return r.get(4).toString();
                        for (
                          var n = t.length,
                            i = !0,
                            o = !0,
                            a = !0,
                            s = 0,
                            u = 0,
                            c = 0,
                            f = 0,
                            l = 0,
                            d = 0,
                            h = 0,
                            p = 0,
                            v = 0,
                            g = 0,
                            m = 0,
                            y =
                              t.length > 3 &&
                              239 === t[0] &&
                              187 === t[1] &&
                              191 === t[2],
                            _ = 0;
                          _ < n && (i || o || a);
                          _++
                        ) {
                          var w = 255 & t[_];
                          a &&
                            (s > 0
                              ? 0 == (128 & w)
                                ? (a = !1)
                                : s--
                              : 0 != (128 & w) &&
                                (0 == (64 & w)
                                  ? (a = !1)
                                  : (s++,
                                    0 == (32 & w)
                                      ? u++
                                      : (s++,
                                        0 == (16 & w)
                                          ? c++
                                          : (s++,
                                            0 == (8 & w) ? f++ : (a = !1)))))),
                            i &&
                              (w > 127 && w < 160
                                ? (i = !1)
                                : w > 159 &&
                                  (w < 192 || 215 === w || 247 === w) &&
                                  m++),
                            o &&
                              (l > 0
                                ? w < 64 || 127 === w || w > 252
                                  ? (o = !1)
                                  : l--
                                : 128 === w || 160 === w || w > 239
                                ? (o = !1)
                                : w > 160 && w < 224
                                ? (d++, (p = 0), ++h > v && (v = h))
                                : w > 127
                                ? (l++, (h = 0), ++p > g && (g = p))
                                : ((h = 0), (p = 0)));
                        }
                        return (
                          a && s > 0 && (a = !1),
                          o && l > 0 && (o = !1),
                          a && (y || u + c + f > 0)
                            ? e.UTF8
                            : o && (e.ASSUME_SHIFT_JIS || v >= 3 || g >= 3)
                            ? e.SHIFT_JIS
                            : i && o
                            ? (2 === v && 2 === d) || 10 * m >= n
                              ? e.SHIFT_JIS
                              : e.ISO88591
                            : i
                            ? e.ISO88591
                            : o
                            ? e.SHIFT_JIS
                            : a
                            ? e.UTF8
                            : e.PLATFORM_DEFAULT_ENCODING
                        );
                      }),
                      (e.SHIFT_JIS = n.default.SJIS.getName()),
                      (e.GB2312 = "GB2312"),
                      (e.ISO88591 = n.default.ISO8859_1.getName()),
                      (e.EUC_JP = "EUC_JP"),
                      (e.UTF8 = n.default.UTF8.getName()),
                      (e.PLATFORM_DEFAULT_ENCODING = e.UTF8),
                      (e.ASSUME_SHIFT_JIS = !1),
                      e
                    );
                  })();
                t.default = i;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e(e) {
                    this.mirrored = e;
                  }
                  return (
                    (e.prototype.isMirrored = function () {
                      return this.mirrored;
                    }),
                    (e.prototype.applyMirroredCorrection = function (e) {
                      if (this.mirrored && null !== e && !(e.length < 3)) {
                        var t = e[0];
                        (e[0] = e[2]), (e[2] = t);
                      }
                    }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(22),
                  i = r(24),
                  o = (function () {
                    function e(e) {
                      (this.errorCorrectionLevel = n.default.forBits(
                        (e >> 3) & 3
                      )),
                        (this.dataMask = 7 & e);
                    }
                    return (
                      (e.numBitsDiffering = function (e, t) {
                        return i.default.bitCount(e ^ t);
                      }),
                      (e.decodeFormatInformation = function (t, r) {
                        var n = e.doDecodeFormatInformation(t, r);
                        return null !== n
                          ? n
                          : e.doDecodeFormatInformation(
                              t ^ e.FORMAT_INFO_MASK_QR,
                              r ^ e.FORMAT_INFO_MASK_QR
                            );
                      }),
                      (e.doDecodeFormatInformation = function (t, r) {
                        for (
                          var n = Number.MAX_SAFE_INTEGER,
                            i = 0,
                            o = 0,
                            a = e.FORMAT_INFO_DECODE_LOOKUP;
                          o < a.length;
                          o++
                        ) {
                          var s = a[o],
                            u = s[0];
                          if (u === t || u === r) return new e(s[1]);
                          var c = e.numBitsDiffering(t, u);
                          c < n && ((i = s[1]), (n = c)),
                            t !== r &&
                              (c = e.numBitsDiffering(r, u)) < n &&
                              ((i = s[1]), (n = c));
                        }
                        return n <= 3 ? new e(i) : null;
                      }),
                      (e.prototype.getErrorCorrectionLevel = function () {
                        return this.errorCorrectionLevel;
                      }),
                      (e.prototype.getDataMask = function () {
                        return this.dataMask;
                      }),
                      (e.prototype.hashCode = function () {
                        return (
                          (this.errorCorrectionLevel.getBits() << 3) |
                          this.dataMask
                        );
                      }),
                      (e.prototype.equals = function (t) {
                        if (!(t instanceof e)) return !1;
                        var r = t;
                        return (
                          this.errorCorrectionLevel ===
                            r.errorCorrectionLevel &&
                          this.dataMask === r.dataMask
                        );
                      }),
                      (e.FORMAT_INFO_MASK_QR = 21522),
                      (e.FORMAT_INFO_DECODE_LOOKUP = [
                        Int32Array.from([21522, 0]),
                        Int32Array.from([20773, 1]),
                        Int32Array.from([24188, 2]),
                        Int32Array.from([23371, 3]),
                        Int32Array.from([17913, 4]),
                        Int32Array.from([16590, 5]),
                        Int32Array.from([20375, 6]),
                        Int32Array.from([19104, 7]),
                        Int32Array.from([30660, 8]),
                        Int32Array.from([29427, 9]),
                        Int32Array.from([32170, 10]),
                        Int32Array.from([30877, 11]),
                        Int32Array.from([26159, 12]),
                        Int32Array.from([25368, 13]),
                        Int32Array.from([27713, 14]),
                        Int32Array.from([26998, 15]),
                        Int32Array.from([5769, 16]),
                        Int32Array.from([5054, 17]),
                        Int32Array.from([7399, 18]),
                        Int32Array.from([6608, 19]),
                        Int32Array.from([1890, 20]),
                        Int32Array.from([597, 21]),
                        Int32Array.from([3340, 22]),
                        Int32Array.from([2107, 23]),
                        Int32Array.from([13663, 24]),
                        Int32Array.from([12392, 25]),
                        Int32Array.from([16177, 26]),
                        Int32Array.from([14854, 27]),
                        Int32Array.from([9396, 28]),
                        Int32Array.from([8579, 29]),
                        Int32Array.from([11994, 30]),
                        Int32Array.from([11245, 31]),
                      ]),
                      e
                    );
                  })();
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return i(t, e), t;
                })(r(5).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return i(t, e), t;
                })(r(5).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e(e) {
                    this.source = e;
                  }
                  return (
                    (e.prototype.getLuminanceSource = function () {
                      return this.source;
                    }),
                    (e.prototype.getWidth = function () {
                      return this.source.getWidth();
                    }),
                    (e.prototype.getHeight = function () {
                      return this.source.getHeight();
                    }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(60),
                  a = r(14),
                  s = r(6),
                  u = r(0),
                  c = (function (e) {
                    function t(r) {
                      var n = e.call(this, r) || this;
                      return (
                        (n.luminances = t.EMPTY),
                        (n.buckets = new Int32Array(t.LUMINANCE_BUCKETS)),
                        n
                      );
                    }
                    return (
                      i(t, e),
                      (t.prototype.getBlackRow = function (e, r) {
                        var n = this.getLuminanceSource(),
                          i = n.getWidth();
                        null == r || r.getSize() < i
                          ? (r = new a.default(i))
                          : r.clear(),
                          this.initArrays(i);
                        for (
                          var o = n.getRow(e, this.luminances),
                            s = this.buckets,
                            u = 0;
                          u < i;
                          u++
                        )
                          s[(255 & o[u]) >> t.LUMINANCE_SHIFT]++;
                        var c = t.estimateBlackPoint(s);
                        if (i < 3)
                          for (u = 0; u < i; u++) (255 & o[u]) < c && r.set(u);
                        else {
                          var f = 255 & o[0],
                            l = 255 & o[1];
                          for (u = 1; u < i - 1; u++) {
                            var d = 255 & o[u + 1];
                            (4 * l - f - d) / 2 < c && r.set(u),
                              (f = l),
                              (l = d);
                          }
                        }
                        return r;
                      }),
                      (t.prototype.getBlackMatrix = function () {
                        var e = this.getLuminanceSource(),
                          r = e.getWidth(),
                          n = e.getHeight(),
                          i = new s.default(r, n);
                        this.initArrays(r);
                        for (var o = this.buckets, a = 1; a < 5; a++)
                          for (
                            var u = (n * a) / 5,
                              c = e.getRow(u, this.luminances),
                              f = Math.floor((4 * r) / 5),
                              l = Math.floor(r / 5);
                            l < f;
                            l++
                          )
                            o[(255 & c[l]) >> t.LUMINANCE_SHIFT]++;
                        var d = t.estimateBlackPoint(o),
                          h = e.getMatrix();
                        for (a = 0; a < n; a++) {
                          var p = a * r;
                          for (l = 0; l < r; l++)
                            (255 & h[p + l]) < d && i.set(l, a);
                        }
                        return i;
                      }),
                      (t.prototype.createBinarizer = function (e) {
                        return new t(e);
                      }),
                      (t.prototype.initArrays = function (e) {
                        this.luminances.length < e &&
                          (this.luminances = new Uint8ClampedArray(e));
                        for (
                          var r = this.buckets, n = 0;
                          n < t.LUMINANCE_BUCKETS;
                          n++
                        )
                          r[n] = 0;
                      }),
                      (t.estimateBlackPoint = function (e) {
                        for (
                          var r = e.length, n = 0, i = 0, o = 0, a = 0;
                          a < r;
                          a++
                        )
                          e[a] > o && ((i = a), (o = e[a])),
                            e[a] > n && (n = e[a]);
                        var s = 0,
                          c = 0;
                        for (a = 0; a < r; a++) {
                          var f = a - i;
                          (p = e[a] * f * f) > c && ((s = a), (c = p));
                        }
                        if (i > s) {
                          var l = i;
                          (i = s), (s = l);
                        }
                        if (s - i <= r / 16) throw new u.default();
                        var d = s - 1,
                          h = -1;
                        for (a = s - 1; a > i; a--) {
                          var p,
                            v = a - i;
                          (p = v * v * (s - a) * (n - e[a])) > h &&
                            ((d = a), (h = p));
                        }
                        return d << t.LUMINANCE_SHIFT;
                      }),
                      (t.LUMINANCE_BITS = 5),
                      (t.LUMINANCE_SHIFT = 8 - t.LUMINANCE_BITS),
                      (t.LUMINANCE_BUCKETS = 1 << t.LUMINANCE_BITS),
                      (t.EMPTY = Uint8ClampedArray.from([0])),
                      t
                    );
                  })(o.default);
                t.default = c;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(61),
                  a = r(6),
                  s = (function (e) {
                    function t(t) {
                      var r = e.call(this, t) || this;
                      return (r.matrix = null), r;
                    }
                    return (
                      i(t, e),
                      (t.prototype.getBlackMatrix = function () {
                        if (null !== this.matrix) return this.matrix;
                        var r = this.getLuminanceSource(),
                          n = r.getWidth(),
                          i = r.getHeight();
                        if (
                          n >= t.MINIMUM_DIMENSION &&
                          i >= t.MINIMUM_DIMENSION
                        ) {
                          var o = r.getMatrix(),
                            s = n >> t.BLOCK_SIZE_POWER;
                          0 != (n & t.BLOCK_SIZE_MASK) && s++;
                          var u = i >> t.BLOCK_SIZE_POWER;
                          0 != (i & t.BLOCK_SIZE_MASK) && u++;
                          var c = t.calculateBlackPoints(o, s, u, n, i),
                            f = new a.default(n, i);
                          t.calculateThresholdForBlock(o, s, u, n, i, c, f),
                            (this.matrix = f);
                        } else
                          this.matrix = e.prototype.getBlackMatrix.call(this);
                        return this.matrix;
                      }),
                      (t.prototype.createBinarizer = function (e) {
                        return new t(e);
                      }),
                      (t.calculateThresholdForBlock = function (
                        e,
                        r,
                        n,
                        i,
                        o,
                        a,
                        s
                      ) {
                        for (
                          var u = o - t.BLOCK_SIZE, c = i - t.BLOCK_SIZE, f = 0;
                          f < n;
                          f++
                        ) {
                          var l = f << t.BLOCK_SIZE_POWER;
                          l > u && (l = u);
                          for (var d = t.cap(f, 2, n - 3), h = 0; h < r; h++) {
                            var p = h << t.BLOCK_SIZE_POWER;
                            p > c && (p = c);
                            for (
                              var v = t.cap(h, 2, r - 3), g = 0, m = -2;
                              m <= 2;
                              m++
                            ) {
                              var y = a[d + m];
                              g +=
                                y[v - 2] +
                                y[v - 1] +
                                y[v] +
                                y[v + 1] +
                                y[v + 2];
                            }
                            var _ = g / 25;
                            t.thresholdBlock(e, p, l, _, i, s);
                          }
                        }
                      }),
                      (t.cap = function (e, t, r) {
                        return e < t ? t : e > r ? r : e;
                      }),
                      (t.thresholdBlock = function (e, r, n, i, o, a) {
                        for (
                          var s = 0, u = n * o + r;
                          s < t.BLOCK_SIZE;
                          s++, u += o
                        )
                          for (var c = 0; c < t.BLOCK_SIZE; c++)
                            (255 & e[u + c]) <= i && a.set(r + c, n + s);
                      }),
                      (t.calculateBlackPoints = function (e, r, n, i, o) {
                        for (
                          var a = o - t.BLOCK_SIZE,
                            s = i - t.BLOCK_SIZE,
                            u = new Array(n),
                            c = 0;
                          c < n;
                          c++
                        ) {
                          u[c] = new Int32Array(r);
                          var f = c << t.BLOCK_SIZE_POWER;
                          f > a && (f = a);
                          for (var l = 0; l < r; l++) {
                            var d = l << t.BLOCK_SIZE_POWER;
                            d > s && (d = s);
                            for (
                              var h = 0, p = 255, v = 0, g = 0, m = f * i + d;
                              g < t.BLOCK_SIZE;
                              g++, m += i
                            ) {
                              for (var y = 0; y < t.BLOCK_SIZE; y++) {
                                var _ = 255 & e[m + y];
                                (h += _), _ < p && (p = _), _ > v && (v = _);
                              }
                              if (v - p > t.MIN_DYNAMIC_RANGE)
                                for (g++, m += i; g < t.BLOCK_SIZE; g++, m += i)
                                  for (y = 0; y < t.BLOCK_SIZE; y++)
                                    h += 255 & e[m + y];
                            }
                            var w = h >> (2 * t.BLOCK_SIZE_POWER);
                            if (
                              v - p <= t.MIN_DYNAMIC_RANGE &&
                              ((w = p / 2), c > 0 && l > 0)
                            ) {
                              var C =
                                (u[c - 1][l] +
                                  2 * u[c][l - 1] +
                                  u[c - 1][l - 1]) /
                                4;
                              p < C && (w = C);
                            }
                            u[c][l] = w;
                          }
                        }
                        return u;
                      }),
                      (t.BLOCK_SIZE_POWER = 3),
                      (t.BLOCK_SIZE = 1 << t.BLOCK_SIZE_POWER),
                      (t.BLOCK_SIZE_MASK = t.BLOCK_SIZE - 1),
                      (t.MINIMUM_DIMENSION = 5 * t.BLOCK_SIZE),
                      (t.MIN_DYNAMIC_RANGE = 24),
                      t
                    );
                  })(o.default);
                t.default = s;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(1),
                  i = (function () {
                    function e(e) {
                      if (((this.binarizer = e), null === e))
                        throw new n.default("Binarizer must be non-null.");
                    }
                    return (
                      (e.prototype.getWidth = function () {
                        return this.binarizer.getWidth();
                      }),
                      (e.prototype.getHeight = function () {
                        return this.binarizer.getHeight();
                      }),
                      (e.prototype.getBlackRow = function (e, t) {
                        return this.binarizer.getBlackRow(e, t);
                      }),
                      (e.prototype.getBlackMatrix = function () {
                        return (
                          (null !== this.matrix && void 0 !== this.matrix) ||
                            (this.matrix = this.binarizer.getBlackMatrix()),
                          this.matrix
                        );
                      }),
                      (e.prototype.isCropSupported = function () {
                        return this.binarizer
                          .getLuminanceSource()
                          .isCropSupported();
                      }),
                      (e.prototype.crop = function (t, r, n, i) {
                        var o = this.binarizer
                          .getLuminanceSource()
                          .crop(t, r, n, i);
                        return new e(this.binarizer.createBinarizer(o));
                      }),
                      (e.prototype.isRotateSupported = function () {
                        return this.binarizer
                          .getLuminanceSource()
                          .isRotateSupported();
                      }),
                      (e.prototype.rotateCounterClockwise = function () {
                        var t = this.binarizer
                          .getLuminanceSource()
                          .rotateCounterClockwise();
                        return new e(this.binarizer.createBinarizer(t));
                      }),
                      (e.prototype.rotateCounterClockwise45 = function () {
                        var t = this.binarizer
                          .getLuminanceSource()
                          .rotateCounterClockwise45();
                        return new e(this.binarizer.createBinarizer(t));
                      }),
                      (e.prototype.toString = function () {
                        try {
                          return this.getBlackMatrix().toString();
                        } catch (e) {
                          return "";
                        }
                      }),
                      e
                    );
                  })();
                t.default = i;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                t.VideoInputDevice = function (e, t) {
                  (this.deviceId = e), (this.label = t);
                };
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(19),
                  a = r(18),
                  s = r(1),
                  u = (function (e) {
                    function t(r) {
                      var n = e.call(this, r.width, r.height) || this;
                      return (
                        (n.canvas = r),
                        (n.tempCanvasElement = null),
                        (n.buffer = t.makeBufferFromCanvasImageData(r)),
                        n
                      );
                    }
                    return (
                      i(t, e),
                      (t.makeBufferFromCanvasImageData = function (e) {
                        var r = e
                          .getContext("2d")
                          .getImageData(0, 0, e.width, e.height);
                        return t.toGrayscaleBuffer(r.data, e.width, e.height);
                      }),
                      (t.toGrayscaleBuffer = function (e, t, r) {
                        for (
                          var n = new Uint8ClampedArray(t * r),
                            i = 0,
                            o = 0,
                            a = e.length;
                          i < a;
                          i += 4, o++
                        ) {
                          var s;
                          (s =
                            0 === e[i + 3]
                              ? 255
                              : (306 * e[i] +
                                  601 * e[i + 1] +
                                  117 * e[i + 2] +
                                  512) >>
                                10),
                            (n[o] = s);
                        }
                        return n;
                      }),
                      (t.prototype.getRow = function (e, t) {
                        if (e < 0 || e >= this.getHeight())
                          throw new s.default(
                            "Requested row is outside the image: " + e
                          );
                        var r = this.getWidth(),
                          n = e * r;
                        return (
                          null === t
                            ? (t = this.buffer.slice(n, n + r))
                            : (t.length < r && (t = new Uint8ClampedArray(r)),
                              t.set(this.buffer.slice(n, n + r))),
                          t
                        );
                      }),
                      (t.prototype.getMatrix = function () {
                        return this.buffer;
                      }),
                      (t.prototype.isCropSupported = function () {
                        return !0;
                      }),
                      (t.prototype.crop = function (e, t, r, n) {
                        return this.crop(e, t, r, n), this;
                      }),
                      (t.prototype.isRotateSupported = function () {
                        return !0;
                      }),
                      (t.prototype.rotateCounterClockwise = function () {
                        return this.rotate(-90), this;
                      }),
                      (t.prototype.rotateCounterClockwise45 = function () {
                        return this.rotate(-45), this;
                      }),
                      (t.prototype.getTempCanvasElement = function () {
                        if (null === this.tempCanvasElement) {
                          var e =
                            this.canvas.ownerDocument.createElement("canvas");
                          (e.style.width = this.canvas.width + "px"),
                            (e.style.height = this.canvas.height + "px"),
                            (this.tempCanvasElement = e);
                        }
                        return this.tempCanvasElement;
                      }),
                      (t.prototype.rotate = function (e) {
                        var r = this.getTempCanvasElement(),
                          n = r.getContext("2d");
                        return (
                          n.rotate(e * t.DEGREE_TO_RADIANS),
                          n.drawImage(this.canvas, 0, 0),
                          (this.buffer = t.makeBufferFromCanvasImageData(r)),
                          this
                        );
                      }),
                      (t.prototype.invert = function () {
                        return new o.default(this);
                      }),
                      (t.DEGREE_TO_RADIANS = Math.PI / 180),
                      t
                    );
                  })(a.default);
                t.HTMLCanvasElementLuminanceSource = u;
              },
              function (e, t, r) {
                "use strict";
                function n(e) {
                  for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  n(r(103)),
                  n(r(87)),
                  n(r(80)),
                  n(r(76)),
                  n(r(25)),
                  n(r(65)),
                  n(r(64));
                var i = r(5);
                t.Exception = i.default;
                var o = r(40);
                t.ArgumentException = o.default;
                var a = r(59);
                t.ArithmeticException = a.default;
                var s = r(11);
                t.ChecksumException = s.default;
                var u = r(4);
                t.FormatException = u.default;
                var c = r(1);
                t.IllegalArgumentException = c.default;
                var f = r(16);
                t.IllegalStateException = f.default;
                var l = r(0);
                t.NotFoundException = l.default;
                var d = r(44);
                t.ReaderException = d.default;
                var h = r(58);
                t.ReedSolomonException = h.default;
                var p = r(42);
                t.UnsupportedOperationException = p.default;
                var v = r(27);
                t.WriterException = v.default;
                var g = r(2);
                t.BarcodeFormat = g.default;
                var m = r(60);
                t.Binarizer = m.default;
                var y = r(63);
                t.BinaryBitmap = y.default;
                var _ = r(71);
                t.DecodeHintType = _.default;
                var w = r(19);
                t.InvertedLuminanceSource = w.default;
                var C = r(18);
                t.LuminanceSource = C.default;
                var E = r(70);
                t.MultiFormatReader = E.default;
                var S = r(69);
                t.MultiFormatWriter = S.default;
                var b = r(68);
                t.PlanarYUVLuminanceSource = b.default;
                var T = r(8);
                t.Result = T.default;
                var A = r(10);
                t.ResultMetadataType = A.default;
                var O = r(67);
                t.RGBLuminanceSource = O.default;
                var I = r(14);
                t.BitArray = I.default;
                var R = r(6);
                t.BitMatrix = R.default;
                var P = r(36);
                t.BitSource = P.default;
                var M = r(15);
                t.CharacterSetECI = M.default;
                var N = r(35);
                t.DecoderResult = N.default;
                var D = r(53);
                t.DefaultGridSampler = D.default;
                var k = r(33);
                t.DetectorResult = k.default;
                var x = r(21);
                t.EncodeHintType = x.default;
                var B = r(61);
                t.GlobalHistogramBinarizer = B.default;
                var L = r(52);
                t.GridSampler = L.default;
                var j = r(32);
                t.GridSamplerInstance = j.default;
                var F = r(62);
                t.HybridBinarizer = F.default;
                var U = r(31);
                t.PerspectiveTransform = U.default;
                var z = r(55);
                t.StringUtils = z.default;
                var V = r(17);
                t.MathUtils = V.default;
                var G = r(51);
                t.WhiteRectangleDetector = G.default;
                var H = r(13);
                t.GenericGF = H.default;
                var W = r(23);
                t.GenericGFPoly = W.default;
                var X = r(38);
                t.ReedSolomonDecoder = X.default;
                var Y = r(50);
                t.ReedSolomonEncoder = Y.default;
                var K = r(30);
                t.DataMatrixReader = K.default;
                var Z = r(39);
                t.QRCodeReader = Z.default;
                var q = r(43);
                t.QRCodeWriter = q.default;
                var J = r(22);
                t.QRCodeDecoderErrorCorrectionLevel = J.default;
                var Q = r(29);
                t.QRCodeEncoder = Q.default;
                var $ = r(28);
                t.QRCodeEncoderQRCode = $.default;
                var ee = r(9);
                t.OneDReader = ee.default;
                var te = r(45);
                t.EAN13Reader = te.default;
                var re = r(47);
                t.Code128Reader = re.default;
                var ne = r(46);
                t.ITFReader = ne.default;
                var ie = r(48);
                t.Code39Reader = ie.default;
                var oe = r(26);
                t.MultiformatReader = oe.default;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 }), r(19);
                var o = r(19),
                  a = r(18),
                  s = r(7),
                  u = r(1),
                  c = (function (e) {
                    function t(t, r, n, i, o, a, s) {
                      var c = e.call(this, r, n) || this;
                      if (
                        ((c.dataWidth = i),
                        (c.dataHeight = o),
                        (c.left = a),
                        (c.top = s),
                        4 === t.BYTES_PER_ELEMENT)
                      ) {
                        for (
                          var f = r * n, l = new Uint8ClampedArray(f), d = 0;
                          d < f;
                          d++
                        ) {
                          var h = t[d],
                            p = (h >> 16) & 255,
                            v = (h >> 7) & 510,
                            g = 255 & h;
                          l[d] = ((p + v + g) / 4) & 255;
                        }
                        c.luminances = l;
                      } else c.luminances = t;
                      if (
                        (void 0 === i && (c.dataWidth = r),
                        void 0 === o && (c.dataHeight = n),
                        void 0 === a && (c.left = 0),
                        void 0 === s && (c.top = 0),
                        c.left + r > c.dataWidth || c.top + n > c.dataHeight)
                      )
                        throw new u.default(
                          "Crop rectangle does not fit within image data."
                        );
                      return c;
                    }
                    return (
                      i(t, e),
                      (t.prototype.getRow = function (e, t) {
                        if (e < 0 || e >= this.getHeight())
                          throw new u.default(
                            "Requested row is outside the image: " + e
                          );
                        var r = this.getWidth();
                        (null == t || t.length < r) &&
                          (t = new Uint8ClampedArray(r));
                        var n = (e + this.top) * this.dataWidth + this.left;
                        return (
                          s.default.arraycopy(this.luminances, n, t, 0, r), t
                        );
                      }),
                      (t.prototype.getMatrix = function () {
                        var e = this.getWidth(),
                          t = this.getHeight();
                        if (e === this.dataWidth && t === this.dataHeight)
                          return this.luminances;
                        var r = e * t,
                          n = new Uint8ClampedArray(r),
                          i = this.top * this.dataWidth + this.left;
                        if (e === this.dataWidth)
                          return (
                            s.default.arraycopy(this.luminances, i, n, 0, r), n
                          );
                        for (var o = 0; o < t; o++) {
                          var a = o * e;
                          s.default.arraycopy(this.luminances, i, n, a, e),
                            (i += this.dataWidth);
                        }
                        return n;
                      }),
                      (t.prototype.isCropSupported = function () {
                        return !0;
                      }),
                      (t.prototype.crop = function (e, r, n, i) {
                        return new t(
                          this.luminances,
                          n,
                          i,
                          this.dataWidth,
                          this.dataHeight,
                          this.left + e,
                          this.top + r
                        );
                      }),
                      (t.prototype.invert = function () {
                        return new o.default(this);
                      }),
                      t
                    );
                  })(a.default);
                t.default = c;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(7),
                  a = r(18),
                  s = r(19),
                  u = r(1),
                  c = (function (e) {
                    function t(t, r, n, i, o, a, s, c) {
                      var f = e.call(this, a, s) || this;
                      if (
                        ((f.yuvData = t),
                        (f.dataWidth = r),
                        (f.dataHeight = n),
                        (f.left = i),
                        (f.top = o),
                        i + a > r || o + s > n)
                      )
                        throw new u.default(
                          "Crop rectangle does not fit within image data."
                        );
                      return c && f.reverseHorizontal(a, s), f;
                    }
                    return (
                      i(t, e),
                      (t.prototype.getRow = function (e, t) {
                        if (e < 0 || e >= this.getHeight())
                          throw new u.default(
                            "Requested row is outside the image: " + e
                          );
                        var r = this.getWidth();
                        (null == t || t.length < r) &&
                          (t = new Uint8ClampedArray(r));
                        var n = (e + this.top) * this.dataWidth + this.left;
                        return o.default.arraycopy(this.yuvData, n, t, 0, r), t;
                      }),
                      (t.prototype.getMatrix = function () {
                        var e = this.getWidth(),
                          t = this.getHeight();
                        if (e === this.dataWidth && t === this.dataHeight)
                          return this.yuvData;
                        var r = e * t,
                          n = new Uint8ClampedArray(r),
                          i = this.top * this.dataWidth + this.left;
                        if (e === this.dataWidth)
                          return (
                            o.default.arraycopy(this.yuvData, i, n, 0, r), n
                          );
                        for (var a = 0; a < t; a++) {
                          var s = a * e;
                          o.default.arraycopy(this.yuvData, i, n, s, e),
                            (i += this.dataWidth);
                        }
                        return n;
                      }),
                      (t.prototype.isCropSupported = function () {
                        return !0;
                      }),
                      (t.prototype.crop = function (e, r, n, i) {
                        return new t(
                          this.yuvData,
                          this.dataWidth,
                          this.dataHeight,
                          this.left + e,
                          this.top + r,
                          n,
                          i,
                          !1
                        );
                      }),
                      (t.prototype.renderThumbnail = function () {
                        for (
                          var e = this.getWidth() / t.THUMBNAIL_SCALE_FACTOR,
                            r = this.getHeight() / t.THUMBNAIL_SCALE_FACTOR,
                            n = new Int32Array(e * r),
                            i = this.yuvData,
                            o = this.top * this.dataWidth + this.left,
                            a = 0;
                          a < r;
                          a++
                        ) {
                          for (var s = a * e, u = 0; u < e; u++) {
                            var c = 255 & i[o + u * t.THUMBNAIL_SCALE_FACTOR];
                            n[s + u] = 4278190080 | (65793 * c);
                          }
                          o += this.dataWidth * t.THUMBNAIL_SCALE_FACTOR;
                        }
                        return n;
                      }),
                      (t.prototype.getThumbnailWidth = function () {
                        return this.getWidth() / t.THUMBNAIL_SCALE_FACTOR;
                      }),
                      (t.prototype.getThumbnailHeight = function () {
                        return this.getHeight() / t.THUMBNAIL_SCALE_FACTOR;
                      }),
                      (t.prototype.reverseHorizontal = function (e, t) {
                        for (
                          var r = this.yuvData,
                            n = 0,
                            i = this.top * this.dataWidth + this.left;
                          n < t;
                          n++, i += this.dataWidth
                        )
                          for (
                            var o = i + e / 2, a = i, s = i + e - 1;
                            a < o;
                            a++, s--
                          ) {
                            var u = r[a];
                            (r[a] = r[s]), (r[s] = u);
                          }
                      }),
                      (t.prototype.invert = function () {
                        return new s.default(this);
                      }),
                      (t.THUMBNAIL_SCALE_FACTOR = 2),
                      t
                    );
                  })(a.default);
                t.default = c;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(43),
                  i = r(2),
                  o = r(1),
                  a = (function () {
                    function e() {}
                    return (
                      (e.prototype.encode = function (e, t, r, a, s) {
                        var u;
                        switch (t) {
                          case i.default.QR_CODE:
                            u = new n.default();
                            break;
                          default:
                            throw new o.default(
                              "No encoder available for format " + t
                            );
                        }
                        return u.encode(e, t, r, a, s);
                      }),
                      e
                    );
                  })();
                t.default = a;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(2),
                  i = r(39),
                  o = r(26),
                  a = r(30),
                  s = r(0),
                  u = r(44),
                  c = (function () {
                    function e() {}
                    return (
                      (e.prototype.decode = function (e, t) {
                        return this.setHints(t), this.decodeInternal(e);
                      }),
                      (e.prototype.decodeWithState = function (e) {
                        return (
                          (null !== this.readers && void 0 !== this.readers) ||
                            this.setHints(null),
                          this.decodeInternal(e)
                        );
                      }),
                      (e.prototype.setHints = function (e) {
                        this.hints = e;
                        var t = null != e && void 0 !== e.get(3),
                          r = null == e ? null : e.get(2),
                          s = new Array();
                        if (null != r) {
                          var u = r.some(function (e) {
                            return (
                              e === n.default.UPC_A ||
                              e === n.default.UPC_E ||
                              e === n.default.EAN_13 ||
                              e === n.default.EAN_8 ||
                              e === n.default.CODABAR ||
                              e === n.default.CODE_39 ||
                              e === n.default.CODE_93 ||
                              e === n.default.CODE_128 ||
                              e === n.default.ITF ||
                              e === n.default.RSS_14 ||
                              e === n.default.RSS_EXPANDED
                            );
                          });
                          u && !t && s.push(new o.default(e)),
                            r.includes(n.default.QR_CODE) &&
                              s.push(new i.default()),
                            r.includes(n.default.DATA_MATRIX) &&
                              s.push(new a.default()),
                            u && t && s.push(new o.default(e));
                        }
                        0 === s.length &&
                          (t || s.push(new o.default(e)),
                          s.push(new i.default()),
                          s.push(new a.default()),
                          t && s.push(new o.default(e))),
                          (this.readers = s);
                      }),
                      (e.prototype.reset = function () {
                        if (null !== this.readers)
                          for (var e = 0, t = this.readers; e < t.length; e++)
                            t[e].reset();
                      }),
                      (e.prototype.decodeInternal = function (e) {
                        if (null === this.readers)
                          throw new u.default(
                            "No readers where selected, nothing can be read."
                          );
                        for (var t = 0, r = this.readers; t < r.length; t++) {
                          var n = r[t];
                          try {
                            return n.decode(e, this.hints);
                          } catch (e) {
                            if (e instanceof u.default) continue;
                          }
                        }
                        throw new s.default(
                          "No MultiFormat Readers were able to detect the code."
                        );
                      }),
                      e
                    );
                  })();
                t.default = c;
              },
              function (e, t, r) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (function (e) {
                    (e[(e.OTHER = 0)] = "OTHER"),
                      (e[(e.PURE_BARCODE = 1)] = "PURE_BARCODE"),
                      (e[(e.POSSIBLE_FORMATS = 2)] = "POSSIBLE_FORMATS"),
                      (e[(e.TRY_HARDER = 3)] = "TRY_HARDER"),
                      (e[(e.CHARACTER_SET = 4)] = "CHARACTER_SET"),
                      (e[(e.ALLOWED_LENGTHS = 5)] = "ALLOWED_LENGTHS"),
                      (e[(e.ASSUME_CODE_39_CHECK_DIGIT = 6)] =
                        "ASSUME_CODE_39_CHECK_DIGIT"),
                      (e[(e.ASSUME_GS1 = 7)] = "ASSUME_GS1"),
                      (e[(e.RETURN_CODABAR_START_END = 8)] =
                        "RETURN_CODABAR_START_END"),
                      (e[(e.NEED_RESULT_POINT_CALLBACK = 9)] =
                        "NEED_RESULT_POINT_CALLBACK"),
                      (e[(e.ALLOWED_EAN_EXTENSIONS = 10)] =
                        "ALLOWED_EAN_EXTENSIONS");
                  })(n || (n = {})),
                  (t.default = n);
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(2),
                  i = r(20),
                  o = r(8),
                  a = r(3),
                  s = r(10),
                  u = r(0),
                  c = (function () {
                    function e() {
                      (this.decodeMiddleCounters = [0, 0, 0, 0]),
                        (this.decodeRowStringBuffer = "");
                    }
                    return (
                      (e.prototype.decodeRow = function (t, r, i) {
                        var s = this.decodeRowStringBuffer,
                          u = this.decodeMiddle(r, i, s),
                          c = s.toString(),
                          f = e.parseExtensionString(c),
                          l = [
                            new a.default((i[0] + i[1]) / 2, t),
                            new a.default(u, t),
                          ],
                          d = new o.default(
                            c,
                            null,
                            0,
                            l,
                            n.default.UPC_EAN_EXTENSION,
                            new Date().getTime()
                          );
                        return null != f && d.putAllMetadata(f), d;
                      }),
                      (e.prototype.decodeMiddle = function (e, t, r) {
                        var n = this.decodeMiddleCounters;
                        (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0);
                        for (
                          var o = e.getSize(), a = t[1], s = 0, c = 0;
                          c < 2 && a < o;
                          c++
                        ) {
                          var f = i.default.decodeDigit(
                            e,
                            n,
                            a,
                            i.default.L_AND_G_PATTERNS
                          );
                          r += String.fromCharCode(
                            "0".charCodeAt(0) + (f % 10)
                          );
                          for (var l = 0, d = n; l < d.length; l++) a += d[l];
                          f >= 10 && (s |= 1 << (1 - c)),
                            1 !== c &&
                              ((a = e.getNextSet(a)), (a = e.getNextUnset(a)));
                        }
                        if (2 !== r.length) throw new u.default();
                        if (parseInt(r.toString()) % 4 !== s)
                          throw new u.default();
                        return a;
                      }),
                      (e.parseExtensionString = function (e) {
                        return 2 !== e.length
                          ? null
                          : new Map([[s.default.ISSUE_NUMBER, parseInt(e)]]);
                      }),
                      e
                    );
                  })();
                t.default = c;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(2),
                  i = r(20),
                  o = r(8),
                  a = r(3),
                  s = r(10),
                  u = r(0),
                  c = (function () {
                    function e() {
                      (this.CHECK_DIGIT_ENCODINGS = [
                        24, 20, 18, 17, 12, 6, 3, 10, 9, 5,
                      ]),
                        (this.decodeMiddleCounters = [0, 0, 0, 0]),
                        (this.decodeRowStringBuffer = "");
                    }
                    return (
                      (e.prototype.decodeRow = function (t, r, i) {
                        var s = this.decodeRowStringBuffer,
                          u = this.decodeMiddle(r, i, s),
                          c = s.toString(),
                          f = e.parseExtensionString(c),
                          l = [
                            new a.default((i[0] + i[1]) / 2, t),
                            new a.default(u, t),
                          ],
                          d = new o.default(
                            c,
                            null,
                            0,
                            l,
                            n.default.UPC_EAN_EXTENSION,
                            new Date().getTime()
                          );
                        return null != f && d.putAllMetadata(f), d;
                      }),
                      (e.prototype.decodeMiddle = function (t, r, n) {
                        var o = this.decodeMiddleCounters;
                        (o[0] = 0), (o[1] = 0), (o[2] = 0), (o[3] = 0);
                        for (
                          var a = t.getSize(), s = r[1], c = 0, f = 0;
                          f < 5 && s < a;
                          f++
                        ) {
                          var l = i.default.decodeDigit(
                            t,
                            o,
                            s,
                            i.default.L_AND_G_PATTERNS
                          );
                          n += String.fromCharCode(
                            "0".charCodeAt(0) + (l % 10)
                          );
                          for (var d = 0, h = o; d < h.length; d++) s += h[d];
                          l >= 10 && (c |= 1 << (4 - f)),
                            4 !== f &&
                              ((s = t.getNextSet(s)), (s = t.getNextUnset(s)));
                        }
                        if (5 !== n.length) throw new u.default();
                        var p = this.determineCheckDigit(c);
                        if (e.extensionChecksum(n.toString()) !== p)
                          throw new u.default();
                        return s;
                      }),
                      (e.extensionChecksum = function (e) {
                        for (var t = e.length, r = 0, n = t - 2; n >= 0; n -= 2)
                          r += e.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                        for (r *= 3, n = t - 1; n >= 0; n -= 2)
                          r += e.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
                        return (r *= 3) % 10;
                      }),
                      (e.prototype.determineCheckDigit = function (e) {
                        for (var t = 0; t < 10; t++)
                          if (e === this.CHECK_DIGIT_ENCODINGS[t]) return t;
                        throw new u.default();
                      }),
                      (e.parseExtensionString = function (t) {
                        if (5 !== t.length) return null;
                        var r = e.parseExtension5String(t);
                        return null == r
                          ? null
                          : new Map([[s.default.SUGGESTED_PRICE, r]]);
                      }),
                      (e.parseExtension5String = function (e) {
                        var t;
                        switch (e.charAt(0)) {
                          case "0":
                            t = "£";
                            break;
                          case "5":
                            t = "$";
                            break;
                          case "9":
                            switch (e) {
                              case "90000":
                                return null;
                              case "99991":
                                return "0.00";
                              case "99990":
                                return "Used";
                            }
                            t = "";
                            break;
                          default:
                            t = "";
                        }
                        var r = parseInt(e.substring(1)),
                          n = r % 100;
                        return (
                          t +
                          (r / 100).toString() +
                          "." +
                          (n < 10 ? "0" + n : n.toString())
                        );
                      }),
                      e
                    );
                  })();
                t.default = c;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(20),
                  i = r(73),
                  o = r(72),
                  a = (function () {
                    function e() {}
                    return (
                      (e.decodeRow = function (e, t, r) {
                        var a = n.default.findGuardPattern(
                          t,
                          r,
                          !1,
                          this.EXTENSION_START_PATTERN,
                          new Array(this.EXTENSION_START_PATTERN.length).fill(0)
                        );
                        try {
                          return new i.default().decodeRow(e, t, a);
                        } catch (r) {
                          return new o.default().decodeRow(e, t, a);
                        }
                      }),
                      (e.EXTENSION_START_PATTERN = [1, 1, 2]),
                      e
                    );
                  })();
                t.default = a;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(2),
                  a = r(9),
                  s = r(45),
                  u = r(0),
                  c = (function (e) {
                    function t(t) {
                      var r = e.call(this) || this,
                        n = null == t ? null : t.get(2),
                        i = [];
                      return (
                        null != n &&
                          n.indexOf(o.default.EAN_13) > -1 &&
                          i.push(new s.default()),
                        0 === i.length && i.push(new s.default()),
                        (r.readers = i),
                        r
                      );
                    }
                    return (
                      i(t, e),
                      (t.prototype.decodeRow = function (e, t, r) {
                        for (var n = 0, i = this.readers; n < i.length; n++) {
                          var o = i[n];
                          try {
                            return o.decodeRow(e, t, r);
                          } catch (e) {}
                        }
                        throw new u.default();
                      }),
                      (t.prototype.reset = function () {
                        for (var e = 0, t = this.readers; e < t.length; e++)
                          t[e].reset();
                      }),
                      t
                    );
                  })(a.default);
                t.default = c;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(25),
                  a = r(26),
                  s = (function (e) {
                    function t(t, r) {
                      return (
                        void 0 === t && (t = 500),
                        e.call(this, new a.default(r), t, r) || this
                      );
                    }
                    return i(t, e), t;
                  })(o.BrowserCodeReader);
                t.BrowserBarcodeReader = s;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e(e, t) {
                    (this.dataBytes = e), (this.errorCorrectionBytes = t);
                  }
                  return (
                    (e.prototype.getDataBytes = function () {
                      return this.dataBytes;
                    }),
                    (e.prototype.getErrorCorrectionBytes = function () {
                      return this.errorCorrectionBytes;
                    }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(14),
                  i = r(24),
                  o = r(28),
                  a = r(49),
                  s = r(27),
                  u = r(1),
                  c = (function () {
                    function e() {}
                    return (
                      (e.clearMatrix = function (e) {
                        e.clear(255);
                      }),
                      (e.buildMatrix = function (t, r, n, i, o) {
                        e.clearMatrix(o),
                          e.embedBasicPatterns(n, o),
                          e.embedTypeInfo(r, i, o),
                          e.maybeEmbedVersionInfo(n, o),
                          e.embedDataBits(t, i, o);
                      }),
                      (e.embedBasicPatterns = function (t, r) {
                        e.embedPositionDetectionPatternsAndSeparators(r),
                          e.embedDarkDotAtLeftBottomCorner(r),
                          e.maybeEmbedPositionAdjustmentPatterns(t, r),
                          e.embedTimingPatterns(r);
                      }),
                      (e.embedTypeInfo = function (t, r, i) {
                        var o = new n.default();
                        e.makeTypeInfoBits(t, r, o);
                        for (var a = 0, s = o.getSize(); a < s; ++a) {
                          var u = o.get(o.getSize() - 1 - a),
                            c = e.TYPE_INFO_COORDINATES[a],
                            f = c[0],
                            l = c[1];
                          if ((i.setBoolean(f, l, u), a < 8)) {
                            var d = i.getWidth() - a - 1,
                              h = 8;
                            i.setBoolean(d, h, u);
                          } else
                            (d = 8),
                              (h = i.getHeight() - 7 + (a - 8)),
                              i.setBoolean(d, h, u);
                        }
                      }),
                      (e.maybeEmbedVersionInfo = function (t, r) {
                        if (!(t.getVersionNumber() < 7)) {
                          var i = new n.default();
                          e.makeVersionInfoBits(t, i);
                          for (var o = 17, a = 0; a < 6; ++a)
                            for (var s = 0; s < 3; ++s) {
                              var u = i.get(o);
                              o--,
                                r.setBoolean(a, r.getHeight() - 11 + s, u),
                                r.setBoolean(r.getHeight() - 11 + s, a, u);
                            }
                        }
                      }),
                      (e.embedDataBits = function (t, r, n) {
                        for (
                          var i = 0,
                            o = -1,
                            u = n.getWidth() - 1,
                            c = n.getHeight() - 1;
                          u > 0;

                        ) {
                          for (
                            6 === u && (u -= 1);
                            c >= 0 && c < n.getHeight();

                          ) {
                            for (var f = 0; f < 2; ++f) {
                              var l = u - f;
                              if (e.isEmpty(n.get(l, c))) {
                                var d = void 0;
                                i < t.getSize()
                                  ? ((d = t.get(i)), ++i)
                                  : (d = !1),
                                  255 !== r &&
                                    a.default.getDataMaskBit(r, l, c) &&
                                    (d = !d),
                                  n.setBoolean(l, c, d);
                              }
                            }
                            c += o;
                          }
                          (c += o = -o), (u -= 2);
                        }
                        if (i !== t.getSize())
                          throw new s.default(
                            "Not all bits consumed: " + i + "/" + t.getSize()
                          );
                      }),
                      (e.findMSBSet = function (e) {
                        return 32 - i.default.numberOfLeadingZeros(e);
                      }),
                      (e.calculateBCHCode = function (t, r) {
                        if (0 === r) throw new u.default("0 polynomial");
                        var n = e.findMSBSet(r);
                        for (t <<= n - 1; e.findMSBSet(t) >= n; )
                          t ^= r << (e.findMSBSet(t) - n);
                        return t;
                      }),
                      (e.makeTypeInfoBits = function (t, r, i) {
                        if (!o.default.isValidMaskPattern(r))
                          throw new s.default("Invalid mask pattern");
                        var a = (t.getBits() << 3) | r;
                        i.appendBits(a, 5);
                        var u = e.calculateBCHCode(a, e.TYPE_INFO_POLY);
                        i.appendBits(u, 10);
                        var c = new n.default();
                        if (
                          (c.appendBits(e.TYPE_INFO_MASK_PATTERN, 15),
                          i.xor(c),
                          15 !== i.getSize())
                        )
                          throw new s.default(
                            "should not happen but we got: " + i.getSize()
                          );
                      }),
                      (e.makeVersionInfoBits = function (t, r) {
                        r.appendBits(t.getVersionNumber(), 6);
                        var n = e.calculateBCHCode(
                          t.getVersionNumber(),
                          e.VERSION_INFO_POLY
                        );
                        if ((r.appendBits(n, 12), 18 !== r.getSize()))
                          throw new s.default(
                            "should not happen but we got: " + r.getSize()
                          );
                      }),
                      (e.isEmpty = function (e) {
                        return 255 === e;
                      }),
                      (e.embedTimingPatterns = function (t) {
                        for (var r = 8; r < t.getWidth() - 8; ++r) {
                          var n = (r + 1) % 2;
                          e.isEmpty(t.get(r, 6)) && t.setNumber(r, 6, n),
                            e.isEmpty(t.get(6, r)) && t.setNumber(6, r, n);
                        }
                      }),
                      (e.embedDarkDotAtLeftBottomCorner = function (e) {
                        if (0 === e.get(8, e.getHeight() - 8))
                          throw new s.default();
                        e.setNumber(8, e.getHeight() - 8, 1);
                      }),
                      (e.embedHorizontalSeparationPattern = function (t, r, n) {
                        for (var i = 0; i < 8; ++i) {
                          if (!e.isEmpty(n.get(t + i, r)))
                            throw new s.default();
                          n.setNumber(t + i, r, 0);
                        }
                      }),
                      (e.embedVerticalSeparationPattern = function (t, r, n) {
                        for (var i = 0; i < 7; ++i) {
                          if (!e.isEmpty(n.get(t, r + i)))
                            throw new s.default();
                          n.setNumber(t, r + i, 0);
                        }
                      }),
                      (e.embedPositionAdjustmentPattern = function (t, r, n) {
                        for (var i = 0; i < 5; ++i)
                          for (
                            var o = e.POSITION_ADJUSTMENT_PATTERN[i], a = 0;
                            a < 5;
                            ++a
                          )
                            n.setNumber(t + a, r + i, o[a]);
                      }),
                      (e.embedPositionDetectionPattern = function (t, r, n) {
                        for (var i = 0; i < 7; ++i)
                          for (
                            var o = e.POSITION_DETECTION_PATTERN[i], a = 0;
                            a < 7;
                            ++a
                          )
                            n.setNumber(t + a, r + i, o[a]);
                      }),
                      (e.embedPositionDetectionPatternsAndSeparators =
                        function (t) {
                          var r = e.POSITION_DETECTION_PATTERN[0].length;
                          e.embedPositionDetectionPattern(0, 0, t),
                            e.embedPositionDetectionPattern(
                              t.getWidth() - r,
                              0,
                              t
                            ),
                            e.embedPositionDetectionPattern(
                              0,
                              t.getWidth() - r,
                              t
                            ),
                            e.embedHorizontalSeparationPattern(0, 7, t),
                            e.embedHorizontalSeparationPattern(
                              t.getWidth() - 8,
                              7,
                              t
                            ),
                            e.embedHorizontalSeparationPattern(
                              0,
                              t.getWidth() - 8,
                              t
                            ),
                            e.embedVerticalSeparationPattern(7, 0, t),
                            e.embedVerticalSeparationPattern(
                              t.getHeight() - 7 - 1,
                              0,
                              t
                            ),
                            e.embedVerticalSeparationPattern(
                              7,
                              t.getHeight() - 7,
                              t
                            );
                        }),
                      (e.maybeEmbedPositionAdjustmentPatterns = function (
                        t,
                        r
                      ) {
                        if (!(t.getVersionNumber() < 2))
                          for (
                            var n = t.getVersionNumber() - 1,
                              i =
                                e.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[
                                  n
                                ],
                              o = 0,
                              a = i.length;
                            o !== a;
                            o++
                          ) {
                            var s = i[o];
                            if (s >= 0)
                              for (var u = 0; u !== a; u++) {
                                var c = i[u];
                                c >= 0 &&
                                  e.isEmpty(r.get(c, s)) &&
                                  e.embedPositionAdjustmentPattern(
                                    c - 2,
                                    s - 2,
                                    r
                                  );
                              }
                          }
                      }),
                      (e.POSITION_DETECTION_PATTERN = Array.from([
                        Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
                        Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
                        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
                        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
                        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
                        Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
                        Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
                      ])),
                      (e.POSITION_ADJUSTMENT_PATTERN = Array.from([
                        Int32Array.from([1, 1, 1, 1, 1]),
                        Int32Array.from([1, 0, 0, 0, 1]),
                        Int32Array.from([1, 0, 1, 0, 1]),
                        Int32Array.from([1, 0, 0, 0, 1]),
                        Int32Array.from([1, 1, 1, 1, 1]),
                      ])),
                      (e.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE =
                        Array.from([
                          Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
                          Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
                          Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
                          Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
                          Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
                          Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
                          Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
                          Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
                          Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
                          Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
                          Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
                          Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
                          Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
                          Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
                          Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
                          Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
                          Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
                          Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
                          Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
                          Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
                          Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
                          Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
                          Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
                          Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
                          Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
                          Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
                          Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
                          Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
                          Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
                          Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
                          Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
                          Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
                          Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
                          Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
                          Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
                          Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
                          Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
                          Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
                          Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
                          Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
                        ])),
                      (e.TYPE_INFO_COORDINATES = Array.from([
                        Int32Array.from([8, 0]),
                        Int32Array.from([8, 1]),
                        Int32Array.from([8, 2]),
                        Int32Array.from([8, 3]),
                        Int32Array.from([8, 4]),
                        Int32Array.from([8, 5]),
                        Int32Array.from([8, 7]),
                        Int32Array.from([8, 8]),
                        Int32Array.from([7, 8]),
                        Int32Array.from([5, 8]),
                        Int32Array.from([4, 8]),
                        Int32Array.from([3, 8]),
                        Int32Array.from([2, 8]),
                        Int32Array.from([1, 8]),
                        Int32Array.from([0, 8]),
                      ])),
                      (e.VERSION_INFO_POLY = 7973),
                      (e.TYPE_INFO_POLY = 1335),
                      (e.TYPE_INFO_MASK_PATTERN = 21522),
                      e
                    );
                  })();
                t.default = c;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(41),
                  i = r(12),
                  o = (function () {
                    function e(e, t) {
                      (this.width = e), (this.height = t);
                      for (var r = new Array(t), n = 0; n !== t; n++)
                        r[n] = new Uint8Array(e);
                      this.bytes = r;
                    }
                    return (
                      (e.prototype.getHeight = function () {
                        return this.height;
                      }),
                      (e.prototype.getWidth = function () {
                        return this.width;
                      }),
                      (e.prototype.get = function (e, t) {
                        return this.bytes[t][e];
                      }),
                      (e.prototype.getArray = function () {
                        return this.bytes;
                      }),
                      (e.prototype.setNumber = function (e, t, r) {
                        this.bytes[t][e] = r;
                      }),
                      (e.prototype.setBoolean = function (e, t, r) {
                        this.bytes[t][e] = r ? 1 : 0;
                      }),
                      (e.prototype.clear = function (e) {
                        for (var t = 0, r = this.bytes; t < r.length; t++) {
                          var i = r[t];
                          n.default.fillUint8Array(i, e);
                        }
                      }),
                      (e.prototype.equals = function (t) {
                        if (!(t instanceof e)) return !1;
                        var r = t;
                        if (this.width !== r.width) return !1;
                        if (this.height !== r.height) return !1;
                        for (var n = 0, i = this.height; n < i; ++n)
                          for (
                            var o = this.bytes[n],
                              a = r.bytes[n],
                              s = 0,
                              u = this.width;
                            s < u;
                            ++s
                          )
                            if (o[s] !== a[s]) return !1;
                        return !0;
                      }),
                      (e.prototype.toString = function () {
                        for (
                          var e = new i.default(), t = 0, r = this.height;
                          t < r;
                          ++t
                        ) {
                          for (
                            var n = this.bytes[t], o = 0, a = this.width;
                            o < a;
                            ++o
                          )
                            switch (n[o]) {
                              case 0:
                                e.append(" 0");
                                break;
                              case 1:
                                e.append(" 1");
                                break;
                              default:
                                e.append("  ");
                            }
                          e.append("\n");
                        }
                        return e.toString();
                      }),
                      e
                    );
                  })();
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(21),
                  i = r(29),
                  o = r(22),
                  a = r(1),
                  s = r(16),
                  u = (function () {
                    function e(e) {
                      this.containerElement =
                        "string" == typeof e ? document.getElementById(e) : e;
                    }
                    return (
                      (e.prototype.write = function (t, r, s, u) {
                        if ((void 0 === u && (u = null), 0 === t.length))
                          throw new a.default("Found empty contents");
                        if (r < 0 || s < 0)
                          throw new a.default(
                            "Requested dimensions are too small: " + r + "x" + s
                          );
                        var c = o.default.L,
                          f = e.QUIET_ZONE_SIZE;
                        null !== u &&
                          (void 0 !== u.get(n.default.ERROR_CORRECTION) &&
                            (c = o.default.fromString(
                              u.get(n.default.ERROR_CORRECTION).toString()
                            )),
                          void 0 !== u.get(n.default.MARGIN) &&
                            (f = Number.parseInt(
                              u.get(n.default.MARGIN).toString(),
                              10
                            )));
                        var l = i.default.encode(t, c, u);
                        return this.renderResult(l, r, s, f);
                      }),
                      (e.prototype.renderResult = function (e, t, r, n) {
                        var i = e.getMatrix();
                        if (null === i) throw new s.default();
                        var o = i.getWidth(),
                          a = i.getHeight(),
                          u = o + 2 * n,
                          c = a + 2 * n,
                          f = Math.max(t, u),
                          l = Math.max(r, c),
                          d = Math.min(Math.floor(f / u), Math.floor(l / c)),
                          h = Math.floor((f - o * d) / 2),
                          p = Math.floor((l - a * d) / 2),
                          v = this.createSVGElement(f, l);
                        this.containerElement.appendChild(v);
                        for (var g = 0, m = p; g < a; g++, m += d)
                          for (var y = 0, _ = h; y < o; y++, _ += d)
                            if (1 === i.get(y, g)) {
                              var w = this.createSvgRectElement(_, m, d, d);
                              v.appendChild(w);
                            }
                        return v;
                      }),
                      (e.prototype.createSVGElement = function (t, r) {
                        var n = document.createElementNS(e.SVG_NS, "svg");
                        return (
                          n.setAttributeNS(null, "height", t.toString()),
                          n.setAttributeNS(null, "width", r.toString()),
                          n
                        );
                      }),
                      (e.prototype.createSvgRectElement = function (
                        t,
                        r,
                        n,
                        i
                      ) {
                        var o = document.createElementNS(e.SVG_NS, "rect");
                        return (
                          o.setAttributeNS(null, "x", t.toString()),
                          o.setAttributeNS(null, "y", r.toString()),
                          o.setAttributeNS(null, "height", n.toString()),
                          o.setAttributeNS(null, "width", i.toString()),
                          o.setAttributeNS(null, "fill", "#000000"),
                          o
                        );
                      }),
                      (e.QUIET_ZONE_SIZE = 4),
                      (e.SVG_NS = "http://www.w3.org/2000/svg"),
                      e
                    );
                  })();
                t.BrowserQRCodeSvgWriter = u;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(3),
                  i = r(33),
                  o = r(32),
                  a = r(17),
                  s = r(51),
                  u = r(0),
                  c = (function () {
                    function e(e) {
                      (this.image = e),
                        (this.rectangleDetector = new s.default(e));
                    }
                    return (
                      (e.prototype.detect = function () {
                        var t = this.rectangleDetector.detect(),
                          r = t[0],
                          o = t[1],
                          a = t[2],
                          s = t[3],
                          c = [];
                        c.push(this.transitionsBetween(r, o)),
                          c.push(this.transitionsBetween(r, a)),
                          c.push(this.transitionsBetween(o, s)),
                          c.push(this.transitionsBetween(a, s)),
                          c.sort(f.resultPointsAndTransitionsComparator);
                        var l = c[0],
                          d = c[1],
                          h = new Map();
                        e.increment(h, l.getFrom()),
                          e.increment(h, l.getTo()),
                          e.increment(h, d.getFrom()),
                          e.increment(h, d.getTo());
                        for (
                          var p = null,
                            v = null,
                            g = null,
                            m = 0,
                            y = Array.from(h.entries());
                          m < y.length;
                          m++
                        ) {
                          var _ = y[m],
                            w = _[0];
                          2 === _[1] ? (v = w) : null == p ? (p = w) : (g = w);
                        }
                        if (null == p || null == v || null == g)
                          throw new u.default();
                        var C = [p, v, g];
                        n.default.orderBestPatterns(C);
                        var E = C[0];
                        v = C[1];
                        var S,
                          b = C[2];
                        S = h.has(r) ? (h.has(o) ? (h.has(a) ? s : a) : o) : r;
                        var T,
                          A,
                          O = this.transitionsBetween(b, S).getTransitions(),
                          I = this.transitionsBetween(E, S).getTransitions();
                        if (
                          (1 == (1 & O) && O++,
                          1 == (1 & I) && I++,
                          4 * (O += 2) >= 7 * (I += 2) || 4 * I >= 7 * O)
                        )
                          null ==
                            (A = this.correctTopRightRectangular(
                              v,
                              E,
                              b,
                              S,
                              O,
                              I
                            )) && (A = S),
                            1 ==
                              (1 &
                                (O = this.transitionsBetween(
                                  b,
                                  A
                                ).getTransitions())) && O++,
                            1 ==
                              (1 &
                                (I = this.transitionsBetween(
                                  E,
                                  A
                                ).getTransitions())) && I++,
                            (T = e.sampleGrid(this.image, b, v, E, A, O, I));
                        else {
                          var R = Math.min(I, O);
                          null == (A = this.correctTopRight(v, E, b, S, R)) &&
                            (A = S);
                          var P = Math.max(
                            this.transitionsBetween(b, A).getTransitions(),
                            this.transitionsBetween(E, A).getTransitions()
                          );
                          1 == (1 & ++P) && P++,
                            (T = e.sampleGrid(this.image, b, v, E, A, P, P));
                        }
                        return new i.default(T, [b, v, E, A]);
                      }),
                      (e.prototype.correctTopRightRectangular = function (
                        t,
                        r,
                        i,
                        o,
                        a,
                        s
                      ) {
                        var u = e.distance(t, r) / a,
                          c = e.distance(i, o),
                          f = (o.getX() - i.getX()) / c,
                          l = (o.getY() - i.getY()) / c,
                          d = new n.default(o.getX() + u * f, o.getY() + u * l);
                        (u = e.distance(t, i) / s),
                          (c = e.distance(r, o)),
                          (f = (o.getX() - r.getX()) / c),
                          (l = (o.getY() - r.getY()) / c);
                        var h = new n.default(
                          o.getX() + u * f,
                          o.getY() + u * l
                        );
                        return this.isValid(d)
                          ? this.isValid(h)
                            ? Math.abs(
                                a -
                                  this.transitionsBetween(i, d).getTransitions()
                              ) +
                                Math.abs(
                                  s -
                                    this.transitionsBetween(
                                      r,
                                      d
                                    ).getTransitions()
                                ) <=
                              Math.abs(
                                a -
                                  this.transitionsBetween(i, h).getTransitions()
                              ) +
                                Math.abs(
                                  s -
                                    this.transitionsBetween(
                                      r,
                                      h
                                    ).getTransitions()
                                )
                              ? d
                              : h
                            : d
                          : this.isValid(h)
                          ? h
                          : null;
                      }),
                      (e.prototype.correctTopRight = function (t, r, i, o, a) {
                        var s = e.distance(t, r) / a,
                          u = e.distance(i, o),
                          c = (o.getX() - i.getX()) / u,
                          f = (o.getY() - i.getY()) / u,
                          l = new n.default(o.getX() + s * c, o.getY() + s * f);
                        (s = e.distance(t, i) / a),
                          (u = e.distance(r, o)),
                          (c = (o.getX() - r.getX()) / u),
                          (f = (o.getY() - r.getY()) / u);
                        var d = new n.default(
                          o.getX() + s * c,
                          o.getY() + s * f
                        );
                        return this.isValid(l)
                          ? this.isValid(d)
                            ? Math.abs(
                                this.transitionsBetween(i, l).getTransitions() -
                                  this.transitionsBetween(r, l).getTransitions()
                              ) <=
                              Math.abs(
                                this.transitionsBetween(i, d).getTransitions() -
                                  this.transitionsBetween(r, d).getTransitions()
                              )
                              ? l
                              : d
                            : l
                          : this.isValid(d)
                          ? d
                          : null;
                      }),
                      (e.prototype.isValid = function (e) {
                        return (
                          e.getX() >= 0 &&
                          e.getX() < this.image.getWidth() &&
                          e.getY() > 0 &&
                          e.getY() < this.image.getHeight()
                        );
                      }),
                      (e.distance = function (e, t) {
                        return a.default.round(n.default.distance(e, t));
                      }),
                      (e.increment = function (e, t) {
                        var r = e.get(t);
                        e.set(t, null == r ? 1 : r + 1);
                      }),
                      (e.sampleGrid = function (e, t, r, n, i, a, s) {
                        return o.default
                          .getInstance()
                          .sampleGrid(
                            e,
                            a,
                            s,
                            0.5,
                            0.5,
                            a - 0.5,
                            0.5,
                            a - 0.5,
                            s - 0.5,
                            0.5,
                            s - 0.5,
                            t.getX(),
                            t.getY(),
                            i.getX(),
                            i.getY(),
                            n.getX(),
                            n.getY(),
                            r.getX(),
                            r.getY()
                          );
                      }),
                      (e.prototype.transitionsBetween = function (e, t) {
                        var r = 0 | e.getX(),
                          n = 0 | e.getY(),
                          i = 0 | t.getX(),
                          o = 0 | t.getY(),
                          a = Math.abs(o - n) > Math.abs(i - r);
                        if (a) {
                          var s = r;
                          (r = n), (n = s), (s = i), (i = o), (o = s);
                        }
                        for (
                          var u = Math.abs(i - r),
                            c = Math.abs(o - n),
                            l = -u / 2,
                            d = n < o ? 1 : -1,
                            h = r < i ? 1 : -1,
                            p = 0,
                            v = this.image.get(a ? n : r, a ? r : n),
                            g = r,
                            m = n;
                          g !== i;
                          g += h
                        ) {
                          var y = this.image.get(a ? m : g, a ? g : m);
                          if ((y !== v && (p++, (v = y)), (l += c) > 0)) {
                            if (m === o) break;
                            (m += d), (l -= u);
                          }
                        }
                        return new f(e, t, p);
                      }),
                      e
                    );
                  })();
                t.default = c;
                var f = (function () {
                  function e(e, t, r) {
                    (this.from = e), (this.to = t), (this.transitions = r);
                  }
                  return (
                    (e.prototype.getFrom = function () {
                      return this.from;
                    }),
                    (e.prototype.getTo = function () {
                      return this.to;
                    }),
                    (e.prototype.getTransitions = function () {
                      return this.transitions;
                    }),
                    (e.prototype.toString = function () {
                      return this.from + "/" + this.to + "/" + this.transitions;
                    }),
                    (e.resultPointsAndTransitionsComparator = function (e, t) {
                      return e.getTransitions() - t.getTransitions();
                    }),
                    e
                  );
                })();
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n,
                  i = r(35),
                  o = r(36),
                  a = r(12),
                  s = r(34),
                  u = r(66),
                  c = r(4),
                  f = r(16);
                !(function (e) {
                  (e[(e.PAD_ENCODE = 0)] = "PAD_ENCODE"),
                    (e[(e.ASCII_ENCODE = 1)] = "ASCII_ENCODE"),
                    (e[(e.C40_ENCODE = 2)] = "C40_ENCODE"),
                    (e[(e.TEXT_ENCODE = 3)] = "TEXT_ENCODE"),
                    (e[(e.ANSIX12_ENCODE = 4)] = "ANSIX12_ENCODE"),
                    (e[(e.EDIFACT_ENCODE = 5)] = "EDIFACT_ENCODE"),
                    (e[(e.BASE256_ENCODE = 6)] = "BASE256_ENCODE");
                })(n || (n = {}));
                var l = (function () {
                  function e() {}
                  return (
                    (e.decode = function (e) {
                      var t = new o.default(e),
                        r = new a.default(),
                        s = new a.default(),
                        u = new Array(),
                        f = n.ASCII_ENCODE;
                      do {
                        if (f === n.ASCII_ENCODE)
                          f = this.decodeAsciiSegment(t, r, s);
                        else {
                          switch (f) {
                            case n.C40_ENCODE:
                              this.decodeC40Segment(t, r);
                              break;
                            case n.TEXT_ENCODE:
                              this.decodeTextSegment(t, r);
                              break;
                            case n.ANSIX12_ENCODE:
                              this.decodeAnsiX12Segment(t, r);
                              break;
                            case n.EDIFACT_ENCODE:
                              this.decodeEdifactSegment(t, r);
                              break;
                            case n.BASE256_ENCODE:
                              this.decodeBase256Segment(t, r, u);
                              break;
                            default:
                              throw new c.default();
                          }
                          f = n.ASCII_ENCODE;
                        }
                      } while (f !== n.PAD_ENCODE && t.available() > 0);
                      return (
                        s.length() > 0 && r.append(s.toString()),
                        new i.default(
                          e,
                          r.toString(),
                          0 === u.length ? null : u,
                          null
                        )
                      );
                    }),
                    (e.decodeAsciiSegment = function (e, t, r) {
                      var i = !1;
                      do {
                        var o = e.readBits(8);
                        if (0 === o) throw new c.default();
                        if (o <= 128)
                          return (
                            i && (o += 128),
                            t.append(String.fromCharCode(o - 1)),
                            n.ASCII_ENCODE
                          );
                        if (129 === o) return n.PAD_ENCODE;
                        if (o <= 229) {
                          var a = o - 130;
                          a < 10 && t.append("0"), t.append("" + a);
                        } else
                          switch (o) {
                            case 230:
                              return n.C40_ENCODE;
                            case 231:
                              return n.BASE256_ENCODE;
                            case 232:
                              t.append(String.fromCharCode(29));
                              break;
                            case 233:
                            case 234:
                              break;
                            case 235:
                              i = !0;
                              break;
                            case 236:
                              t.append("[)>05"), r.insert(0, "");
                              break;
                            case 237:
                              t.append("[)>06"), r.insert(0, "");
                              break;
                            case 238:
                              return n.ANSIX12_ENCODE;
                            case 239:
                              return n.TEXT_ENCODE;
                            case 240:
                              return n.EDIFACT_ENCODE;
                            case 241:
                              break;
                            default:
                              if (254 !== o || 0 !== e.available())
                                throw new c.default();
                          }
                      } while (e.available() > 0);
                      return n.ASCII_ENCODE;
                    }),
                    (e.decodeC40Segment = function (e, t) {
                      var r = !1,
                        n = [],
                        i = 0;
                      do {
                        if (8 === e.available()) return;
                        var o = e.readBits(8);
                        if (254 === o) return;
                        this.parseTwoBytes(o, e.readBits(8), n);
                        for (var a = 0; a < 3; a++) {
                          var s = n[a];
                          switch (i) {
                            case 0:
                              if (s < 3) i = s + 1;
                              else {
                                if (!(s < this.C40_BASIC_SET_CHARS.length))
                                  throw new c.default();
                                var u = this.C40_BASIC_SET_CHARS[s];
                                r
                                  ? (t.append(
                                      String.fromCharCode(u.charCodeAt(0) + 128)
                                    ),
                                    (r = !1))
                                  : t.append(u);
                              }
                              break;
                            case 1:
                              r
                                ? (t.append(String.fromCharCode(s + 128)),
                                  (r = !1))
                                : t.append(String.fromCharCode(s)),
                                (i = 0);
                              break;
                            case 2:
                              if (s < this.C40_SHIFT2_SET_CHARS.length)
                                (u = this.C40_SHIFT2_SET_CHARS[s]),
                                  r
                                    ? (t.append(
                                        String.fromCharCode(
                                          u.charCodeAt(0) + 128
                                        )
                                      ),
                                      (r = !1))
                                    : t.append(u);
                              else
                                switch (s) {
                                  case 27:
                                    t.append(String.fromCharCode(29));
                                    break;
                                  case 30:
                                    r = !0;
                                    break;
                                  default:
                                    throw new c.default();
                                }
                              i = 0;
                              break;
                            case 3:
                              r
                                ? (t.append(String.fromCharCode(s + 224)),
                                  (r = !1))
                                : t.append(String.fromCharCode(s + 96)),
                                (i = 0);
                              break;
                            default:
                              throw new c.default();
                          }
                        }
                      } while (e.available() > 0);
                    }),
                    (e.decodeTextSegment = function (e, t) {
                      var r = !1,
                        n = [],
                        i = 0;
                      do {
                        if (8 === e.available()) return;
                        var o = e.readBits(8);
                        if (254 === o) return;
                        this.parseTwoBytes(o, e.readBits(8), n);
                        for (var a = 0; a < 3; a++) {
                          var s = n[a];
                          switch (i) {
                            case 0:
                              if (s < 3) i = s + 1;
                              else {
                                if (!(s < this.TEXT_BASIC_SET_CHARS.length))
                                  throw new c.default();
                                var u = this.TEXT_BASIC_SET_CHARS[s];
                                r
                                  ? (t.append(
                                      String.fromCharCode(u.charCodeAt(0) + 128)
                                    ),
                                    (r = !1))
                                  : t.append(u);
                              }
                              break;
                            case 1:
                              r
                                ? (t.append(String.fromCharCode(s + 128)),
                                  (r = !1))
                                : t.append(String.fromCharCode(s)),
                                (i = 0);
                              break;
                            case 2:
                              if (s < this.TEXT_SHIFT2_SET_CHARS.length)
                                (u = this.TEXT_SHIFT2_SET_CHARS[s]),
                                  r
                                    ? (t.append(
                                        String.fromCharCode(
                                          u.charCodeAt(0) + 128
                                        )
                                      ),
                                      (r = !1))
                                    : t.append(u);
                              else
                                switch (s) {
                                  case 27:
                                    t.append(String.fromCharCode(29));
                                    break;
                                  case 30:
                                    r = !0;
                                    break;
                                  default:
                                    throw new c.default();
                                }
                              i = 0;
                              break;
                            case 3:
                              if (!(s < this.TEXT_SHIFT3_SET_CHARS.length))
                                throw new c.default();
                              (u = this.TEXT_SHIFT3_SET_CHARS[s]),
                                r
                                  ? (t.append(
                                      String.fromCharCode(u.charCodeAt(0) + 128)
                                    ),
                                    (r = !1))
                                  : t.append(u),
                                (i = 0);
                              break;
                            default:
                              throw new c.default();
                          }
                        }
                      } while (e.available() > 0);
                    }),
                    (e.decodeAnsiX12Segment = function (e, t) {
                      var r = [];
                      do {
                        if (8 === e.available()) return;
                        var n = e.readBits(8);
                        if (254 === n) return;
                        this.parseTwoBytes(n, e.readBits(8), r);
                        for (var i = 0; i < 3; i++) {
                          var o = r[i];
                          switch (o) {
                            case 0:
                              t.append("\r");
                              break;
                            case 1:
                              t.append("*");
                              break;
                            case 2:
                              t.append(">");
                              break;
                            case 3:
                              t.append(" ");
                              break;
                            default:
                              if (o < 14) t.append(String.fromCharCode(o + 44));
                              else {
                                if (!(o < 40)) throw new c.default();
                                t.append(String.fromCharCode(o + 51));
                              }
                          }
                        }
                      } while (e.available() > 0);
                    }),
                    (e.parseTwoBytes = function (e, t, r) {
                      var n = (e << 8) + t - 1,
                        i = Math.floor(n / 1600);
                      (r[0] = i),
                        (n -= 1600 * i),
                        (i = Math.floor(n / 40)),
                        (r[1] = i),
                        (r[2] = n - 40 * i);
                    }),
                    (e.decodeEdifactSegment = function (e, t) {
                      do {
                        if (e.available() <= 16) return;
                        for (var r = 0; r < 4; r++) {
                          var n = e.readBits(6);
                          if (31 === n) {
                            var i = 8 - e.getBitOffset();
                            return void (8 !== i && e.readBits(i));
                          }
                          0 == (32 & n) && (n |= 64),
                            t.append(String.fromCharCode(n));
                        }
                      } while (e.available() > 0);
                    }),
                    (e.decodeBase256Segment = function (e, t, r) {
                      var n,
                        i = 1 + e.getByteOffset(),
                        o = this.unrandomize255State(e.readBits(8), i++);
                      if (
                        (n =
                          0 === o
                            ? (e.available() / 8) | 0
                            : o < 250
                            ? o
                            : 250 * (o - 249) +
                              this.unrandomize255State(e.readBits(8), i++)) < 0
                      )
                        throw new c.default();
                      for (var a = new Uint8Array(n), l = 0; l < n; l++) {
                        if (e.available() < 8) throw new c.default();
                        a[l] = this.unrandomize255State(e.readBits(8), i++);
                      }
                      r.push(a);
                      try {
                        t.append(s.default.decode(a, u.StringUtils.ISO88591));
                      } catch (e) {
                        throw new f.default(
                          "Platform does not support required encoding: " +
                            e.message
                        );
                      }
                    }),
                    (e.unrandomize255State = function (e, t) {
                      var r = e - (((149 * t) % 255) + 1);
                      return r >= 0 ? r : r + 256;
                    }),
                    (e.C40_BASIC_SET_CHARS = [
                      "*",
                      "*",
                      "*",
                      " ",
                      "0",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "A",
                      "B",
                      "C",
                      "D",
                      "E",
                      "F",
                      "G",
                      "H",
                      "I",
                      "J",
                      "K",
                      "L",
                      "M",
                      "N",
                      "O",
                      "P",
                      "Q",
                      "R",
                      "S",
                      "T",
                      "U",
                      "V",
                      "W",
                      "X",
                      "Y",
                      "Z",
                    ]),
                    (e.C40_SHIFT2_SET_CHARS = [
                      "!",
                      '"',
                      "#",
                      "$",
                      "%",
                      "&",
                      "'",
                      "(",
                      ")",
                      "*",
                      "+",
                      ",",
                      "-",
                      ".",
                      "/",
                      ":",
                      ";",
                      "<",
                      "=",
                      ">",
                      "?",
                      "@",
                      "[",
                      "\\",
                      "]",
                      "^",
                      "_",
                    ]),
                    (e.TEXT_BASIC_SET_CHARS = [
                      "*",
                      "*",
                      "*",
                      " ",
                      "0",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "a",
                      "b",
                      "c",
                      "d",
                      "e",
                      "f",
                      "g",
                      "h",
                      "i",
                      "j",
                      "k",
                      "l",
                      "m",
                      "n",
                      "o",
                      "p",
                      "q",
                      "r",
                      "s",
                      "t",
                      "u",
                      "v",
                      "w",
                      "x",
                      "y",
                      "z",
                    ]),
                    (e.TEXT_SHIFT2_SET_CHARS = e.C40_SHIFT2_SET_CHARS),
                    (e.TEXT_SHIFT3_SET_CHARS = [
                      "`",
                      "A",
                      "B",
                      "C",
                      "D",
                      "E",
                      "F",
                      "G",
                      "H",
                      "I",
                      "J",
                      "K",
                      "L",
                      "M",
                      "N",
                      "O",
                      "P",
                      "Q",
                      "R",
                      "S",
                      "T",
                      "U",
                      "V",
                      "W",
                      "X",
                      "Y",
                      "Z",
                      "{",
                      "|",
                      "}",
                      "~",
                      String.fromCharCode(127),
                    ]),
                    e
                  );
                })();
                t.default = l;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(1),
                  i = (function () {
                    function e(e, t) {
                      (this.numDataCodewords = e), (this.codewords = t);
                    }
                    return (
                      (e.getDataBlocks = function (t, r) {
                        for (
                          var i = r.getECBlocks(),
                            o = 0,
                            a = i.getECBlocks(),
                            s = 0,
                            u = a;
                          s < u.length;
                          s++
                        )
                          o += (h = u[s]).getCount();
                        for (
                          var c = new Array(o), f = 0, l = 0, d = a;
                          l < d.length;
                          l++
                        )
                          for (var h = d[l], p = 0; p < h.getCount(); p++) {
                            var v = h.getDataCodewords(),
                              g = i.getECCodewords() + v;
                            c[f++] = new e(v, new Uint8Array(g));
                          }
                        var m = c[0].codewords.length - i.getECCodewords(),
                          y = m - 1,
                          _ = 0;
                        for (p = 0; p < y; p++)
                          for (var w = 0; w < f; w++)
                            c[w].codewords[p] = t[_++];
                        var C = 24 === r.getVersionNumber(),
                          E = C ? 8 : f;
                        for (w = 0; w < E; w++) c[w].codewords[m - 1] = t[_++];
                        var S = c[0].codewords.length;
                        for (p = m; p < S; p++)
                          for (w = 0; w < f; w++) {
                            var b = C ? (w + 8) % f : w,
                              T = C && b > 7 ? p - 1 : p;
                            c[b].codewords[T] = t[_++];
                          }
                        if (_ !== t.length) throw new n.default();
                        return c;
                      }),
                      (e.prototype.getNumDataCodewords = function () {
                        return this.numDataCodewords;
                      }),
                      (e.prototype.getCodewords = function () {
                        return this.codewords;
                      }),
                      e
                    );
                  })();
                t.default = i;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(4),
                  i = (function () {
                    function e(e, t, r) {
                      (this.ecCodewords = e),
                        (this.ecBlocks = [t]),
                        r && this.ecBlocks.push(r);
                    }
                    return (
                      (e.prototype.getECCodewords = function () {
                        return this.ecCodewords;
                      }),
                      (e.prototype.getECBlocks = function () {
                        return this.ecBlocks;
                      }),
                      e
                    );
                  })();
                t.ECBlocks = i;
                var o = (function () {
                  function e(e, t) {
                    (this.count = e), (this.dataCodewords = t);
                  }
                  return (
                    (e.prototype.getCount = function () {
                      return this.count;
                    }),
                    (e.prototype.getDataCodewords = function () {
                      return this.dataCodewords;
                    }),
                    e
                  );
                })();
                t.ECB = o;
                var a = (function () {
                  function e(e, t, r, n, i, o) {
                    (this.versionNumber = e),
                      (this.symbolSizeRows = t),
                      (this.symbolSizeColumns = r),
                      (this.dataRegionSizeRows = n),
                      (this.dataRegionSizeColumns = i),
                      (this.ecBlocks = o);
                    for (
                      var a = 0,
                        s = o.getECCodewords(),
                        u = 0,
                        c = o.getECBlocks();
                      u < c.length;
                      u++
                    ) {
                      var f = c[u];
                      a += f.getCount() * (f.getDataCodewords() + s);
                    }
                    this.totalCodewords = a;
                  }
                  return (
                    (e.prototype.getVersionNumber = function () {
                      return this.versionNumber;
                    }),
                    (e.prototype.getSymbolSizeRows = function () {
                      return this.symbolSizeRows;
                    }),
                    (e.prototype.getSymbolSizeColumns = function () {
                      return this.symbolSizeColumns;
                    }),
                    (e.prototype.getDataRegionSizeRows = function () {
                      return this.dataRegionSizeRows;
                    }),
                    (e.prototype.getDataRegionSizeColumns = function () {
                      return this.dataRegionSizeColumns;
                    }),
                    (e.prototype.getTotalCodewords = function () {
                      return this.totalCodewords;
                    }),
                    (e.prototype.getECBlocks = function () {
                      return this.ecBlocks;
                    }),
                    (e.getVersionForDimensions = function (t, r) {
                      if (0 != (1 & t) || 0 != (1 & r)) throw new n.default();
                      for (var i = 0, o = e.VERSIONS; i < o.length; i++) {
                        var a = o[i];
                        if (a.symbolSizeRows === t && a.symbolSizeColumns === r)
                          return a;
                      }
                      throw new n.default();
                    }),
                    (e.prototype.toString = function () {
                      return "" + this.versionNumber;
                    }),
                    (e.buildVersions = function () {
                      return [
                        new e(1, 10, 10, 8, 8, new i(5, new o(1, 3))),
                        new e(2, 12, 12, 10, 10, new i(7, new o(1, 5))),
                        new e(3, 14, 14, 12, 12, new i(10, new o(1, 8))),
                        new e(4, 16, 16, 14, 14, new i(12, new o(1, 12))),
                        new e(5, 18, 18, 16, 16, new i(14, new o(1, 18))),
                        new e(6, 20, 20, 18, 18, new i(18, new o(1, 22))),
                        new e(7, 22, 22, 20, 20, new i(20, new o(1, 30))),
                        new e(8, 24, 24, 22, 22, new i(24, new o(1, 36))),
                        new e(9, 26, 26, 24, 24, new i(28, new o(1, 44))),
                        new e(10, 32, 32, 14, 14, new i(36, new o(1, 62))),
                        new e(11, 36, 36, 16, 16, new i(42, new o(1, 86))),
                        new e(12, 40, 40, 18, 18, new i(48, new o(1, 114))),
                        new e(13, 44, 44, 20, 20, new i(56, new o(1, 144))),
                        new e(14, 48, 48, 22, 22, new i(68, new o(1, 174))),
                        new e(15, 52, 52, 24, 24, new i(42, new o(2, 102))),
                        new e(16, 64, 64, 14, 14, new i(56, new o(2, 140))),
                        new e(17, 72, 72, 16, 16, new i(36, new o(4, 92))),
                        new e(18, 80, 80, 18, 18, new i(48, new o(4, 114))),
                        new e(19, 88, 88, 20, 20, new i(56, new o(4, 144))),
                        new e(20, 96, 96, 22, 22, new i(68, new o(4, 174))),
                        new e(21, 104, 104, 24, 24, new i(56, new o(6, 136))),
                        new e(22, 120, 120, 18, 18, new i(68, new o(6, 175))),
                        new e(23, 132, 132, 20, 20, new i(62, new o(8, 163))),
                        new e(
                          24,
                          144,
                          144,
                          22,
                          22,
                          new i(62, new o(8, 156), new o(2, 155))
                        ),
                        new e(25, 8, 18, 6, 16, new i(7, new o(1, 5))),
                        new e(26, 8, 32, 6, 14, new i(11, new o(1, 10))),
                        new e(27, 12, 26, 10, 24, new i(14, new o(1, 16))),
                        new e(28, 12, 36, 10, 16, new i(18, new o(1, 22))),
                        new e(29, 16, 36, 14, 16, new i(24, new o(1, 32))),
                        new e(30, 16, 48, 14, 22, new i(28, new o(1, 49))),
                      ];
                    }),
                    (e.VERSIONS = e.buildVersions()),
                    e
                  );
                })();
                t.default = a;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(6),
                  i = r(84),
                  o = r(4),
                  a = r(1),
                  s = (function () {
                    function e(t) {
                      var r = t.getHeight();
                      if (r < 8 || r > 144 || 0 != (1 & r))
                        throw new o.default();
                      (this.version = e.readVersion(t)),
                        (this.mappingBitMatrix = this.extractDataRegion(t)),
                        (this.readMappingMatrix = new n.default(
                          this.mappingBitMatrix.getWidth(),
                          this.mappingBitMatrix.getHeight()
                        ));
                    }
                    return (
                      (e.prototype.getVersion = function () {
                        return this.version;
                      }),
                      (e.readVersion = function (e) {
                        var t = e.getHeight(),
                          r = e.getWidth();
                        return i.default.getVersionForDimensions(t, r);
                      }),
                      (e.prototype.readCodewords = function () {
                        var e = new Int8Array(this.version.getTotalCodewords()),
                          t = 0,
                          r = 4,
                          n = 0,
                          i = this.mappingBitMatrix.getHeight(),
                          a = this.mappingBitMatrix.getWidth(),
                          s = !1,
                          u = !1,
                          c = !1,
                          f = !1;
                        do {
                          if (r !== i || 0 !== n || s)
                            if (r !== i - 2 || 0 !== n || 0 == (3 & a) || u)
                              if (r !== i + 4 || 2 !== n || 0 != (7 & a) || c)
                                if (
                                  r !== i - 2 ||
                                  0 !== n ||
                                  4 != (7 & a) ||
                                  f
                                ) {
                                  do {
                                    r < i &&
                                      n >= 0 &&
                                      !this.readMappingMatrix.get(n, r) &&
                                      (e[t++] =
                                        255 & this.readUtah(r, n, i, a)),
                                      (r -= 2),
                                      (n += 2);
                                  } while (r >= 0 && n < a);
                                  (r += 1), (n += 3);
                                  do {
                                    r >= 0 &&
                                      n < a &&
                                      !this.readMappingMatrix.get(n, r) &&
                                      (e[t++] =
                                        255 & this.readUtah(r, n, i, a)),
                                      (r += 2),
                                      (n -= 2);
                                  } while (r < i && n >= 0);
                                  (r += 3), (n += 1);
                                } else
                                  (e[t++] = 255 & this.readCorner4(i, a)),
                                    (r -= 2),
                                    (n += 2),
                                    (f = !0);
                              else
                                (e[t++] = 255 & this.readCorner3(i, a)),
                                  (r -= 2),
                                  (n += 2),
                                  (c = !0);
                            else
                              (e[t++] = 255 & this.readCorner2(i, a)),
                                (r -= 2),
                                (n += 2),
                                (u = !0);
                          else
                            (e[t++] = 255 & this.readCorner1(i, a)),
                              (r -= 2),
                              (n += 2),
                              (s = !0);
                        } while (r < i || n < a);
                        if (t !== this.version.getTotalCodewords())
                          throw new o.default();
                        return e;
                      }),
                      (e.prototype.readModule = function (e, t, r, n) {
                        return (
                          e < 0 && ((e += r), (t += 4 - ((r + 4) & 7))),
                          t < 0 && ((t += n), (e += 4 - ((n + 4) & 7))),
                          this.readMappingMatrix.set(t, e),
                          this.mappingBitMatrix.get(t, e)
                        );
                      }),
                      (e.prototype.readUtah = function (e, t, r, n) {
                        var i = 0;
                        return (
                          this.readModule(e - 2, t - 2, r, n) && (i |= 1),
                          (i <<= 1),
                          this.readModule(e - 2, t - 1, r, n) && (i |= 1),
                          (i <<= 1),
                          this.readModule(e - 1, t - 2, r, n) && (i |= 1),
                          (i <<= 1),
                          this.readModule(e - 1, t - 1, r, n) && (i |= 1),
                          (i <<= 1),
                          this.readModule(e - 1, t, r, n) && (i |= 1),
                          (i <<= 1),
                          this.readModule(e, t - 2, r, n) && (i |= 1),
                          (i <<= 1),
                          this.readModule(e, t - 1, r, n) && (i |= 1),
                          (i <<= 1),
                          this.readModule(e, t, r, n) && (i |= 1),
                          i
                        );
                      }),
                      (e.prototype.readCorner1 = function (e, t) {
                        var r = 0;
                        return (
                          this.readModule(e - 1, 0, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(e - 1, 1, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(e - 1, 2, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(0, t - 2, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(0, t - 1, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(1, t - 1, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(2, t - 1, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(3, t - 1, e, t) && (r |= 1),
                          r
                        );
                      }),
                      (e.prototype.readCorner2 = function (e, t) {
                        var r = 0;
                        return (
                          this.readModule(e - 3, 0, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(e - 2, 0, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(e - 1, 0, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(0, t - 4, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(0, t - 3, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(0, t - 2, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(0, t - 1, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(1, t - 1, e, t) && (r |= 1),
                          r
                        );
                      }),
                      (e.prototype.readCorner3 = function (e, t) {
                        var r = 0;
                        return (
                          this.readModule(e - 1, 0, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(e - 1, t - 1, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(0, t - 3, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(0, t - 2, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(0, t - 1, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(1, t - 3, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(1, t - 2, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(1, t - 1, e, t) && (r |= 1),
                          r
                        );
                      }),
                      (e.prototype.readCorner4 = function (e, t) {
                        var r = 0;
                        return (
                          this.readModule(e - 3, 0, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(e - 2, 0, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(e - 1, 0, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(0, t - 2, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(0, t - 1, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(1, t - 1, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(2, t - 1, e, t) && (r |= 1),
                          (r <<= 1),
                          this.readModule(3, t - 1, e, t) && (r |= 1),
                          r
                        );
                      }),
                      (e.prototype.extractDataRegion = function (e) {
                        var t = this.version.getSymbolSizeRows(),
                          r = this.version.getSymbolSizeColumns();
                        if (e.getHeight() !== t)
                          throw new a.default(
                            "Dimension of bitMatrix must match the version size"
                          );
                        for (
                          var i = this.version.getDataRegionSizeRows(),
                            o = this.version.getDataRegionSizeColumns(),
                            s = (t / i) | 0,
                            u = (r / o) | 0,
                            c = s * i,
                            f = u * o,
                            l = new n.default(f, c),
                            d = 0;
                          d < s;
                          ++d
                        )
                          for (var h = d * i, p = 0; p < u; ++p)
                            for (var v = p * o, g = 0; g < i; ++g)
                              for (
                                var m = d * (i + 2) + 1 + g, y = h + g, _ = 0;
                                _ < o;
                                ++_
                              ) {
                                var w = p * (o + 2) + 1 + _;
                                if (e.get(w, m)) {
                                  var C = v + _;
                                  l.set(C, y);
                                }
                              }
                        return l;
                      }),
                      e
                    );
                  })();
                t.default = s;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(38),
                  i = r(13),
                  o = r(85),
                  a = r(83),
                  s = r(82),
                  u = r(11),
                  c = (function () {
                    function e() {
                      this.rsDecoder = new n.default(
                        i.default.DATA_MATRIX_FIELD_256
                      );
                    }
                    return (
                      (e.prototype.decode = function (e) {
                        for (
                          var t = new o.default(e),
                            r = t.getVersion(),
                            n = t.readCodewords(),
                            i = a.default.getDataBlocks(n, r),
                            u = 0,
                            c = 0,
                            f = i;
                          c < f.length;
                          c++
                        )
                          u += f[c].getNumDataCodewords();
                        for (
                          var l = new Uint8Array(u), d = i.length, h = 0;
                          h < d;
                          h++
                        ) {
                          var p = i[h],
                            v = p.getCodewords(),
                            g = p.getNumDataCodewords();
                          this.correctErrors(v, g);
                          for (var m = 0; m < g; m++) l[m * d + h] = v[m];
                        }
                        return s.default.decode(l);
                      }),
                      (e.prototype.correctErrors = function (e, t) {
                        e.length;
                        var r = new Int32Array(e);
                        try {
                          this.rsDecoder.decode(r, e.length - t);
                        } catch (e) {
                          throw new u.default();
                        }
                        for (var n = 0; n < t; n++) e[n] = r[n];
                      }),
                      e
                    );
                  })();
                t.default = c;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(25),
                  a = r(30),
                  s = (function (e) {
                    function t(t) {
                      return (
                        void 0 === t && (t = 500),
                        e.call(this, new a.default(), t) || this
                      );
                    }
                    return i(t, e), t;
                  })(o.BrowserCodeReader);
                t.BrowserDatamatrixCodeReader = s;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t(t, r, n) {
                    var i = e.call(this, t, r) || this;
                    return (i.estimatedModuleSize = n), i;
                  }
                  return (
                    i(t, e),
                    (t.prototype.aboutEquals = function (e, t, r) {
                      if (
                        Math.abs(t - this.getY()) <= e &&
                        Math.abs(r - this.getX()) <= e
                      ) {
                        var n = Math.abs(e - this.estimatedModuleSize);
                        return n <= 1 || n <= this.estimatedModuleSize;
                      }
                      return !1;
                    }),
                    (t.prototype.combineEstimate = function (e, r, n) {
                      return new t(
                        (this.getX() + r) / 2,
                        (this.getY() + e) / 2,
                        (this.estimatedModuleSize + n) / 2
                      );
                    }),
                    t
                  );
                })(r(3).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(88),
                  i = r(0),
                  o = (function () {
                    function e(e, t, r, n, i, o, a) {
                      (this.image = e),
                        (this.startX = t),
                        (this.startY = r),
                        (this.width = n),
                        (this.height = i),
                        (this.moduleSize = o),
                        (this.resultPointCallback = a),
                        (this.possibleCenters = []),
                        (this.crossCheckStateCount = new Int32Array(3));
                    }
                    return (
                      (e.prototype.find = function () {
                        for (
                          var e = this.startX,
                            t = this.height,
                            r = e + this.width,
                            n = this.startY + t / 2,
                            o = new Int32Array(3),
                            a = this.image,
                            s = 0;
                          s < t;
                          s++
                        ) {
                          var u =
                            n +
                            (0 == (1 & s)
                              ? Math.floor((s + 1) / 2)
                              : -Math.floor((s + 1) / 2));
                          (o[0] = 0), (o[1] = 0), (o[2] = 0);
                          for (var c = e; c < r && !a.get(c, u); ) c++;
                          for (var f = 0; c < r; ) {
                            if (a.get(c, u))
                              if (1 === f) o[1]++;
                              else if (2 === f) {
                                var l;
                                if (
                                  this.foundPatternCross(o) &&
                                  null !==
                                    (l = this.handlePossibleCenter(o, u, c))
                                )
                                  return l;
                                (o[0] = o[2]), (o[1] = 1), (o[2] = 0), (f = 1);
                              } else o[++f]++;
                            else 1 === f && f++, o[f]++;
                            c++;
                          }
                          if (
                            this.foundPatternCross(o) &&
                            null !== (l = this.handlePossibleCenter(o, u, r))
                          )
                            return l;
                        }
                        if (0 !== this.possibleCenters.length)
                          return this.possibleCenters[0];
                        throw new i.default();
                      }),
                      (e.centerFromEnd = function (e, t) {
                        return t - e[2] - e[1] / 2;
                      }),
                      (e.prototype.foundPatternCross = function (e) {
                        for (
                          var t = this.moduleSize, r = t / 2, n = 0;
                          n < 3;
                          n++
                        )
                          if (Math.abs(t - e[n]) >= r) return !1;
                        return !0;
                      }),
                      (e.prototype.crossCheckVertical = function (t, r, n, i) {
                        var o = this.image,
                          a = o.getHeight(),
                          s = this.crossCheckStateCount;
                        (s[0] = 0), (s[1] = 0), (s[2] = 0);
                        for (var u = t; u >= 0 && o.get(r, u) && s[1] <= n; )
                          s[1]++, u--;
                        if (u < 0 || s[1] > n) return NaN;
                        for (; u >= 0 && !o.get(r, u) && s[0] <= n; )
                          s[0]++, u--;
                        if (s[0] > n) return NaN;
                        for (u = t + 1; u < a && o.get(r, u) && s[1] <= n; )
                          s[1]++, u++;
                        if (u === a || s[1] > n) return NaN;
                        for (; u < a && !o.get(r, u) && s[2] <= n; )
                          s[2]++, u++;
                        if (s[2] > n) return NaN;
                        var c = s[0] + s[1] + s[2];
                        return 5 * Math.abs(c - i) >= 2 * i
                          ? NaN
                          : this.foundPatternCross(s)
                          ? e.centerFromEnd(s, u)
                          : NaN;
                      }),
                      (e.prototype.handlePossibleCenter = function (t, r, i) {
                        var o = t[0] + t[1] + t[2],
                          a = e.centerFromEnd(t, i),
                          s = this.crossCheckVertical(r, a, 2 * t[1], o);
                        if (!isNaN(s)) {
                          for (
                            var u = (t[0] + t[1] + t[2]) / 3,
                              c = 0,
                              f = this.possibleCenters;
                            c < f.length;
                            c++
                          ) {
                            var l = f[c];
                            if (l.aboutEquals(u, s, a))
                              return l.combineEstimate(s, a, u);
                          }
                          var d = new n.default(a, s, u);
                          this.possibleCenters.push(d),
                            null !== this.resultPointCallback &&
                              void 0 !== this.resultPointCallback &&
                              this.resultPointCallback.foundPossibleResultPoint(
                                d
                              );
                        }
                        return null;
                      }),
                      e
                    );
                  })();
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e(e) {
                    (this.bottomLeft = e[0]),
                      (this.topLeft = e[1]),
                      (this.topRight = e[2]);
                  }
                  return (
                    (e.prototype.getBottomLeft = function () {
                      return this.bottomLeft;
                    }),
                    (e.prototype.getTopLeft = function () {
                      return this.topLeft;
                    }),
                    (e.prototype.getTopRight = function () {
                      return this.topRight;
                    }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = (function (e) {
                  function t(t, r, n, i) {
                    var o = e.call(this, t, r) || this;
                    return (
                      (o.estimatedModuleSize = n),
                      (o.count = i),
                      void 0 === i && (o.count = 1),
                      o
                    );
                  }
                  return (
                    i(t, e),
                    (t.prototype.getEstimatedModuleSize = function () {
                      return this.estimatedModuleSize;
                    }),
                    (t.prototype.getCount = function () {
                      return this.count;
                    }),
                    (t.prototype.aboutEquals = function (e, t, r) {
                      if (
                        Math.abs(t - this.getY()) <= e &&
                        Math.abs(r - this.getX()) <= e
                      ) {
                        var n = Math.abs(e - this.estimatedModuleSize);
                        return n <= 1 || n <= this.estimatedModuleSize;
                      }
                      return !1;
                    }),
                    (t.prototype.combineEstimate = function (e, r, n) {
                      var i = this.count + 1;
                      return new t(
                        (this.count * this.getX() + r) / i,
                        (this.count * this.getY() + e) / i,
                        (this.count * this.estimatedModuleSize + n) / i,
                        i
                      );
                    }),
                    t
                  );
                })(r(3).default);
                t.default = o;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(3),
                  i = r(91),
                  o = r(90),
                  a = r(0),
                  s = (function () {
                    function e(e, t) {
                      (this.image = e),
                        (this.resultPointCallback = t),
                        (this.possibleCenters = []),
                        (this.crossCheckStateCount = new Int32Array(5)),
                        (this.resultPointCallback = t);
                    }
                    return (
                      (e.prototype.getImage = function () {
                        return this.image;
                      }),
                      (e.prototype.getPossibleCenters = function () {
                        return this.possibleCenters;
                      }),
                      (e.prototype.find = function (t) {
                        var r = null != t && void 0 !== t.get(3),
                          i = null != t && void 0 !== t.get(1),
                          a = this.image,
                          s = a.getHeight(),
                          u = a.getWidth(),
                          c = Math.floor((3 * s) / (4 * e.MAX_MODULES));
                        (c < e.MIN_SKIP || r) && (c = e.MIN_SKIP);
                        for (
                          var f = !1, l = new Int32Array(5), d = c - 1;
                          d < s && !f;
                          d += c
                        ) {
                          (l[0] = 0),
                            (l[1] = 0),
                            (l[2] = 0),
                            (l[3] = 0),
                            (l[4] = 0);
                          for (var h = 0, p = 0; p < u; p++)
                            if (a.get(p, d)) 1 == (1 & h) && h++, l[h]++;
                            else if (0 == (1 & h))
                              if (4 === h)
                                if (e.foundPatternCross(l)) {
                                  if (
                                    !0 !== this.handlePossibleCenter(l, d, p, i)
                                  ) {
                                    (l[0] = l[2]),
                                      (l[1] = l[3]),
                                      (l[2] = l[4]),
                                      (l[3] = 1),
                                      (l[4] = 0),
                                      (h = 3);
                                    continue;
                                  }
                                  if (((c = 2), !0 === this.hasSkipped))
                                    f = this.haveMultiplyConfirmedCenters();
                                  else {
                                    var v = this.findRowSkip();
                                    v > l[2] &&
                                      ((d += v - l[2] - c), (p = u - 1));
                                  }
                                  (h = 0),
                                    (l[0] = 0),
                                    (l[1] = 0),
                                    (l[2] = 0),
                                    (l[3] = 0),
                                    (l[4] = 0);
                                } else
                                  (l[0] = l[2]),
                                    (l[1] = l[3]),
                                    (l[2] = l[4]),
                                    (l[3] = 1),
                                    (l[4] = 0),
                                    (h = 3);
                              else l[++h]++;
                            else l[h]++;
                          e.foundPatternCross(l) &&
                            !0 === this.handlePossibleCenter(l, d, u, i) &&
                            ((c = l[0]),
                            this.hasSkipped &&
                              (f = this.haveMultiplyConfirmedCenters()));
                        }
                        var g = this.selectBestPatterns();
                        return n.default.orderBestPatterns(g), new o.default(g);
                      }),
                      (e.centerFromEnd = function (e, t) {
                        return t - e[4] - e[3] - e[2] / 2;
                      }),
                      (e.foundPatternCross = function (e) {
                        for (var t = 0, r = 0; r < 5; r++) {
                          var n = e[r];
                          if (0 === n) return !1;
                          t += n;
                        }
                        if (t < 7) return !1;
                        var i = t / 7,
                          o = i / 2;
                        return (
                          Math.abs(i - e[0]) < o &&
                          Math.abs(i - e[1]) < o &&
                          Math.abs(3 * i - e[2]) < 3 * o &&
                          Math.abs(i - e[3]) < o &&
                          Math.abs(i - e[4]) < o
                        );
                      }),
                      (e.prototype.getCrossCheckStateCount = function () {
                        var e = this.crossCheckStateCount;
                        return (
                          (e[0] = 0),
                          (e[1] = 0),
                          (e[2] = 0),
                          (e[3] = 0),
                          (e[4] = 0),
                          e
                        );
                      }),
                      (e.prototype.crossCheckDiagonal = function (t, r, n, i) {
                        for (
                          var o = this.getCrossCheckStateCount(),
                            a = 0,
                            s = this.image;
                          t >= a && r >= a && s.get(r - a, t - a);

                        )
                          o[2]++, a++;
                        if (t < a || r < a) return !1;
                        for (
                          ;
                          t >= a && r >= a && !s.get(r - a, t - a) && o[1] <= n;

                        )
                          o[1]++, a++;
                        if (t < a || r < a || o[1] > n) return !1;
                        for (
                          ;
                          t >= a && r >= a && s.get(r - a, t - a) && o[0] <= n;

                        )
                          o[0]++, a++;
                        if (o[0] > n) return !1;
                        var u = s.getHeight(),
                          c = s.getWidth();
                        for (
                          a = 1;
                          t + a < u && r + a < c && s.get(r + a, t + a);

                        )
                          o[2]++, a++;
                        if (t + a >= u || r + a >= c) return !1;
                        for (
                          ;
                          t + a < u &&
                          r + a < c &&
                          !s.get(r + a, t + a) &&
                          o[3] < n;

                        )
                          o[3]++, a++;
                        if (t + a >= u || r + a >= c || o[3] >= n) return !1;
                        for (
                          ;
                          t + a < u &&
                          r + a < c &&
                          s.get(r + a, t + a) &&
                          o[4] < n;

                        )
                          o[4]++, a++;
                        if (o[4] >= n) return !1;
                        var f = o[0] + o[1] + o[2] + o[3] + o[4];
                        return (
                          Math.abs(f - i) < 2 * i && e.foundPatternCross(o)
                        );
                      }),
                      (e.prototype.crossCheckVertical = function (t, r, n, i) {
                        for (
                          var o = this.image,
                            a = o.getHeight(),
                            s = this.getCrossCheckStateCount(),
                            u = t;
                          u >= 0 && o.get(r, u);

                        )
                          s[2]++, u--;
                        if (u < 0) return NaN;
                        for (; u >= 0 && !o.get(r, u) && s[1] <= n; )
                          s[1]++, u--;
                        if (u < 0 || s[1] > n) return NaN;
                        for (; u >= 0 && o.get(r, u) && s[0] <= n; )
                          s[0]++, u--;
                        if (s[0] > n) return NaN;
                        for (u = t + 1; u < a && o.get(r, u); ) s[2]++, u++;
                        if (u === a) return NaN;
                        for (; u < a && !o.get(r, u) && s[3] < n; ) s[3]++, u++;
                        if (u === a || s[3] >= n) return NaN;
                        for (; u < a && o.get(r, u) && s[4] < n; ) s[4]++, u++;
                        if (s[4] >= n) return NaN;
                        var c = s[0] + s[1] + s[2] + s[3] + s[4];
                        return 5 * Math.abs(c - i) >= 2 * i
                          ? NaN
                          : e.foundPatternCross(s)
                          ? e.centerFromEnd(s, u)
                          : NaN;
                      }),
                      (e.prototype.crossCheckHorizontal = function (
                        t,
                        r,
                        n,
                        i
                      ) {
                        for (
                          var o = this.image,
                            a = o.getWidth(),
                            s = this.getCrossCheckStateCount(),
                            u = t;
                          u >= 0 && o.get(u, r);

                        )
                          s[2]++, u--;
                        if (u < 0) return NaN;
                        for (; u >= 0 && !o.get(u, r) && s[1] <= n; )
                          s[1]++, u--;
                        if (u < 0 || s[1] > n) return NaN;
                        for (; u >= 0 && o.get(u, r) && s[0] <= n; )
                          s[0]++, u--;
                        if (s[0] > n) return NaN;
                        for (u = t + 1; u < a && o.get(u, r); ) s[2]++, u++;
                        if (u === a) return NaN;
                        for (; u < a && !o.get(u, r) && s[3] < n; ) s[3]++, u++;
                        if (u === a || s[3] >= n) return NaN;
                        for (; u < a && o.get(u, r) && s[4] < n; ) s[4]++, u++;
                        if (s[4] >= n) return NaN;
                        var c = s[0] + s[1] + s[2] + s[3] + s[4];
                        return 5 * Math.abs(c - i) >= i
                          ? NaN
                          : e.foundPatternCross(s)
                          ? e.centerFromEnd(s, u)
                          : NaN;
                      }),
                      (e.prototype.handlePossibleCenter = function (
                        t,
                        r,
                        n,
                        o
                      ) {
                        var a = t[0] + t[1] + t[2] + t[3] + t[4],
                          s = e.centerFromEnd(t, n),
                          u = this.crossCheckVertical(
                            r,
                            Math.floor(s),
                            t[2],
                            a
                          );
                        if (
                          !isNaN(u) &&
                          ((s = this.crossCheckHorizontal(
                            Math.floor(s),
                            Math.floor(u),
                            t[2],
                            a
                          )),
                          !isNaN(s) &&
                            (!o ||
                              this.crossCheckDiagonal(
                                Math.floor(u),
                                Math.floor(s),
                                t[2],
                                a
                              )))
                        ) {
                          for (
                            var c = a / 7,
                              f = !1,
                              l = this.possibleCenters,
                              d = 0,
                              h = l.length;
                            d < h;
                            d++
                          ) {
                            var p = l[d];
                            if (p.aboutEquals(c, u, s)) {
                              (l[d] = p.combineEstimate(u, s, c)), (f = !0);
                              break;
                            }
                          }
                          if (!f) {
                            var v = new i.default(s, u, c);
                            l.push(v),
                              null !== this.resultPointCallback &&
                                void 0 !== this.resultPointCallback &&
                                this.resultPointCallback.foundPossibleResultPoint(
                                  v
                                );
                          }
                          return !0;
                        }
                        return !1;
                      }),
                      (e.prototype.findRowSkip = function () {
                        if (this.possibleCenters.length <= 1) return 0;
                        for (
                          var t = null, r = 0, n = this.possibleCenters;
                          r < n.length;
                          r++
                        ) {
                          var i = n[r];
                          if (i.getCount() >= e.CENTER_QUORUM) {
                            if (null != t)
                              return (
                                (this.hasSkipped = !0),
                                Math.floor(
                                  (Math.abs(t.getX() - i.getX()) -
                                    Math.abs(t.getY() - i.getY())) /
                                    2
                                )
                              );
                            t = i;
                          }
                        }
                        return 0;
                      }),
                      (e.prototype.haveMultiplyConfirmedCenters = function () {
                        for (
                          var t = 0,
                            r = 0,
                            n = this.possibleCenters.length,
                            i = 0,
                            o = this.possibleCenters;
                          i < o.length;
                          i++
                        )
                          (f = o[i]).getCount() >= e.CENTER_QUORUM &&
                            (t++, (r += f.getEstimatedModuleSize()));
                        if (t < 3) return !1;
                        for (
                          var a = r / n, s = 0, u = 0, c = this.possibleCenters;
                          u < c.length;
                          u++
                        ) {
                          var f = c[u];
                          s += Math.abs(f.getEstimatedModuleSize() - a);
                        }
                        return s <= 0.05 * r;
                      }),
                      (e.prototype.selectBestPatterns = function () {
                        var e = this.possibleCenters.length;
                        if (e < 3) throw new a.default();
                        var t,
                          r = this.possibleCenters;
                        if (e > 3) {
                          for (
                            var n = 0, i = 0, o = 0, s = this.possibleCenters;
                            o < s.length;
                            o++
                          ) {
                            var u = s[o].getEstimatedModuleSize();
                            (n += u), (i += u * u);
                          }
                          t = n / e;
                          var c = Math.sqrt(i / e - t * t);
                          r.sort(function (e, r) {
                            var n = Math.abs(r.getEstimatedModuleSize() - t),
                              i = Math.abs(e.getEstimatedModuleSize() - t);
                            return n < i ? -1 : n > i ? 1 : 0;
                          });
                          for (
                            var f = Math.max(0.2 * t, c), l = 0;
                            l < r.length && r.length > 3;
                            l++
                          ) {
                            var d = r[l];
                            Math.abs(d.getEstimatedModuleSize() - t) > f &&
                              (r.splice(l, 1), l--);
                          }
                        }
                        if (r.length > 3) {
                          n = 0;
                          for (var h = 0, p = r; h < p.length; h++)
                            n += p[h].getEstimatedModuleSize();
                          (t = n / r.length),
                            r.sort(function (e, r) {
                              if (r.getCount() === e.getCount()) {
                                var n = Math.abs(
                                    r.getEstimatedModuleSize() - t
                                  ),
                                  i = Math.abs(e.getEstimatedModuleSize() - t);
                                return n < i ? 1 : n > i ? -1 : 0;
                              }
                              return r.getCount() - e.getCount();
                            }),
                            r.splice(3);
                        }
                        return [r[0], r[1], r[2]];
                      }),
                      (e.CENTER_QUORUM = 2),
                      (e.MIN_SKIP = 3),
                      (e.MAX_MODULES = 57),
                      e
                    );
                  })();
                t.default = s;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(3),
                  i = r(33),
                  o = r(32),
                  a = r(31),
                  s = r(17),
                  u = r(37),
                  c = r(92),
                  f = r(89),
                  l = r(0),
                  d = (function () {
                    function e(e) {
                      this.image = e;
                    }
                    return (
                      (e.prototype.getImage = function () {
                        return this.image;
                      }),
                      (e.prototype.getResultPointCallback = function () {
                        return this.resultPointCallback;
                      }),
                      (e.prototype.detect = function (e) {
                        this.resultPointCallback = null == e ? null : e.get(9);
                        var t = new c.default(
                          this.image,
                          this.resultPointCallback
                        ).find(e);
                        return this.processFinderPatternInfo(t);
                      }),
                      (e.prototype.processFinderPatternInfo = function (t) {
                        var r = t.getTopLeft(),
                          n = t.getTopRight(),
                          o = t.getBottomLeft(),
                          a = this.calculateModuleSize(r, n, o);
                        if (a < 1)
                          throw new l.default(
                            "No pattern found in proccess finder."
                          );
                        var s = e.computeDimension(r, n, o, a),
                          c = u.default.getProvisionalVersionForDimension(s),
                          f = c.getDimensionForVersion() - 7,
                          d = null;
                        if (c.getAlignmentPatternCenters().length > 0)
                          for (
                            var h = n.getX() - r.getX() + o.getX(),
                              p = n.getY() - r.getY() + o.getY(),
                              v = 1 - 3 / f,
                              g = Math.floor(r.getX() + v * (h - r.getX())),
                              m = Math.floor(r.getY() + v * (p - r.getY())),
                              y = 4;
                            y <= 16;
                            y <<= 1
                          )
                            try {
                              d = this.findAlignmentInRegion(a, g, m, y);
                              break;
                            } catch (e) {
                              if (!(e instanceof l.default)) throw e;
                            }
                        var _,
                          w = e.createTransform(r, n, o, d, s),
                          C = e.sampleGrid(this.image, w, s);
                        return (
                          (_ = null === d ? [o, r, n] : [o, r, n, d]),
                          new i.default(C, _)
                        );
                      }),
                      (e.createTransform = function (e, t, r, n, i) {
                        var o,
                          s,
                          u,
                          c,
                          f = i - 3.5;
                        return (
                          null !== n
                            ? ((o = n.getX()), (s = n.getY()), (c = u = f - 3))
                            : ((o = t.getX() - e.getX() + r.getX()),
                              (s = t.getY() - e.getY() + r.getY()),
                              (u = f),
                              (c = f)),
                          a.default.quadrilateralToQuadrilateral(
                            3.5,
                            3.5,
                            f,
                            3.5,
                            u,
                            c,
                            3.5,
                            f,
                            e.getX(),
                            e.getY(),
                            t.getX(),
                            t.getY(),
                            o,
                            s,
                            r.getX(),
                            r.getY()
                          )
                        );
                      }),
                      (e.sampleGrid = function (e, t, r) {
                        return o.default
                          .getInstance()
                          .sampleGridWithTransform(e, r, r, t);
                      }),
                      (e.computeDimension = function (e, t, r, i) {
                        var o = s.default.round(n.default.distance(e, t) / i),
                          a = s.default.round(n.default.distance(e, r) / i),
                          u = Math.floor((o + a) / 2) + 7;
                        switch (3 & u) {
                          case 0:
                            u++;
                            break;
                          case 2:
                            u--;
                            break;
                          case 3:
                            throw new l.default(
                              "Dimensions could be not found."
                            );
                        }
                        return u;
                      }),
                      (e.prototype.calculateModuleSize = function (e, t, r) {
                        return (
                          (this.calculateModuleSizeOneWay(e, t) +
                            this.calculateModuleSizeOneWay(e, r)) /
                          2
                        );
                      }),
                      (e.prototype.calculateModuleSizeOneWay = function (e, t) {
                        var r = this.sizeOfBlackWhiteBlackRunBothWays(
                            Math.floor(e.getX()),
                            Math.floor(e.getY()),
                            Math.floor(t.getX()),
                            Math.floor(t.getY())
                          ),
                          n = this.sizeOfBlackWhiteBlackRunBothWays(
                            Math.floor(t.getX()),
                            Math.floor(t.getY()),
                            Math.floor(e.getX()),
                            Math.floor(e.getY())
                          );
                        return isNaN(r)
                          ? n / 7
                          : isNaN(n)
                          ? r / 7
                          : (r + n) / 14;
                      }),
                      (e.prototype.sizeOfBlackWhiteBlackRunBothWays = function (
                        e,
                        t,
                        r,
                        n
                      ) {
                        var i = this.sizeOfBlackWhiteBlackRun(e, t, r, n),
                          o = 1,
                          a = e - (r - e);
                        a < 0
                          ? ((o = e / (e - a)), (a = 0))
                          : a >= this.image.getWidth() &&
                            ((o = (this.image.getWidth() - 1 - e) / (a - e)),
                            (a = this.image.getWidth() - 1));
                        var s = Math.floor(t - (n - t) * o);
                        return (
                          (o = 1),
                          s < 0
                            ? ((o = t / (t - s)), (s = 0))
                            : s >= this.image.getHeight() &&
                              ((o = (this.image.getHeight() - 1 - t) / (s - t)),
                              (s = this.image.getHeight() - 1)),
                          (a = Math.floor(e + (a - e) * o)),
                          (i += this.sizeOfBlackWhiteBlackRun(e, t, a, s)) - 1
                        );
                      }),
                      (e.prototype.sizeOfBlackWhiteBlackRun = function (
                        e,
                        t,
                        r,
                        n
                      ) {
                        var i = Math.abs(n - t) > Math.abs(r - e);
                        if (i) {
                          var o = e;
                          (e = t), (t = o), (o = r), (r = n), (n = o);
                        }
                        for (
                          var a = Math.abs(r - e),
                            u = Math.abs(n - t),
                            c = -a / 2,
                            f = e < r ? 1 : -1,
                            l = t < n ? 1 : -1,
                            d = 0,
                            h = r + f,
                            p = e,
                            v = t;
                          p !== h;
                          p += f
                        ) {
                          var g = i ? v : p,
                            m = i ? p : v;
                          if ((1 === d) === this.image.get(g, m)) {
                            if (2 === d) return s.default.distance(p, v, e, t);
                            d++;
                          }
                          if ((c += u) > 0) {
                            if (v === n) break;
                            (v += l), (c -= a);
                          }
                        }
                        return 2 === d
                          ? s.default.distance(r + f, n, e, t)
                          : NaN;
                      }),
                      (e.prototype.findAlignmentInRegion = function (
                        e,
                        t,
                        r,
                        n
                      ) {
                        var i = Math.floor(n * e),
                          o = Math.max(0, t - i),
                          a = Math.min(this.image.getWidth() - 1, t + i);
                        if (a - o < 3 * e)
                          throw new l.default(
                            "Alignment top exceeds estimated module size."
                          );
                        var s = Math.max(0, r - i),
                          u = Math.min(this.image.getHeight() - 1, r + i);
                        if (u - s < 3 * e)
                          throw new l.default(
                            "Alignment bottom exceeds estimated module size."
                          );
                        return new f.default(
                          this.image,
                          o,
                          s,
                          a - o,
                          u - s,
                          e,
                          this.resultPointCallback
                        ).find();
                      }),
                      e
                    );
                  })();
                t.default = d;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(36),
                  i = r(15),
                  o = r(35),
                  a = r(55),
                  s = r(54),
                  u = r(12),
                  c = r(34),
                  f = r(4),
                  l = (function () {
                    function e() {}
                    return (
                      (e.decode = function (t, r, a, c) {
                        var l = new n.default(t),
                          d = new u.default(),
                          h = new Array(),
                          p = -1,
                          v = -1;
                        try {
                          var g = null,
                            m = !1,
                            y = void 0;
                          do {
                            if (l.available() < 4) y = s.default.TERMINATOR;
                            else {
                              var _ = l.readBits(4);
                              y = s.default.forBits(_);
                            }
                            switch (y) {
                              case s.default.TERMINATOR:
                                break;
                              case s.default.FNC1_FIRST_POSITION:
                              case s.default.FNC1_SECOND_POSITION:
                                m = !0;
                                break;
                              case s.default.STRUCTURED_APPEND:
                                if (l.available() < 16) throw new f.default();
                                (p = l.readBits(8)), (v = l.readBits(8));
                                break;
                              case s.default.ECI:
                                var w = e.parseECIValue(l);
                                if (
                                  null ===
                                  (g = i.default.getCharacterSetECIByValue(w))
                                )
                                  throw new f.default();
                                break;
                              case s.default.HANZI:
                                var C = l.readBits(4),
                                  E = l.readBits(y.getCharacterCountBits(r));
                                C === e.GB2312_SUBSET &&
                                  e.decodeHanziSegment(l, d, E);
                                break;
                              default:
                                var S = l.readBits(y.getCharacterCountBits(r));
                                switch (y) {
                                  case s.default.NUMERIC:
                                    e.decodeNumericSegment(l, d, S);
                                    break;
                                  case s.default.ALPHANUMERIC:
                                    e.decodeAlphanumericSegment(l, d, S, m);
                                    break;
                                  case s.default.BYTE:
                                    e.decodeByteSegment(l, d, S, g, h, c);
                                    break;
                                  case s.default.KANJI:
                                    e.decodeKanjiSegment(l, d, S);
                                    break;
                                  default:
                                    throw new f.default();
                                }
                            }
                          } while (y !== s.default.TERMINATOR);
                        } catch (e) {
                          throw new f.default();
                        }
                        return new o.default(
                          t,
                          d.toString(),
                          0 === h.length ? null : h,
                          null === a ? null : a.toString(),
                          p,
                          v
                        );
                      }),
                      (e.decodeHanziSegment = function (e, t, r) {
                        if (13 * r > e.available()) throw new f.default();
                        for (var n = new Uint8Array(2 * r), i = 0; r > 0; ) {
                          var o = e.readBits(13),
                            s = (((o / 96) << 8) & 4294967295) | o % 96;
                          (s += s < 959 ? 41377 : 42657),
                            (n[i] = (s >> 8) & 255),
                            (n[i + 1] = 255 & s),
                            (i += 2),
                            r--;
                        }
                        try {
                          t.append(c.default.decode(n, a.default.GB2312));
                        } catch (e) {
                          throw new f.default(e);
                        }
                      }),
                      (e.decodeKanjiSegment = function (e, t, r) {
                        if (13 * r > e.available()) throw new f.default();
                        for (var n = new Uint8Array(2 * r), i = 0; r > 0; ) {
                          var o = e.readBits(13),
                            s = (((o / 192) << 8) & 4294967295) | o % 192;
                          (s += s < 7936 ? 33088 : 49472),
                            (n[i] = s >> 8),
                            (n[i + 1] = s),
                            (i += 2),
                            r--;
                        }
                        try {
                          t.append(c.default.decode(n, a.default.SHIFT_JIS));
                        } catch (e) {
                          throw new f.default(e);
                        }
                      }),
                      (e.decodeByteSegment = function (e, t, r, n, i, o) {
                        if (8 * r > e.available()) throw new f.default();
                        for (var s, u = new Uint8Array(r), l = 0; l < r; l++)
                          u[l] = e.readBits(8);
                        s =
                          null === n
                            ? a.default.guessEncoding(u, o)
                            : n.getName();
                        try {
                          t.append(c.default.decode(u, s));
                        } catch (e) {
                          throw new f.default(e);
                        }
                        i.push(u);
                      }),
                      (e.toAlphaNumericChar = function (t) {
                        if (t >= e.ALPHANUMERIC_CHARS.length)
                          throw new f.default();
                        return e.ALPHANUMERIC_CHARS[t];
                      }),
                      (e.decodeAlphanumericSegment = function (t, r, n, i) {
                        for (var o = r.length(); n > 1; ) {
                          if (t.available() < 11) throw new f.default();
                          var a = t.readBits(11);
                          r.append(e.toAlphaNumericChar(Math.floor(a / 45))),
                            r.append(e.toAlphaNumericChar(a % 45)),
                            (n -= 2);
                        }
                        if (1 === n) {
                          if (t.available() < 6) throw new f.default();
                          r.append(e.toAlphaNumericChar(t.readBits(6)));
                        }
                        if (i)
                          for (var s = o; s < r.length(); s++)
                            "%" === r.charAt(s) &&
                              (s < r.length() - 1 && "%" === r.charAt(s + 1)
                                ? r.deleteCharAt(s + 1)
                                : r.setCharAt(s, String.fromCharCode(29)));
                      }),
                      (e.decodeNumericSegment = function (t, r, n) {
                        for (; n >= 3; ) {
                          if (t.available() < 10) throw new f.default();
                          var i = t.readBits(10);
                          if (i >= 1e3) throw new f.default();
                          r.append(e.toAlphaNumericChar(Math.floor(i / 100))),
                            r.append(
                              e.toAlphaNumericChar(Math.floor(i / 10) % 10)
                            ),
                            r.append(e.toAlphaNumericChar(i % 10)),
                            (n -= 3);
                        }
                        if (2 === n) {
                          if (t.available() < 7) throw new f.default();
                          var o = t.readBits(7);
                          if (o >= 100) throw new f.default();
                          r.append(e.toAlphaNumericChar(Math.floor(o / 10))),
                            r.append(e.toAlphaNumericChar(o % 10));
                        } else if (1 === n) {
                          if (t.available() < 4) throw new f.default();
                          var a = t.readBits(4);
                          if (a >= 10) throw new f.default();
                          r.append(e.toAlphaNumericChar(a));
                        }
                      }),
                      (e.parseECIValue = function (e) {
                        var t = e.readBits(8);
                        if (0 == (128 & t)) return 127 & t;
                        if (128 == (192 & t))
                          return (((63 & t) << 8) & 4294967295) | e.readBits(8);
                        if (192 == (224 & t))
                          return (
                            (((31 & t) << 16) & 4294967295) | e.readBits(16)
                          );
                        throw new f.default();
                      }),
                      (e.ALPHANUMERIC_CHARS =
                        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"),
                      (e.GB2312_SUBSET = 1),
                      e
                    );
                  })();
                t.default = l;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(1),
                  i = (function () {
                    function e(e, t) {
                      (this.numDataCodewords = e), (this.codewords = t);
                    }
                    return (
                      (e.getDataBlocks = function (t, r, i) {
                        if (t.length !== r.getTotalCodewords())
                          throw new n.default();
                        for (
                          var o = r.getECBlocksForLevel(i),
                            a = 0,
                            s = o.getECBlocks(),
                            u = 0,
                            c = s;
                          u < c.length;
                          u++
                        )
                          a += (p = c[u]).getCount();
                        for (
                          var f = new Array(a), l = 0, d = 0, h = s;
                          d < h.length;
                          d++
                        )
                          for (var p = h[d], v = 0; v < p.getCount(); v++) {
                            var g = p.getDataCodewords(),
                              m = o.getECCodewordsPerBlock() + g;
                            f[l++] = new e(g, new Uint8Array(m));
                          }
                        for (
                          var y = f[0].codewords.length, _ = f.length - 1;
                          _ >= 0 && f[_].codewords.length !== y;

                        )
                          _--;
                        _++;
                        var w = y - o.getECCodewordsPerBlock(),
                          C = 0;
                        for (v = 0; v < w; v++)
                          for (var E = 0; E < l; E++)
                            f[E].codewords[v] = t[C++];
                        for (E = _; E < l; E++) f[E].codewords[w] = t[C++];
                        var S = f[0].codewords.length;
                        for (v = w; v < S; v++)
                          for (E = 0; E < l; E++) {
                            var b = E < _ ? v : v + 1;
                            f[E].codewords[b] = t[C++];
                          }
                        return f;
                      }),
                      (e.prototype.getNumDataCodewords = function () {
                        return this.numDataCodewords;
                      }),
                      (e.prototype.getCodewords = function () {
                        return this.codewords;
                      }),
                      e
                    );
                  })();
                t.default = i;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (function (e) {
                    (e[(e.DATA_MASK_000 = 0)] = "DATA_MASK_000"),
                      (e[(e.DATA_MASK_001 = 1)] = "DATA_MASK_001"),
                      (e[(e.DATA_MASK_010 = 2)] = "DATA_MASK_010"),
                      (e[(e.DATA_MASK_011 = 3)] = "DATA_MASK_011"),
                      (e[(e.DATA_MASK_100 = 4)] = "DATA_MASK_100"),
                      (e[(e.DATA_MASK_101 = 5)] = "DATA_MASK_101"),
                      (e[(e.DATA_MASK_110 = 6)] = "DATA_MASK_110"),
                      (e[(e.DATA_MASK_111 = 7)] = "DATA_MASK_111");
                  })(t.DataMaskValues || (t.DataMaskValues = {}));
                var n = (function () {
                  function e(e, t) {
                    (this.value = e), (this.isMasked = t);
                  }
                  return (
                    (e.prototype.unmaskBitMatrix = function (e, t) {
                      for (var r = 0; r < t; r++)
                        for (var n = 0; n < t; n++)
                          this.isMasked(r, n) && e.flip(n, r);
                    }),
                    (e.values = new Map([
                      [
                        0,
                        new e(0, function (e, t) {
                          return 0 == ((e + t) & 1);
                        }),
                      ],
                      [
                        1,
                        new e(1, function (e, t) {
                          return 0 == (1 & e);
                        }),
                      ],
                      [
                        2,
                        new e(2, function (e, t) {
                          return t % 3 == 0;
                        }),
                      ],
                      [
                        3,
                        new e(3, function (e, t) {
                          return (e + t) % 3 == 0;
                        }),
                      ],
                      [
                        4,
                        new e(4, function (e, t) {
                          return (
                            0 == ((Math.floor(e / 2) + Math.floor(t / 3)) & 1)
                          );
                        }),
                      ],
                      [
                        5,
                        new e(5, function (e, t) {
                          return (e * t) % 6 == 0;
                        }),
                      ],
                      [
                        6,
                        new e(6, function (e, t) {
                          return (e * t) % 6 < 3;
                        }),
                      ],
                      [
                        7,
                        new e(7, function (e, t) {
                          return 0 == ((e + t + ((e * t) % 3)) & 1);
                        }),
                      ],
                    ])),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e(e, t) {
                    (this.count = e), (this.dataCodewords = t);
                  }
                  return (
                    (e.prototype.getCount = function () {
                      return this.count;
                    }),
                    (e.prototype.getDataCodewords = function () {
                      return this.dataCodewords;
                    }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e(e) {
                    for (var t = [], r = 1; r < arguments.length; r++)
                      t[r - 1] = arguments[r];
                    (this.ecCodewordsPerBlock = e), (this.ecBlocks = t);
                  }
                  return (
                    (e.prototype.getECCodewordsPerBlock = function () {
                      return this.ecCodewordsPerBlock;
                    }),
                    (e.prototype.getNumBlocks = function () {
                      for (
                        var e = 0, t = 0, r = this.ecBlocks;
                        t < r.length;
                        t++
                      )
                        e += r[t].getCount();
                      return e;
                    }),
                    (e.prototype.getTotalECCodewords = function () {
                      return this.ecCodewordsPerBlock * this.getNumBlocks();
                    }),
                    (e.prototype.getECBlocks = function () {
                      return this.ecBlocks;
                    }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(37),
                  i = r(57),
                  o = r(96),
                  a = r(4),
                  s = (function () {
                    function e(e) {
                      var t = e.getHeight();
                      if (t < 21 || 1 != (3 & t)) throw new a.default();
                      this.bitMatrix = e;
                    }
                    return (
                      (e.prototype.readFormatInformation = function () {
                        if (
                          null !== this.parsedFormatInfo &&
                          void 0 !== this.parsedFormatInfo
                        )
                          return this.parsedFormatInfo;
                        for (var e = 0, t = 0; t < 6; t++)
                          e = this.copyBit(t, 8, e);
                        (e = this.copyBit(7, 8, e)),
                          (e = this.copyBit(8, 8, e)),
                          (e = this.copyBit(8, 7, e));
                        for (var r = 5; r >= 0; r--) e = this.copyBit(8, r, e);
                        var n = this.bitMatrix.getHeight(),
                          o = 0,
                          s = n - 7;
                        for (r = n - 1; r >= s; r--) o = this.copyBit(8, r, o);
                        for (t = n - 8; t < n; t++) o = this.copyBit(t, 8, o);
                        if (
                          ((this.parsedFormatInfo =
                            i.default.decodeFormatInformation(e, o)),
                          null !== this.parsedFormatInfo)
                        )
                          return this.parsedFormatInfo;
                        throw new a.default();
                      }),
                      (e.prototype.readVersion = function () {
                        if (
                          null !== this.parsedVersion &&
                          void 0 !== this.parsedVersion
                        )
                          return this.parsedVersion;
                        var e = this.bitMatrix.getHeight(),
                          t = Math.floor((e - 17) / 4);
                        if (t <= 6) return n.default.getVersionForNumber(t);
                        for (var r = 0, i = e - 11, o = 5; o >= 0; o--)
                          for (var s = e - 9; s >= i; s--)
                            r = this.copyBit(s, o, r);
                        var u = n.default.decodeVersionInformation(r);
                        if (null !== u && u.getDimensionForVersion() === e)
                          return (this.parsedVersion = u), u;
                        for (r = 0, s = 5; s >= 0; s--)
                          for (o = e - 9; o >= i; o--)
                            r = this.copyBit(s, o, r);
                        if (
                          null !==
                            (u = n.default.decodeVersionInformation(r)) &&
                          u.getDimensionForVersion() === e
                        )
                          return (this.parsedVersion = u), u;
                        throw new a.default();
                      }),
                      (e.prototype.copyBit = function (e, t, r) {
                        return (
                          this.isMirror
                            ? this.bitMatrix.get(t, e)
                            : this.bitMatrix.get(e, t)
                        )
                          ? (r << 1) | 1
                          : r << 1;
                      }),
                      (e.prototype.readCodewords = function () {
                        var e = this.readFormatInformation(),
                          t = this.readVersion(),
                          r = o.default.values.get(e.getDataMask()),
                          n = this.bitMatrix.getHeight();
                        r.unmaskBitMatrix(this.bitMatrix, n);
                        for (
                          var i = t.buildFunctionPattern(),
                            s = !0,
                            u = new Uint8Array(t.getTotalCodewords()),
                            c = 0,
                            f = 0,
                            l = 0,
                            d = n - 1;
                          d > 0;
                          d -= 2
                        ) {
                          6 === d && d--;
                          for (var h = 0; h < n; h++)
                            for (var p = s ? n - 1 - h : h, v = 0; v < 2; v++)
                              i.get(d - v, p) ||
                                (l++,
                                (f <<= 1),
                                this.bitMatrix.get(d - v, p) && (f |= 1),
                                8 === l && ((u[c++] = f), (l = 0), (f = 0)));
                          s = !s;
                        }
                        if (c !== t.getTotalCodewords()) throw new a.default();
                        return u;
                      }),
                      (e.prototype.remask = function () {
                        if (null !== this.parsedFormatInfo) {
                          var e =
                              o.default.values[
                                this.parsedFormatInfo.getDataMask()
                              ],
                            t = this.bitMatrix.getHeight();
                          e.unmaskBitMatrix(this.bitMatrix, t);
                        }
                      }),
                      (e.prototype.setMirror = function (e) {
                        (this.parsedVersion = null),
                          (this.parsedFormatInfo = null),
                          (this.isMirror = e);
                      }),
                      (e.prototype.mirror = function () {
                        for (
                          var e = this.bitMatrix, t = 0, r = e.getWidth();
                          t < r;
                          t++
                        )
                          for (var n = t + 1, i = e.getHeight(); n < i; n++)
                            e.get(t, n) !== e.get(n, t) &&
                              (e.flip(n, t), e.flip(t, n));
                      }),
                      e
                    );
                  })();
                t.default = s;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(6),
                  i = r(13),
                  o = r(38),
                  a = r(99),
                  s = r(56),
                  u = r(95),
                  c = r(94),
                  f = r(11),
                  l = (function () {
                    function e() {
                      this.rsDecoder = new o.default(
                        i.default.QR_CODE_FIELD_256
                      );
                    }
                    return (
                      (e.prototype.decodeBooleanArray = function (e, t) {
                        return this.decodeBitMatrix(
                          n.default.parseFromBooleanArray(e),
                          t
                        );
                      }),
                      (e.prototype.decodeBitMatrix = function (e, t) {
                        var r = new a.default(e),
                          n = null;
                        try {
                          return this.decodeBitMatrixParser(r, t);
                        } catch (e) {
                          n = e;
                        }
                        try {
                          r.remask(),
                            r.setMirror(!0),
                            r.readVersion(),
                            r.readFormatInformation(),
                            r.mirror();
                          var i = this.decodeBitMatrixParser(r, t);
                          return i.setOther(new s.default(!0)), i;
                        } catch (e) {
                          if (null !== n) throw n;
                          throw e;
                        }
                      }),
                      (e.prototype.decodeBitMatrixParser = function (e, t) {
                        for (
                          var r = e.readVersion(),
                            n = e
                              .readFormatInformation()
                              .getErrorCorrectionLevel(),
                            i = e.readCodewords(),
                            o = u.default.getDataBlocks(i, r, n),
                            a = 0,
                            s = 0,
                            f = o;
                          s < f.length;
                          s++
                        )
                          a += (v = f[s]).getNumDataCodewords();
                        for (
                          var l = new Uint8Array(a), d = 0, h = 0, p = o;
                          h < p.length;
                          h++
                        ) {
                          var v,
                            g = (v = p[h]).getCodewords(),
                            m = v.getNumDataCodewords();
                          this.correctErrors(g, m);
                          for (var y = 0; y < m; y++) l[d++] = g[y];
                        }
                        return c.default.decode(l, r, n, t);
                      }),
                      (e.prototype.correctErrors = function (e, t) {
                        e.length;
                        var r = new Int32Array(e);
                        try {
                          this.rsDecoder.decode(r, e.length - t);
                        } catch (e) {
                          throw new f.default();
                        }
                        for (var n = 0; n < t; n++) e[n] = r[n];
                      }),
                      e
                    );
                  })();
                t.default = l;
              },
              function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = (function () {
                  function e() {}
                  return (
                    (e.floatToIntBits = function (e) {
                      return e;
                    }),
                    e
                  );
                })();
                t.default = n;
              },
              function (e, t, r) {
                !(function (e) {
                  var t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (e, t) {
                        e.__proto__ = t;
                      }) ||
                    function (e, t) {
                      for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                    };
                  function r(e, t) {
                    void 0 === t && (t = e.constructor);
                    var r = Error.captureStackTrace;
                    r && r(e, t);
                  }
                  var n = (function (e) {
                    function n(t) {
                      var n,
                        i,
                        o,
                        a = this.constructor,
                        s = e.call(this, t) || this;
                      return (
                        (s.name = a.name),
                        (n = s),
                        (i = a.prototype),
                        (o = Object.setPrototypeOf)
                          ? o(n, i)
                          : (n.__proto__ = i),
                        r(s),
                        s
                      );
                    }
                    return (
                      (function (e, r) {
                        function n() {
                          this.constructor = e;
                        }
                        t(e, r),
                          (e.prototype =
                            null === r
                              ? Object.create(r)
                              : ((n.prototype = r.prototype), new n()));
                      })(n, e),
                      n
                    );
                  })(Error);
                  (e.CustomError = n),
                    (e.customErrorFactory = function (e, t) {
                      function n() {
                        for (var i = [], o = 0; o < arguments.length; o++)
                          i[o] = arguments[o];
                        if (!(this instanceof n))
                          return new (n.bind.apply(n, [void 0].concat(i)))();
                        t.apply(this, i),
                          e.apply(this, i),
                          (this.name = e.name || t.name),
                          r(this, n);
                      }
                      return (
                        void 0 === t && (t = Error),
                        Object.defineProperties(n, {
                          prototype: {
                            value: Object.create(t.prototype, {
                              constructor: {
                                value: n,
                                writable: !0,
                                configurable: !0,
                              },
                            }),
                          },
                        })
                      );
                    });
                })(t);
              },
              function (e, t, r) {
                "use strict";
                var n,
                  i =
                    (this && this.__extends) ||
                    ((n =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    function (e, t) {
                      function r() {
                        this.constructor = e;
                      }
                      n(e, t),
                        (e.prototype =
                          null === t
                            ? Object.create(t)
                            : ((r.prototype = t.prototype), new r()));
                    });
                Object.defineProperty(t, "__esModule", { value: !0 });
                var o = r(25),
                  a = r(39),
                  s = (function (e) {
                    function t(t) {
                      return (
                        void 0 === t && (t = 500),
                        e.call(this, new a.default(), t) || this
                      );
                    }
                    return i(t, e), t;
                  })(o.BrowserCodeReader);
                t.BrowserQRCodeReader = s;
              },
              function (e, t, r) {
                e.exports = r(66);
              },
            ]);
          }),
          "object" == typeof r && "object" == typeof t
            ? (t.exports = i())
            : "function" == typeof define && define.amd
            ? define("ZXing", [], i)
            : "object" == typeof r
            ? (r.ZXing = i())
            : (n.ZXing = i());
      },
      {},
    ],
    2: [
      function (e, t, r) {
        (function (n, i) {
          !(function (e, n) {
            "object" == typeof r && void 0 !== t
              ? (t.exports = n())
              : "function" == typeof define && define.amd
              ? define(n)
              : (e.ES6Promise = n());
          })(this, function () {
            "use strict";
            function t(e) {
              return "function" == typeof e;
            }
            var r = Array.isArray
                ? Array.isArray
                : function (e) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(e)
                    );
                  },
              o = 0,
              a = void 0,
              s = void 0,
              u = function (e, t) {
                (v[o] = e), (v[o + 1] = t), 2 === (o += 2) && (s ? s(g) : C());
              };
            var c = "undefined" != typeof window ? window : void 0,
              f = c || {},
              l = f.MutationObserver || f.WebKitMutationObserver,
              d =
                "undefined" == typeof self &&
                void 0 !== n &&
                "[object process]" === {}.toString.call(n),
              h =
                "undefined" != typeof Uint8ClampedArray &&
                "undefined" != typeof importScripts &&
                "undefined" != typeof MessageChannel;
            function p() {
              var e = setTimeout;
              return function () {
                return e(g, 1);
              };
            }
            var v = new Array(1e3);
            function g() {
              for (var e = 0; e < o; e += 2) {
                (0, v[e])(v[e + 1]), (v[e] = void 0), (v[e + 1] = void 0);
              }
              o = 0;
            }
            var m,
              y,
              _,
              w,
              C = void 0;
            function E(e, t) {
              var r = this,
                n = new this.constructor(T);
              void 0 === n[b] && U(n);
              var i = r._state;
              if (i) {
                var o = arguments[i - 1];
                u(function () {
                  return j(i, n, o, r._result);
                });
              } else B(r, n, e, t);
              return n;
            }
            function S(e) {
              if (e && "object" == typeof e && e.constructor === this) return e;
              var t = new this(T);
              return N(t, e), t;
            }
            d
              ? (C = function () {
                  return n.nextTick(g);
                })
              : l
              ? ((y = 0),
                (_ = new l(g)),
                (w = document.createTextNode("")),
                _.observe(w, { characterData: !0 }),
                (C = function () {
                  w.data = y = ++y % 2;
                }))
              : h
              ? (((m = new MessageChannel()).port1.onmessage = g),
                (C = function () {
                  return m.port2.postMessage(0);
                }))
              : (C =
                  void 0 === c && "function" == typeof e
                    ? (function () {
                        try {
                          var e = Function("return this")().require("vertx");
                          return void 0 !== (a = e.runOnLoop || e.runOnContext)
                            ? function () {
                                a(g);
                              }
                            : p();
                        } catch (e) {
                          return p();
                        }
                      })()
                    : p());
            var b = Math.random().toString(36).substring(2);
            function T() {}
            var A = void 0,
              O = 1,
              I = 2,
              R = { error: null };
            function P(e) {
              try {
                return e.then;
              } catch (e) {
                return (R.error = e), R;
              }
            }
            function M(e, r, n) {
              r.constructor === e.constructor &&
              n === E &&
              r.constructor.resolve === S
                ? (function (e, t) {
                    t._state === O
                      ? k(e, t._result)
                      : t._state === I
                      ? x(e, t._result)
                      : B(
                          t,
                          void 0,
                          function (t) {
                            return N(e, t);
                          },
                          function (t) {
                            return x(e, t);
                          }
                        );
                  })(e, r)
                : n === R
                ? (x(e, R.error), (R.error = null))
                : void 0 === n
                ? k(e, r)
                : t(n)
                ? (function (e, t, r) {
                    u(function (e) {
                      var n = !1,
                        i = (function (e, t, r, n) {
                          try {
                            e.call(t, r, n);
                          } catch (e) {
                            return e;
                          }
                        })(
                          r,
                          t,
                          function (r) {
                            n || ((n = !0), t !== r ? N(e, r) : k(e, r));
                          },
                          function (t) {
                            n || ((n = !0), x(e, t));
                          },
                          e._label
                        );
                      !n && i && ((n = !0), x(e, i));
                    }, e);
                  })(e, r, n)
                : k(e, r);
            }
            function N(e, t) {
              var r, n;
              e === t
                ? x(
                    e,
                    new TypeError("You cannot resolve a promise with itself")
                  )
                : ((n = typeof (r = t)),
                  null === r || ("object" !== n && "function" !== n)
                    ? k(e, t)
                    : M(e, t, P(t)));
            }
            function D(e) {
              e._onerror && e._onerror(e._result), L(e);
            }
            function k(e, t) {
              e._state === A &&
                ((e._result = t),
                (e._state = O),
                0 !== e._subscribers.length && u(L, e));
            }
            function x(e, t) {
              e._state === A && ((e._state = I), (e._result = t), u(D, e));
            }
            function B(e, t, r, n) {
              var i = e._subscribers,
                o = i.length;
              (e._onerror = null),
                (i[o] = t),
                (i[o + O] = r),
                (i[o + I] = n),
                0 === o && e._state && u(L, e);
            }
            function L(e) {
              var t = e._subscribers,
                r = e._state;
              if (0 !== t.length) {
                for (
                  var n = void 0, i = void 0, o = e._result, a = 0;
                  a < t.length;
                  a += 3
                )
                  (n = t[a]), (i = t[a + r]), n ? j(r, n, i, o) : i(o);
                e._subscribers.length = 0;
              }
            }
            function j(e, r, n, i) {
              var o = t(n),
                a = void 0,
                s = void 0,
                u = void 0,
                c = void 0;
              if (o) {
                if (
                  ((a = (function (e, t) {
                    try {
                      return e(t);
                    } catch (e) {
                      return (R.error = e), R;
                    }
                  })(n, i)) === R
                    ? ((c = !0), (s = a.error), (a.error = null))
                    : (u = !0),
                  r === a)
                )
                  return void x(
                    r,
                    new TypeError(
                      "A promises callback cannot return that same promise."
                    )
                  );
              } else (a = i), (u = !0);
              r._state !== A ||
                (o && u
                  ? N(r, a)
                  : c
                  ? x(r, s)
                  : e === O
                  ? k(r, a)
                  : e === I && x(r, a));
            }
            var F = 0;
            function U(e) {
              (e[b] = F++),
                (e._state = void 0),
                (e._result = void 0),
                (e._subscribers = []);
            }
            var z = (function () {
              function e(e, t) {
                (this._instanceConstructor = e),
                  (this.promise = new e(T)),
                  this.promise[b] || U(this.promise),
                  r(t)
                    ? ((this.length = t.length),
                      (this._remaining = t.length),
                      (this._result = new Array(this.length)),
                      0 === this.length
                        ? k(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(t),
                          0 === this._remaining &&
                            k(this.promise, this._result)))
                    : x(
                        this.promise,
                        new Error("Array Methods must be provided an Array")
                      );
              }
              return (
                (e.prototype._enumerate = function (e) {
                  for (var t = 0; this._state === A && t < e.length; t++)
                    this._eachEntry(e[t], t);
                }),
                (e.prototype._eachEntry = function (e, t) {
                  var r = this._instanceConstructor,
                    n = r.resolve;
                  if (n === S) {
                    var i = P(e);
                    if (i === E && e._state !== A)
                      this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof i)
                      this._remaining--, (this._result[t] = e);
                    else if (r === V) {
                      var o = new r(T);
                      M(o, e, i), this._willSettleAt(o, t);
                    } else
                      this._willSettleAt(
                        new r(function (t) {
                          return t(e);
                        }),
                        t
                      );
                  } else this._willSettleAt(n(e), t);
                }),
                (e.prototype._settledAt = function (e, t, r) {
                  var n = this.promise;
                  n._state === A &&
                    (this._remaining--,
                    e === I ? x(n, r) : (this._result[t] = r)),
                    0 === this._remaining && k(n, this._result);
                }),
                (e.prototype._willSettleAt = function (e, t) {
                  var r = this;
                  B(
                    e,
                    void 0,
                    function (e) {
                      return r._settledAt(O, t, e);
                    },
                    function (e) {
                      return r._settledAt(I, t, e);
                    }
                  );
                }),
                e
              );
            })();
            var V = (function () {
              function e(t) {
                (this[b] = F++),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  T !== t &&
                    ("function" != typeof t &&
                      (function () {
                        throw new TypeError(
                          "You must pass a resolver function as the first argument to the promise constructor"
                        );
                      })(),
                    this instanceof e
                      ? (function (e, t) {
                          try {
                            t(
                              function (t) {
                                N(e, t);
                              },
                              function (t) {
                                x(e, t);
                              }
                            );
                          } catch (t) {
                            x(e, t);
                          }
                        })(this, t)
                      : (function () {
                          throw new TypeError(
                            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                          );
                        })());
              }
              return (
                (e.prototype.catch = function (e) {
                  return this.then(null, e);
                }),
                (e.prototype.finally = function (e) {
                  var r = this.constructor;
                  return t(e)
                    ? this.then(
                        function (t) {
                          return r.resolve(e()).then(function () {
                            return t;
                          });
                        },
                        function (t) {
                          return r.resolve(e()).then(function () {
                            throw t;
                          });
                        }
                      )
                    : this.then(e, e);
                }),
                e
              );
            })();
            return (
              (V.prototype.then = E),
              (V.all = function (e) {
                return new z(this, e).promise;
              }),
              (V.race = function (e) {
                var t = this;
                return r(e)
                  ? new t(function (r, n) {
                      for (var i = e.length, o = 0; o < i; o++)
                        t.resolve(e[o]).then(r, n);
                    })
                  : new t(function (e, t) {
                      return t(
                        new TypeError("You must pass an array to race.")
                      );
                    });
              }),
              (V.resolve = S),
              (V.reject = function (e) {
                var t = new this(T);
                return x(t, e), t;
              }),
              (V._setScheduler = function (e) {
                s = e;
              }),
              (V._setAsap = function (e) {
                u = e;
              }),
              (V._asap = u),
              (V.polyfill = function () {
                var e = void 0;
                if (void 0 !== i) e = i;
                else if ("undefined" != typeof self) e = self;
                else
                  try {
                    e = Function("return this")();
                  } catch (e) {
                    throw new Error(
                      "polyfill failed because global object is unavailable in this environment"
                    );
                  }
                var t = e.Promise;
                if (t) {
                  var r = null;
                  try {
                    r = Object.prototype.toString.call(t.resolve());
                  } catch (e) {}
                  if ("[object Promise]" === r && !t.cast) return;
                }
                e.Promise = V;
              }),
              (V.Promise = V),
              V
            );
          });
        }.call(
          this,
          e("_process"),
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { _process: 7 },
    ],
    7: [
      function (e, t, r) {
        var n,
          i,
          o = (t.exports = {});
        function a() {
          throw new Error("setTimeout has not been defined");
        }
        function s() {
          throw new Error("clearTimeout has not been defined");
        }
        function u(e) {
          if (n === setTimeout) return setTimeout(e, 0);
          if ((n === a || !n) && setTimeout)
            return (n = setTimeout), setTimeout(e, 0);
          try {
            return n(e, 0);
          } catch (t) {
            try {
              return n.call(null, e, 0);
            } catch (t) {
              return n.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            n = "function" == typeof setTimeout ? setTimeout : a;
          } catch (e) {
            n = a;
          }
          try {
            i = "function" == typeof clearTimeout ? clearTimeout : s;
          } catch (e) {
            i = s;
          }
        })();
        var c,
          f = [],
          l = !1,
          d = -1;
        function h() {
          l &&
            c &&
            ((l = !1),
            c.length ? (f = c.concat(f)) : (d = -1),
            f.length && p());
        }
        function p() {
          if (!l) {
            var e = u(h);
            l = !0;
            for (var t = f.length; t; ) {
              for (c = f, f = []; ++d < t; ) c && c[d].run();
              (d = -1), (t = f.length);
            }
            (c = null),
              (l = !1),
              (function (e) {
                if (i === clearTimeout) return clearTimeout(e);
                if ((i === s || !i) && clearTimeout)
                  return (i = clearTimeout), clearTimeout(e);
                try {
                  i(e);
                } catch (t) {
                  try {
                    return i.call(null, e);
                  } catch (t) {
                    return i.call(this, e);
                  }
                }
              })(e);
          }
        }
        function v(e, t) {
          (this.fun = e), (this.array = t);
        }
        function g() {}
        (o.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
          f.push(new v(e, t)), 1 !== f.length || l || u(p);
        }),
          (v.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (o.title = "browser"),
          (o.browser = !0),
          (o.env = {}),
          (o.argv = []),
          (o.version = ""),
          (o.versions = {}),
          (o.on = g),
          (o.addListener = g),
          (o.once = g),
          (o.off = g),
          (o.removeListener = g),
          (o.removeAllListeners = g),
          (o.emit = g),
          (o.prependListener = g),
          (o.prependOnceListener = g),
          (o.listeners = function (e) {
            return [];
          }),
          (o.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (o.cwd = function () {
            return "/";
          }),
          (o.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (o.umask = function () {
            return 0;
          });
      },
      {},
    ],
    3: [
      function (e, t, r) {
        var n =
            Object.create ||
            function (e) {
              var t = function () {};
              return (t.prototype = e), new t();
            },
          i =
            Object.keys ||
            function (e) {
              var t = [];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
              return r;
            },
          o =
            Function.prototype.bind ||
            function (e) {
              var t = this;
              return function () {
                return t.apply(e, arguments);
              };
            };
        function a() {
          (this._events &&
            Object.prototype.hasOwnProperty.call(this, "_events")) ||
            ((this._events = n(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }
        (t.exports = a),
          (a.EventEmitter = a),
          (a.prototype._events = void 0),
          (a.prototype._maxListeners = void 0);
        var s,
          u = 10;
        try {
          var c = {};
          Object.defineProperty && Object.defineProperty(c, "x", { value: 0 }),
            (s = 0 === c.x);
        } catch (e) {
          s = !1;
        }
        function f(e) {
          return void 0 === e._maxListeners
            ? a.defaultMaxListeners
            : e._maxListeners;
        }
        function l(e, t, r, i) {
          var o, a, s;
          if ("function" != typeof r)
            throw new TypeError('"listener" argument must be a function');
          if (
            ((a = e._events)
              ? (a.newListener &&
                  (e.emit("newListener", t, r.listener ? r.listener : r),
                  (a = e._events)),
                (s = a[t]))
              : ((a = e._events = n(null)), (e._eventsCount = 0)),
            s)
          ) {
            if (
              ("function" == typeof s
                ? (s = a[t] = i ? [r, s] : [s, r])
                : i
                ? s.unshift(r)
                : s.push(r),
              !s.warned && (o = f(e)) && o > 0 && s.length > o)
            ) {
              s.warned = !0;
              var u = new Error(
                "Possible EventEmitter memory leak detected. " +
                  s.length +
                  ' "' +
                  String(t) +
                  '" listeners added. Use emitter.setMaxListeners() to increase limit.'
              );
              (u.name = "MaxListenersExceededWarning"),
                (u.emitter = e),
                (u.type = t),
                (u.count = s.length),
                "object" == typeof console &&
                  console.warn &&
                  console.warn("%s: %s", u.name, u.message);
            }
          } else (s = a[t] = r), ++e._eventsCount;
          return e;
        }
        function d() {
          if (!this.fired)
            switch (
              (this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              arguments.length)
            ) {
              case 0:
                return this.listener.call(this.target);
              case 1:
                return this.listener.call(this.target, arguments[0]);
              case 2:
                return this.listener.call(
                  this.target,
                  arguments[0],
                  arguments[1]
                );
              case 3:
                return this.listener.call(
                  this.target,
                  arguments[0],
                  arguments[1],
                  arguments[2]
                );
              default:
                for (
                  var e = new Array(arguments.length), t = 0;
                  t < e.length;
                  ++t
                )
                  e[t] = arguments[t];
                this.listener.apply(this.target, e);
            }
        }
        function h(e, t, r) {
          var n = {
              fired: !1,
              wrapFn: void 0,
              target: e,
              type: t,
              listener: r,
            },
            i = o.call(d, n);
          return (i.listener = r), (n.wrapFn = i), i;
        }
        function p(e, t, r) {
          var n = e._events;
          if (!n) return [];
          var i = n[t];
          return i
            ? "function" == typeof i
              ? r
                ? [i.listener || i]
                : [i]
              : r
              ? (function (e) {
                  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                    t[r] = e[r].listener || e[r];
                  return t;
                })(i)
              : g(i, i.length)
            : [];
        }
        function v(e) {
          var t = this._events;
          if (t) {
            var r = t[e];
            if ("function" == typeof r) return 1;
            if (r) return r.length;
          }
          return 0;
        }
        function g(e, t) {
          for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
          return r;
        }
        s
          ? Object.defineProperty(a, "defaultMaxListeners", {
              enumerable: !0,
              get: function () {
                return u;
              },
              set: function (e) {
                if ("number" != typeof e || e < 0 || e != e)
                  throw new TypeError(
                    '"defaultMaxListeners" must be a positive number'
                  );
                u = e;
              },
            })
          : (a.defaultMaxListeners = u),
          (a.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || e < 0 || isNaN(e))
              throw new TypeError('"n" argument must be a positive number');
            return (this._maxListeners = e), this;
          }),
          (a.prototype.getMaxListeners = function () {
            return f(this);
          }),
          (a.prototype.emit = function (e) {
            var t,
              r,
              n,
              i,
              o,
              a,
              s = "error" === e;
            if ((a = this._events)) s = s && null == a.error;
            else if (!s) return !1;
            if (s) {
              if (
                (arguments.length > 1 && (t = arguments[1]), t instanceof Error)
              )
                throw t;
              var u = new Error('Unhandled "error" event. (' + t + ")");
              throw ((u.context = t), u);
            }
            if (!(r = a[e])) return !1;
            var c = "function" == typeof r;
            switch ((n = arguments.length)) {
              case 1:
                !(function (e, t, r) {
                  if (t) e.call(r);
                  else
                    for (var n = e.length, i = g(e, n), o = 0; o < n; ++o)
                      i[o].call(r);
                })(r, c, this);
                break;
              case 2:
                !(function (e, t, r, n) {
                  if (t) e.call(r, n);
                  else
                    for (var i = e.length, o = g(e, i), a = 0; a < i; ++a)
                      o[a].call(r, n);
                })(r, c, this, arguments[1]);
                break;
              case 3:
                !(function (e, t, r, n, i) {
                  if (t) e.call(r, n, i);
                  else
                    for (var o = e.length, a = g(e, o), s = 0; s < o; ++s)
                      a[s].call(r, n, i);
                })(r, c, this, arguments[1], arguments[2]);
                break;
              case 4:
                !(function (e, t, r, n, i, o) {
                  if (t) e.call(r, n, i, o);
                  else
                    for (var a = e.length, s = g(e, a), u = 0; u < a; ++u)
                      s[u].call(r, n, i, o);
                })(r, c, this, arguments[1], arguments[2], arguments[3]);
                break;
              default:
                for (i = new Array(n - 1), o = 1; o < n; o++)
                  i[o - 1] = arguments[o];
                !(function (e, t, r, n) {
                  if (t) e.apply(r, n);
                  else
                    for (var i = e.length, o = g(e, i), a = 0; a < i; ++a)
                      o[a].apply(r, n);
                })(r, c, this, i);
            }
            return !0;
          }),
          (a.prototype.addListener = function (e, t) {
            return l(this, e, t, !1);
          }),
          (a.prototype.on = a.prototype.addListener),
          (a.prototype.prependListener = function (e, t) {
            return l(this, e, t, !0);
          }),
          (a.prototype.once = function (e, t) {
            if ("function" != typeof t)
              throw new TypeError('"listener" argument must be a function');
            return this.on(e, h(this, e, t)), this;
          }),
          (a.prototype.prependOnceListener = function (e, t) {
            if ("function" != typeof t)
              throw new TypeError('"listener" argument must be a function');
            return this.prependListener(e, h(this, e, t)), this;
          }),
          (a.prototype.removeListener = function (e, t) {
            var r, i, o, a, s;
            if ("function" != typeof t)
              throw new TypeError('"listener" argument must be a function');
            if (!(i = this._events)) return this;
            if (!(r = i[e])) return this;
            if (r === t || r.listener === t)
              0 == --this._eventsCount
                ? (this._events = n(null))
                : (delete i[e],
                  i.removeListener &&
                    this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) {
              for (o = -1, a = r.length - 1; a >= 0; a--)
                if (r[a] === t || r[a].listener === t) {
                  (s = r[a].listener), (o = a);
                  break;
                }
              if (o < 0) return this;
              0 === o
                ? r.shift()
                : (function (e, t) {
                    for (
                      var r = t, n = r + 1, i = e.length;
                      n < i;
                      r += 1, n += 1
                    )
                      e[r] = e[n];
                    e.pop();
                  })(r, o),
                1 === r.length && (i[e] = r[0]),
                i.removeListener && this.emit("removeListener", e, s || t);
            }
            return this;
          }),
          (a.prototype.removeAllListeners = function (e) {
            var t, r, o;
            if (!(r = this._events)) return this;
            if (!r.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = n(null)), (this._eventsCount = 0))
                  : r[e] &&
                    (0 == --this._eventsCount
                      ? (this._events = n(null))
                      : delete r[e]),
                this
              );
            if (0 === arguments.length) {
              var a,
                s = i(r);
              for (o = 0; o < s.length; ++o)
                "removeListener" !== (a = s[o]) && this.removeAllListeners(a);
              return (
                this.removeAllListeners("removeListener"),
                (this._events = n(null)),
                (this._eventsCount = 0),
                this
              );
            }
            if ("function" == typeof (t = r[e])) this.removeListener(e, t);
            else if (t)
              for (o = t.length - 1; o >= 0; o--) this.removeListener(e, t[o]);
            return this;
          }),
          (a.prototype.listeners = function (e) {
            return p(this, e, !0);
          }),
          (a.prototype.rawListeners = function (e) {
            return p(this, e, !1);
          }),
          (a.listenerCount = function (e, t) {
            return "function" == typeof e.listenerCount
              ? e.listenerCount(t)
              : v.call(e, t);
          }),
          (a.prototype.listenerCount = v),
          (a.prototype.eventNames = function () {
            return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
          });
      },
      {},
    ],
    4: [
      function (e, t, r) {
        function n(e, t) {
          Error.captureStackTrace(this, this.constructor),
            (this.name = "FsmError"),
            (this.message = e),
            (this.trigger = t.name),
            (this.current = t.from);
        }
        (t.exports = n),
          (n.prototype = Object.create(Error.prototype)),
          (n.prototype.constructor = n);
      },
      {},
    ],
    5: [
      function (e, t, r) {
        (function (r) {
          "use strict";
          var n = e("./fsm-error"),
            i = e("stampit"),
            o = e("lodash"),
            a = e("events").EventEmitter,
            s = i({
              init: function (e) {
                Object.assign(this, e);
              },
            }),
            u = i({
              props: {
                events: [],
                pseudoStates: {},
                responses: {},
                pseudoEvents: {},
                callbacks: {},
                states: {},
                final: null,
                initial: "none",
                current: "none",
              },
              statics: {
                Promise: r.Promise || e("es6-promise").Promise,
                FsmError: n,
                callbackPrefix: "on",
                noChoiceFound: "no-choice",
                type: function (e) {
                  var t = this.Type;
                  return e.from === e.to || o.isUndefined(e.to)
                    ? t.NOOP
                    : "*" === e.from
                    ? t.GENERAL
                    : t.INTER;
                },
                Type: { NOOP: 0, INTER: 1, GENERAL: 2 },
                isConditional: function (e) {
                  return o.isFunction(e.condition) && o.isArray(e.to);
                },
                pseudoEvent: function (e, t) {
                  return e + "--" + t;
                },
              },
              methods: {
                emit: o.noop,
                canTransition: function (e) {
                  var t = this.factory,
                    r = t.Type;
                  switch (t.type(e)) {
                    case r.NOOP:
                      if (this.inTransition)
                        throw new t.FsmError("Previous transition pending", e);
                      break;
                    case r.INTER:
                      if (
                        this.states[this.current].noopTransition > 0 ||
                        this.inTransition
                      )
                        throw new t.FsmError("Previous transition pending", e);
                  }
                  return e;
                },
                can: function (e) {
                  return Boolean(this.events[e][this.current]);
                },
                cannot: function (e) {
                  return !this.can(e);
                },
                hasState: function (e) {
                  return Boolean(this.states[e]);
                },
                is: function (e) {
                  return e == this.current;
                },
                isFinal: function (e) {
                  return (
                    (e = e || this.current),
                    o.isArray(this.final)
                      ? o.includes(this.final, e)
                      : this.final === e
                  );
                },
                isValidEvent: function (e) {
                  if (this.cannot(e.name))
                    throw new this.factory.FsmError(
                      "Invalid event in current state",
                      e
                    );
                  return e;
                },
                addEvents: function (e) {
                  o.forEach(
                    e,
                    function (e) {
                      this.addEvent(e);
                    }.bind(this)
                  );
                },
                addEvent: function (e) {
                  if (
                    ((this.events[e.name] = this.events[e.name] || {}),
                    this.factory.isConditional(e))
                  )
                    return this.addConditionalEvent(e);
                  this.addBasicEvent(e);
                },
                addBasicEvent: function (e) {
                  if (o.isArray(e.to))
                    throw new this.factory.FsmError("Ambigous transition", e);
                  (e.from = [].concat(e.from || [])),
                    o.forEach(
                      e.from,
                      function (t) {
                        this.events[e.name][t] = e.to || t;
                      }.bind(this)
                    );
                },
                addConditionalEvent: function (e) {
                  var t,
                    r = this.factory,
                    n = r.callbackPrefix,
                    i = r.noChoiceFound,
                    a = r.pseudoEvent,
                    s = r.Promise;
                  if (o.isArray(e.from))
                    return o.forEach(
                      e.from,
                      function (t) {
                        this.addConditionalEvent({
                          name: e.name,
                          from: t,
                          to: e.to,
                          condition: e.condition,
                        });
                      }.bind(this)
                    );
                  (t = e.from + "__" + e.name),
                    (this.pseudoStates[t] = e.from),
                    this.addState(t),
                    this.addEvent({ name: e.name, from: e.from, to: t }),
                    this.addEvent({ name: a(t, i), from: t, to: e.from }),
                    (this.pseudoEvents[a(t, i)] = e.name),
                    o.forEach(
                      e.to,
                      function (r) {
                        this.addEvent({ name: a(t, r), from: t, to: r }),
                          (this.pseudoEvents[a(t, r)] = e.name);
                      }.bind(this)
                    ),
                    (this.callbacks[n + "entered" + t] = function (n) {
                      var u = this.target;
                      return (
                        o.defaults(n, { args: [] }),
                        new s(function (t) {
                          t(e.condition(n));
                        }).then(
                          function (s) {
                            var c;
                            return (
                              o.isNumber(s)
                                ? (c = e.to[s])
                                : o.includes(e.to, s) && (c = s),
                              o.isUndefined(c)
                                ? u[a(t, i)]().then(function () {
                                    throw new r.FsmError(
                                      "Choice index out of range",
                                      e
                                    );
                                  })
                                : u[a(t, c)].apply(u, n.args)
                            );
                          }.bind(this)
                        )
                      );
                    }.bind(this));
                },
                addState: function (e) {
                  var t = this.states;
                  (e = [].concat(e || [])).forEach(function (e) {
                    t[e] = t[e] || { noopTransition: 0 };
                  });
                },
                preprocessPseudoState: function (e, t) {
                  var r = this.responses;
                  return (
                    Object.defineProperty(t, "res", {
                      get: function () {
                        return r[e];
                      },
                      set: function (t) {
                        r[e] = t;
                      },
                    }),
                    delete r[e],
                    t
                  );
                },
                preprocessPseudoEvent: function (e, t) {
                  var r = this.pseudoEvents[e],
                    n = this.responses,
                    i = this.pseudoStates,
                    o = {
                      name: r,
                      from: i[this.current],
                      to: t.to,
                      args: t.args,
                    };
                  return (
                    Object.defineProperties(o, {
                      res: {
                        get: function () {
                          return n[r];
                        },
                        set: function (e) {
                          n[r] = e;
                        },
                      },
                    }),
                    o
                  );
                },
                buildEvent: function (e) {
                  var t = this.callbacks,
                    r = this.pseudoEvents,
                    n = this.pseudoStates,
                    i = this.events,
                    a = this.factory.Type,
                    s = this.factory.callbackPrefix;
                  return function () {
                    var u,
                      c = o.toArray(arguments),
                      f = this.current,
                      l = this.target,
                      d = { name: e, from: f, to: i[e][f], args: c },
                      h = r[e];
                    return (
                      n[d.to] && (d = this.preprocessPseudoState(e, d)),
                      h && (u = this.preprocessPseudoEvent(e, d)),
                      new this.factory.Promise(function (e) {
                        e(d);
                      })
                        .then(this.isValidEvent.bind(this))
                        .then(this.canTransition.bind(this))
                        .then(
                          t[s + "leave" + f]
                            ? t[s + "leave" + f].bind(l, d)
                            : o.identity
                        )
                        .then(t.onleave ? t.onleave.bind(l, d) : o.identity)
                        .then(
                          function (e) {
                            switch (this.factory.type(e)) {
                              case a.NOOP:
                                this.states[this.current].noopTransition += 1;
                                break;
                              default:
                                this.inTransition = !0;
                            }
                            return e;
                          }.bind(this, d)
                        )
                        .then(t[s + e] ? t[s + e].bind(l, d) : o.identity)
                        .then(
                          t[s + "enter" + i[e][f]]
                            ? t[s + "enter" + i[e][f]].bind(l, h ? u : d)
                            : o.identity
                        )
                        .then(
                          t.onenter ? t.onenter.bind(l, h ? u : d) : o.identity
                        )
                        .then(
                          function (e) {
                            switch (this.factory.type(e)) {
                              case a.NOOP:
                                this.states[this.current].noopTransition -= 1;
                                break;
                              default:
                                (this.inTransition = !1),
                                  (this.current = e.to),
                                  this.emit("state", this.current);
                            }
                            return e;
                          }.bind(this, d)
                        )
                        .then(
                          t[s + "entered" + i[e][f]]
                            ? t[s + "entered" + i[e][f]].bind(l, h ? u : d)
                            : o.identity
                        )
                        .then(
                          t.onentered
                            ? t.onentered.bind(l, h ? u : d)
                            : o.identity
                        )
                        .then(
                          function (e) {
                            return e.res || e;
                          }.bind(this, d)
                        )
                        .catch(
                          function (e) {
                            switch (this.factory.type(d)) {
                              case a.INTER:
                                this.inTransition = !1;
                                break;
                              case a.NOOP:
                                this.states[this.current].noopTransition > 0 &&
                                  (this.states[
                                    this.current
                                  ].noopTransition -= 1);
                            }
                            throw e;
                          }.bind(this)
                        )
                    );
                  }.bind(this);
                },
                initTarget: function (e) {
                  var t;
                  return (
                    o.isObject(e) || (e = new a()),
                    o.isFunction(e.emit) &&
                      (this.emit = function () {
                        return e.emit.apply(e, arguments);
                      }),
                    (t = o.mapValues(
                      this.events,
                      function (e, t) {
                        return this.buildEvent(t);
                      }.bind(this)
                    )),
                    o.assign(e, t, {
                      can: this.can.bind(this),
                      cannot: this.cannot.bind(this),
                      is: this.is.bind(this),
                      hasState: this.hasState.bind(this),
                      isFinal: this.isFinal.bind(this),
                    }),
                    Object.defineProperty(e, "current", {
                      get: function () {
                        return this.current;
                      }.bind(this),
                    }),
                    (this.target = e),
                    e
                  );
                },
              },
              init: function (e, t) {
                this.factory = t.stamp;
                var r = this.events;
                return (
                  (this.events = {}),
                  o.forEach(
                    r,
                    function (e, t) {
                      o.isString(t) && (e.name = t),
                        this.addEvent(e),
                        this.addState(e.from),
                        this.addState(e.to);
                    }.bind(this)
                  ),
                  (this.current = this.initial),
                  this.initTarget(t.args[1])
                );
              },
            });
          (u = s.compose(u)), (t.exports = u);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { "./fsm-error": 4, "es6-promise": 2, events: 3, lodash: 6, stampit: 11 },
    ],
    11: [
      function (e, t, r) {
        "use strict";
        function n(e, t) {
          if (void 0 === t) return e;
          if (u(t)) return (u(e) ? e : []).concat(t);
          if (!c(t)) return t;
          for (
            var r = a(e) ? e : {}, i = Object.keys(t), o = 0;
            o < i.length;
            o += 1
          ) {
            var s = i[o],
              f = t[s];
            if (void 0 !== f) {
              var l = r[s],
                d = c(l) || u(f) ? l : {};
              r[s] = n(d, f);
            }
          }
          return r;
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var i = function (e) {
          for (var t = [], r = arguments.length - 1; r-- > 0; )
            t[r] = arguments[r + 1];
          return t.reduce(n, e);
        };
        function o(e) {
          return "function" == typeof e;
        }
        function a(e) {
          var t = typeof e;
          return !!e && ("object" === t || "function" === t);
        }
        var s =
            Object.assign ||
            function (e) {
              for (var t = arguments, r = 1; r < t.length; r += 1) {
                var n = t[r];
                if (n)
                  for (var i = Object.keys(n), o = 0; o < i.length; o += 1) {
                    var a = i[o];
                    e[a] = n[a];
                  }
              }
              return e;
            },
          u = Array.isArray;
        function c(e) {
          return (
            !!e &&
            "object" == typeof e &&
            Object.getPrototypeOf(e) === Object.prototype
          );
        }
        var f = Array.prototype.concat;
        function l() {
          var e = f.apply([], arguments).filter(o);
          return 0 === e.length ? void 0 : e;
        }
        function d(e, t, r) {
          if (u(t)) {
            var n = t.length,
              i = e[r] || [];
            e[r] = i;
            for (var a = 0; a < n; a += 1) {
              var s = t[a];
              o(s) && i.indexOf(s) < 0 && i.push(s);
            }
          }
        }
        function h(e, t, r, n) {
          a(t[r]) && (a(e[r]) || (e[r] = {}), n(e[r], t[r]));
        }
        function p(e, t, r) {
          h(e, t, r, i);
        }
        function v(e, t, r) {
          h(e, t, r, s);
        }
        var g = function (e) {
          void 0 === e && (e = {});
          var t = e.methods,
            r = e.properties,
            n = e.props,
            o = e.refs,
            u = e.initializers,
            c = e.init,
            f = e.composers,
            h = e.deepProperties,
            p = e.deepProps,
            v = e.propertyDescriptors,
            g = e.staticProperties,
            m = e.statics,
            y = e.staticDeepProperties,
            _ = e.deepStatics,
            w = e.staticPropertyDescriptors,
            C = e.configuration,
            E = e.conf,
            S = e.deepConfiguration,
            b = e.deepConf,
            T = a(n) || a(o) || a(r) ? s({}, n, o, r) : void 0,
            A = a(p) ? i({}, p) : void 0;
          A = a(h) ? i(A, h) : A;
          var O = a(m) || a(g) ? s({}, m, g) : void 0,
            I = a(_) ? i({}, _) : void 0;
          I = a(y) ? i(I, y) : I;
          var R = a(E) || a(C) ? s({}, E, C) : void 0,
            P = a(b) ? i({}, b) : void 0;
          P = a(S) ? i(P, S) : P;
          var M = l(c, u),
            N = l(f);
          N && d((P = P || {}), N, "composers");
          var D = {};
          return (
            t && (D.methods = t),
            T && (D.properties = T),
            M && (D.initializers = M),
            A && (D.deepProperties = A),
            O && (D.staticProperties = O),
            t && (D.methods = t),
            I && (D.staticDeepProperties = I),
            v && (D.propertyDescriptors = v),
            w && (D.staticPropertyDescriptors = w),
            R && (D.configuration = R),
            P && (D.deepConfiguration = P),
            D
          );
        };
        function m(e, t) {
          var r = (function (e) {
            return function t(r) {
              for (var n = [], a = arguments.length - 1; a-- > 0; )
                n[a] = arguments[a + 1];
              var u = Object.create(e.methods || null);
              if (
                (i(u, e.deepProperties),
                s(u, e.properties),
                Object.defineProperties(u, e.propertyDescriptors || {}),
                !e.initializers || 0 === e.initializers.length)
              )
                return u;
              void 0 === r && (r = {});
              for (var c = e.initializers, f = c.length, l = 0; l < f; l += 1) {
                var d = c[l];
                if (o(d)) {
                  var h = d.call(u, r, {
                    instance: u,
                    stamp: t,
                    args: [r].concat(n),
                  });
                  u = void 0 === h ? u : h;
                }
              }
              return u;
            };
          })(e);
          i(r, e.staticDeepProperties),
            s(r, e.staticProperties),
            Object.defineProperties(r, e.staticPropertyDescriptors || {});
          var n = o(r.compose) ? r.compose : t;
          return (
            (r.compose = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return n.apply(this, e);
            }),
            s(r.compose, e),
            r
          );
        }
        function y(e, t) {
          var r = (t && t.compose) || t;
          return a(r)
            ? (v(e, r, "methods"),
              v(e, r, "properties"),
              p(e, r, "deepProperties"),
              v(e, r, "propertyDescriptors"),
              v(e, r, "staticProperties"),
              p(e, r, "staticDeepProperties"),
              v(e, r, "staticPropertyDescriptors"),
              v(e, r, "configuration"),
              p(e, r, "deepConfiguration"),
              d(e, r.initializers, "initializers"),
              e)
            : e;
        }
        function _() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return m([this].concat(e).filter(a).reduce(y, {}), _);
        }
        function w(e) {
          return o(e) && o(e.compose);
        }
        function C(e, t) {
          return function () {
            for (var r, n = arguments.length, i = Array(n); n--; )
              i[n] = arguments[n];
            return ((this && this.compose) || x).call(
              this,
              (((r = {})[e] = t.apply(void 0, [{}].concat(i))), r)
            );
          };
        }
        var E = C("methods", s),
          S = C("properties", s);
        function b() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return ((this && this.compose) || x).call(this, {
            initializers: l.apply(void 0, e),
          });
        }
        function T() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return ((this && this.compose) || x).call(this, {
            composers: l.apply(void 0, e),
          });
        }
        var A = C("deepProperties", i),
          O = C("staticProperties", s),
          I = C("staticDeepProperties", i),
          R = C("configuration", s),
          P = C("deepConfiguration", i),
          M = C("propertyDescriptors", s),
          N = C("staticPropertyDescriptors", s),
          D = {
            methods: E,
            properties: S,
            refs: S,
            props: S,
            initializers: b,
            init: b,
            composers: T,
            deepProperties: A,
            deepProps: A,
            staticProperties: O,
            statics: O,
            staticDeepProperties: I,
            deepStatics: I,
            configuration: R,
            conf: R,
            deepConfiguration: P,
            deepConf: P,
            propertyDescriptors: M,
            staticPropertyDescriptors: N,
          },
          k = _(
            { staticProperties: D },
            {
              staticProperties: {
                create: function () {
                  for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                  return this.apply(void 0, e);
                },
                compose: x,
              },
            }
          );
        function x() {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var r = e.filter(a).map(function (e) {
              return w(e) ? e : g(e);
            }),
            n = _.apply(this || k, r),
            i =
              n.compose.deepConfiguration &&
              n.compose.deepConfiguration.composers;
          if (u(i) && i.length > 0) {
            for (var s = [], c = 0; c < i.length; c += 1) {
              var f = i[c];
              o(f) && s.indexOf(f) < 0 && s.push(f);
            }
            (n.compose.deepConfiguration.composers = s),
              w(this) && r.unshift(this);
            for (var l = 0; l < s.length; l += 1) {
              var d = (0, s[l])({ stamp: n, composables: r });
              n = w(d) ? d : n;
            }
          }
          return n;
        }
        var B = x.bind();
        x.compose = B;
        var L = s(x, D);
        (r.methods = E),
          (r.properties = S),
          (r.refs = S),
          (r.props = S),
          (r.initializers = b),
          (r.init = b),
          (r.composers = T),
          (r.deepProperties = A),
          (r.deepProps = A),
          (r.staticProperties = O),
          (r.statics = O),
          (r.staticDeepProperties = I),
          (r.deepStatics = I),
          (r.configuration = R),
          (r.conf = R),
          (r.deepConfiguration = P),
          (r.deepConf = P),
          (r.propertyDescriptors = M),
          (r.staticPropertyDescriptors = N),
          (r.compose = B),
          (r.default = L),
          (t.exports = r.default);
      },
      {},
    ],
    6: [
      function (e, t, r) {
        (function (e) {
          (function () {
            var n,
              i = 200,
              o =
                "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
              a = "Expected a function",
              s = "__lodash_hash_undefined__",
              u = 500,
              c = "__lodash_placeholder__",
              f = 1,
              l = 2,
              d = 4,
              h = 1,
              p = 2,
              v = 1,
              g = 2,
              m = 4,
              y = 8,
              _ = 16,
              w = 32,
              C = 64,
              E = 128,
              S = 256,
              b = 512,
              T = 30,
              A = "...",
              O = 800,
              I = 16,
              R = 1,
              P = 2,
              M = 1 / 0,
              N = 9007199254740991,
              D = 1.7976931348623157e308,
              k = NaN,
              x = 4294967295,
              B = x - 1,
              L = x >>> 1,
              j = [
                ["ary", E],
                ["bind", v],
                ["bindKey", g],
                ["curry", y],
                ["curryRight", _],
                ["flip", b],
                ["partial", w],
                ["partialRight", C],
                ["rearg", S],
              ],
              F = "[object Arguments]",
              U = "[object Array]",
              z = "[object AsyncFunction]",
              V = "[object Boolean]",
              G = "[object Date]",
              H = "[object DOMException]",
              W = "[object Error]",
              X = "[object Function]",
              Y = "[object GeneratorFunction]",
              K = "[object Map]",
              Z = "[object Number]",
              q = "[object Null]",
              J = "[object Object]",
              Q = "[object Proxy]",
              $ = "[object RegExp]",
              ee = "[object Set]",
              te = "[object String]",
              re = "[object Symbol]",
              ne = "[object Undefined]",
              ie = "[object WeakMap]",
              oe = "[object WeakSet]",
              ae = "[object ArrayBuffer]",
              se = "[object DataView]",
              ue = "[object Float32Array]",
              ce = "[object Float64Array]",
              fe = "[object Int8Array]",
              le = "[object Int16Array]",
              de = "[object Int32Array]",
              he = "[object Uint8Array]",
              pe = "[object Uint8ClampedArray]",
              ve = "[object Uint16Array]",
              ge = "[object Uint32Array]",
              me = /\b__p \+= '';/g,
              ye = /\b(__p \+=) '' \+/g,
              _e = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
              we = /&(?:amp|lt|gt|quot|#39);/g,
              Ce = /[&<>"']/g,
              Ee = RegExp(we.source),
              Se = RegExp(Ce.source),
              be = /<%-([\s\S]+?)%>/g,
              Te = /<%([\s\S]+?)%>/g,
              Ae = /<%=([\s\S]+?)%>/g,
              Oe = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              Ie = /^\w*$/,
              Re =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              Pe = /[\\^$.*+?()[\]{}|]/g,
              Me = RegExp(Pe.source),
              Ne = /^\s+|\s+$/g,
              De = /^\s+/,
              ke = /\s+$/,
              xe = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
              Be = /\{\n\/\* \[wrapped with (.+)\] \*/,
              Le = /,? & /,
              je = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
              Fe = /\\(\\)?/g,
              Ue = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
              ze = /\w*$/,
              Ve = /^[-+]0x[0-9a-f]+$/i,
              Ge = /^0b[01]+$/i,
              He = /^\[object .+?Constructor\]$/,
              We = /^0o[0-7]+$/i,
              Xe = /^(?:0|[1-9]\d*)$/,
              Ye = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
              Ke = /($^)/,
              Ze = /['\n\r\u2028\u2029\\]/g,
              qe = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
              Je =
                "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
              Qe = "[\\ud800-\\udfff]",
              $e = "[" + Je + "]",
              et = "[" + qe + "]",
              tt = "\\d+",
              rt = "[\\u2700-\\u27bf]",
              nt = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
              it =
                "[^\\ud800-\\udfff" +
                Je +
                tt +
                "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
              ot = "\\ud83c[\\udffb-\\udfff]",
              at = "[^\\ud800-\\udfff]",
              st = "(?:\\ud83c[\\udde6-\\uddff]){2}",
              ut = "[\\ud800-\\udbff][\\udc00-\\udfff]",
              ct = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
              ft = "(?:" + nt + "|" + it + ")",
              lt = "(?:" + ct + "|" + it + ")",
              dt = "(?:" + et + "|" + ot + ")" + "?",
              ht =
                "[\\ufe0e\\ufe0f]?" +
                dt +
                ("(?:\\u200d(?:" +
                  [at, st, ut].join("|") +
                  ")[\\ufe0e\\ufe0f]?" +
                  dt +
                  ")*"),
              pt = "(?:" + [rt, st, ut].join("|") + ")" + ht,
              vt = "(?:" + [at + et + "?", et, st, ut, Qe].join("|") + ")",
              gt = RegExp("['’]", "g"),
              mt = RegExp(et, "g"),
              yt = RegExp(ot + "(?=" + ot + ")|" + vt + ht, "g"),
              _t = RegExp(
                [
                  ct +
                    "?" +
                    nt +
                    "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
                    [$e, ct, "$"].join("|") +
                    ")",
                  lt +
                    "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
                    [$e, ct + ft, "$"].join("|") +
                    ")",
                  ct + "?" + ft + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
                  ct + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
                  "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                  "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                  tt,
                  pt,
                ].join("|"),
                "g"
              ),
              wt = RegExp("[\\u200d\\ud800-\\udfff" + qe + "\\ufe0e\\ufe0f]"),
              Ct =
                /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
              Et = [
                "Array",
                "Buffer",
                "DataView",
                "Date",
                "Error",
                "Float32Array",
                "Float64Array",
                "Function",
                "Int8Array",
                "Int16Array",
                "Int32Array",
                "Map",
                "Math",
                "Object",
                "Promise",
                "RegExp",
                "Set",
                "String",
                "Symbol",
                "TypeError",
                "Uint8Array",
                "Uint8ClampedArray",
                "Uint16Array",
                "Uint32Array",
                "WeakMap",
                "_",
                "clearTimeout",
                "isFinite",
                "parseInt",
                "setTimeout",
              ],
              St = -1,
              bt = {};
            (bt[ue] =
              bt[ce] =
              bt[fe] =
              bt[le] =
              bt[de] =
              bt[he] =
              bt[pe] =
              bt[ve] =
              bt[ge] =
                !0),
              (bt[F] =
                bt[U] =
                bt[ae] =
                bt[V] =
                bt[se] =
                bt[G] =
                bt[W] =
                bt[X] =
                bt[K] =
                bt[Z] =
                bt[J] =
                bt[$] =
                bt[ee] =
                bt[te] =
                bt[ie] =
                  !1);
            var Tt = {};
            (Tt[F] =
              Tt[U] =
              Tt[ae] =
              Tt[se] =
              Tt[V] =
              Tt[G] =
              Tt[ue] =
              Tt[ce] =
              Tt[fe] =
              Tt[le] =
              Tt[de] =
              Tt[K] =
              Tt[Z] =
              Tt[J] =
              Tt[$] =
              Tt[ee] =
              Tt[te] =
              Tt[re] =
              Tt[he] =
              Tt[pe] =
              Tt[ve] =
              Tt[ge] =
                !0),
              (Tt[W] = Tt[X] = Tt[ie] = !1);
            var At = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029",
              },
              Ot = parseFloat,
              It = parseInt,
              Rt = "object" == typeof e && e && e.Object === Object && e,
              Pt =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              Mt = Rt || Pt || Function("return this")(),
              Nt = "object" == typeof r && r && !r.nodeType && r,
              Dt = Nt && "object" == typeof t && t && !t.nodeType && t,
              kt = Dt && Dt.exports === Nt,
              xt = kt && Rt.process,
              Bt = (function () {
                try {
                  var e = Dt && Dt.require && Dt.require("util").types;
                  return e || (xt && xt.binding && xt.binding("util"));
                } catch (e) {}
              })(),
              Lt = Bt && Bt.isArrayBuffer,
              jt = Bt && Bt.isDate,
              Ft = Bt && Bt.isMap,
              Ut = Bt && Bt.isRegExp,
              zt = Bt && Bt.isSet,
              Vt = Bt && Bt.isTypedArray;
            function Gt(e, t, r) {
              switch (r.length) {
                case 0:
                  return e.call(t);
                case 1:
                  return e.call(t, r[0]);
                case 2:
                  return e.call(t, r[0], r[1]);
                case 3:
                  return e.call(t, r[0], r[1], r[2]);
              }
              return e.apply(t, r);
            }
            function Ht(e, t, r, n) {
              for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
                var a = e[i];
                t(n, a, r(a), e);
              }
              return n;
            }
            function Wt(e, t) {
              for (
                var r = -1, n = null == e ? 0 : e.length;
                ++r < n && !1 !== t(e[r], r, e);

              );
              return e;
            }
            function Xt(e, t) {
              for (
                var r = null == e ? 0 : e.length;
                r-- && !1 !== t(e[r], r, e);

              );
              return e;
            }
            function Yt(e, t) {
              for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
                if (!t(e[r], r, e)) return !1;
              return !0;
            }
            function Kt(e, t) {
              for (
                var r = -1, n = null == e ? 0 : e.length, i = 0, o = [];
                ++r < n;

              ) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a);
              }
              return o;
            }
            function Zt(e, t) {
              return !!(null == e ? 0 : e.length) && or(e, t, 0) > -1;
            }
            function qt(e, t, r) {
              for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
                if (r(t, e[n])) return !0;
              return !1;
            }
            function Jt(e, t) {
              for (
                var r = -1, n = null == e ? 0 : e.length, i = Array(n);
                ++r < n;

              )
                i[r] = t(e[r], r, e);
              return i;
            }
            function Qt(e, t) {
              for (var r = -1, n = t.length, i = e.length; ++r < n; )
                e[i + r] = t[r];
              return e;
            }
            function $t(e, t, r, n) {
              var i = -1,
                o = null == e ? 0 : e.length;
              for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
              return r;
            }
            function er(e, t, r, n) {
              var i = null == e ? 0 : e.length;
              for (n && i && (r = e[--i]); i--; ) r = t(r, e[i], i, e);
              return r;
            }
            function tr(e, t) {
              for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e)) return !0;
              return !1;
            }
            var rr = cr("length");
            function nr(e, t, r) {
              var n;
              return (
                r(e, function (e, r, i) {
                  if (t(e, r, i)) return (n = r), !1;
                }),
                n
              );
            }
            function ir(e, t, r, n) {
              for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
                if (t(e[o], o, e)) return o;
              return -1;
            }
            function or(e, t, r) {
              return t == t
                ? (function (e, t, r) {
                    var n = r - 1,
                      i = e.length;
                    for (; ++n < i; ) if (e[n] === t) return n;
                    return -1;
                  })(e, t, r)
                : ir(e, sr, r);
            }
            function ar(e, t, r, n) {
              for (var i = r - 1, o = e.length; ++i < o; )
                if (n(e[i], t)) return i;
              return -1;
            }
            function sr(e) {
              return e != e;
            }
            function ur(e, t) {
              var r = null == e ? 0 : e.length;
              return r ? dr(e, t) / r : k;
            }
            function cr(e) {
              return function (t) {
                return null == t ? n : t[e];
              };
            }
            function fr(e) {
              return function (t) {
                return null == e ? n : e[t];
              };
            }
            function lr(e, t, r, n, i) {
              return (
                i(e, function (e, i, o) {
                  r = n ? ((n = !1), e) : t(r, e, i, o);
                }),
                r
              );
            }
            function dr(e, t) {
              for (var r, i = -1, o = e.length; ++i < o; ) {
                var a = t(e[i]);
                a !== n && (r = r === n ? a : r + a);
              }
              return r;
            }
            function hr(e, t) {
              for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
              return n;
            }
            function pr(e) {
              return function (t) {
                return e(t);
              };
            }
            function vr(e, t) {
              return Jt(t, function (t) {
                return e[t];
              });
            }
            function gr(e, t) {
              return e.has(t);
            }
            function mr(e, t) {
              for (var r = -1, n = e.length; ++r < n && or(t, e[r], 0) > -1; );
              return r;
            }
            function yr(e, t) {
              for (var r = e.length; r-- && or(t, e[r], 0) > -1; );
              return r;
            }
            var _r = fr({
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s",
              }),
              wr = fr({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              });
            function Cr(e) {
              return "\\" + At[e];
            }
            function Er(e) {
              return wt.test(e);
            }
            function Sr(e) {
              var t = -1,
                r = Array(e.size);
              return (
                e.forEach(function (e, n) {
                  r[++t] = [n, e];
                }),
                r
              );
            }
            function br(e, t) {
              return function (r) {
                return e(t(r));
              };
            }
            function Tr(e, t) {
              for (var r = -1, n = e.length, i = 0, o = []; ++r < n; ) {
                var a = e[r];
                (a !== t && a !== c) || ((e[r] = c), (o[i++] = r));
              }
              return o;
            }
            function Ar(e) {
              var t = -1,
                r = Array(e.size);
              return (
                e.forEach(function (e) {
                  r[++t] = e;
                }),
                r
              );
            }
            function Or(e) {
              var t = -1,
                r = Array(e.size);
              return (
                e.forEach(function (e) {
                  r[++t] = [e, e];
                }),
                r
              );
            }
            function Ir(e) {
              return Er(e)
                ? (function (e) {
                    var t = (yt.lastIndex = 0);
                    for (; yt.test(e); ) ++t;
                    return t;
                  })(e)
                : rr(e);
            }
            function Rr(e) {
              return Er(e)
                ? (function (e) {
                    return e.match(yt) || [];
                  })(e)
                : (function (e) {
                    return e.split("");
                  })(e);
            }
            var Pr = fr({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            });
            var Mr = (function e(t) {
              var r,
                qe = (t =
                  null == t ? Mt : Mr.defaults(Mt.Object(), t, Mr.pick(Mt, Et)))
                  .Array,
                Je = t.Date,
                Qe = t.Error,
                $e = t.Function,
                et = t.Math,
                tt = t.Object,
                rt = t.RegExp,
                nt = t.String,
                it = t.TypeError,
                ot = qe.prototype,
                at = $e.prototype,
                st = tt.prototype,
                ut = t["__core-js_shared__"],
                ct = at.toString,
                ft = st.hasOwnProperty,
                lt = 0,
                dt = (r = /[^.]+$/.exec(
                  (ut && ut.keys && ut.keys.IE_PROTO) || ""
                ))
                  ? "Symbol(src)_1." + r
                  : "",
                ht = st.toString,
                pt = ct.call(tt),
                vt = Mt._,
                yt = rt(
                  "^" +
                    ct
                      .call(ft)
                      .replace(Pe, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                wt = kt ? t.Buffer : n,
                At = t.Symbol,
                Rt = t.Uint8Array,
                Pt = wt ? wt.allocUnsafe : n,
                Nt = br(tt.getPrototypeOf, tt),
                Dt = tt.create,
                xt = st.propertyIsEnumerable,
                Bt = ot.splice,
                rr = At ? At.isConcatSpreadable : n,
                fr = At ? At.iterator : n,
                Nr = At ? At.toStringTag : n,
                Dr = (function () {
                  try {
                    var e = Fo(tt, "defineProperty");
                    return e({}, "", {}), e;
                  } catch (e) {}
                })(),
                kr = t.clearTimeout !== Mt.clearTimeout && t.clearTimeout,
                xr = Je && Je.now !== Mt.Date.now && Je.now,
                Br = t.setTimeout !== Mt.setTimeout && t.setTimeout,
                Lr = et.ceil,
                jr = et.floor,
                Fr = tt.getOwnPropertySymbols,
                Ur = wt ? wt.isBuffer : n,
                zr = t.isFinite,
                Vr = ot.join,
                Gr = br(tt.keys, tt),
                Hr = et.max,
                Wr = et.min,
                Xr = Je.now,
                Yr = t.parseInt,
                Kr = et.random,
                Zr = ot.reverse,
                qr = Fo(t, "DataView"),
                Jr = Fo(t, "Map"),
                Qr = Fo(t, "Promise"),
                $r = Fo(t, "Set"),
                en = Fo(t, "WeakMap"),
                tn = Fo(tt, "create"),
                rn = en && new en(),
                nn = {},
                on = la(qr),
                an = la(Jr),
                sn = la(Qr),
                un = la($r),
                cn = la(en),
                fn = At ? At.prototype : n,
                ln = fn ? fn.valueOf : n,
                dn = fn ? fn.toString : n;
              function hn(e) {
                if (Is(e) && !ms(e) && !(e instanceof mn)) {
                  if (e instanceof gn) return e;
                  if (ft.call(e, "__wrapped__")) return da(e);
                }
                return new gn(e);
              }
              var pn = (function () {
                function e() {}
                return function (t) {
                  if (!Os(t)) return {};
                  if (Dt) return Dt(t);
                  e.prototype = t;
                  var r = new e();
                  return (e.prototype = n), r;
                };
              })();
              function vn() {}
              function gn(e, t) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!t),
                  (this.__index__ = 0),
                  (this.__values__ = n);
              }
              function mn(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = x),
                  (this.__views__ = []);
              }
              function yn(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var n = e[t];
                  this.set(n[0], n[1]);
                }
              }
              function _n(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var n = e[t];
                  this.set(n[0], n[1]);
                }
              }
              function wn(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var n = e[t];
                  this.set(n[0], n[1]);
                }
              }
              function Cn(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.__data__ = new wn(); ++t < r; ) this.add(e[t]);
              }
              function En(e) {
                var t = (this.__data__ = new _n(e));
                this.size = t.size;
              }
              function Sn(e, t) {
                var r = ms(e),
                  n = !r && gs(e),
                  i = !r && !n && Cs(e),
                  o = !r && !n && !i && Bs(e),
                  a = r || n || i || o,
                  s = a ? hr(e.length, nt) : [],
                  u = s.length;
                for (var c in e)
                  (!t && !ft.call(e, c)) ||
                    (a &&
                      ("length" == c ||
                        (i && ("offset" == c || "parent" == c)) ||
                        (o &&
                          ("buffer" == c ||
                            "byteLength" == c ||
                            "byteOffset" == c)) ||
                        Xo(c, u))) ||
                    s.push(c);
                return s;
              }
              function bn(e) {
                var t = e.length;
                return t ? e[Ci(0, t - 1)] : n;
              }
              function Tn(e, t) {
                return ua(ro(e), kn(t, 0, e.length));
              }
              function An(e) {
                return ua(ro(e));
              }
              function On(e, t, r) {
                ((r === n || hs(e[t], r)) && (r !== n || t in e)) ||
                  Nn(e, t, r);
              }
              function In(e, t, r) {
                var i = e[t];
                (ft.call(e, t) && hs(i, r) && (r !== n || t in e)) ||
                  Nn(e, t, r);
              }
              function Rn(e, t) {
                for (var r = e.length; r--; ) if (hs(e[r][0], t)) return r;
                return -1;
              }
              function Pn(e, t, r, n) {
                return (
                  Fn(e, function (e, i, o) {
                    t(n, e, r(e), o);
                  }),
                  n
                );
              }
              function Mn(e, t) {
                return e && no(t, iu(t), e);
              }
              function Nn(e, t, r) {
                "__proto__" == t && Dr
                  ? Dr(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: r,
                      writable: !0,
                    })
                  : (e[t] = r);
              }
              function Dn(e, t) {
                for (
                  var r = -1, i = t.length, o = qe(i), a = null == e;
                  ++r < i;

                )
                  o[r] = a ? n : $s(e, t[r]);
                return o;
              }
              function kn(e, t, r) {
                return (
                  e == e &&
                    (r !== n && (e = e <= r ? e : r),
                    t !== n && (e = e >= t ? e : t)),
                  e
                );
              }
              function xn(e, t, r, i, o, a) {
                var s,
                  u = t & f,
                  c = t & l,
                  h = t & d;
                if ((r && (s = o ? r(e, i, o, a) : r(e)), s !== n)) return s;
                if (!Os(e)) return e;
                var p = ms(e);
                if (p) {
                  if (
                    ((s = (function (e) {
                      var t = e.length,
                        r = new e.constructor(t);
                      return (
                        t &&
                          "string" == typeof e[0] &&
                          ft.call(e, "index") &&
                          ((r.index = e.index), (r.input = e.input)),
                        r
                      );
                    })(e)),
                    !u)
                  )
                    return ro(e, s);
                } else {
                  var v = Vo(e),
                    g = v == X || v == Y;
                  if (Cs(e)) return qi(e, u);
                  if (v == J || v == F || (g && !o)) {
                    if (((s = c || g ? {} : Ho(e)), !u))
                      return c
                        ? (function (e, t) {
                            return no(e, zo(e), t);
                          })(
                            e,
                            (function (e, t) {
                              return e && no(t, ou(t), e);
                            })(s, e)
                          )
                        : (function (e, t) {
                            return no(e, Uo(e), t);
                          })(e, Mn(s, e));
                  } else {
                    if (!Tt[v]) return o ? e : {};
                    s = (function (e, t, r) {
                      var n,
                        i,
                        o,
                        a = e.constructor;
                      switch (t) {
                        case ae:
                          return Ji(e);
                        case V:
                        case G:
                          return new a(+e);
                        case se:
                          return (function (e, t) {
                            var r = t ? Ji(e.buffer) : e.buffer;
                            return new e.constructor(
                              r,
                              e.byteOffset,
                              e.byteLength
                            );
                          })(e, r);
                        case ue:
                        case ce:
                        case fe:
                        case le:
                        case de:
                        case he:
                        case pe:
                        case ve:
                        case ge:
                          return Qi(e, r);
                        case K:
                          return new a();
                        case Z:
                        case te:
                          return new a(e);
                        case $:
                          return (
                            ((o = new (i = e).constructor(
                              i.source,
                              ze.exec(i)
                            )).lastIndex = i.lastIndex),
                            o
                          );
                        case ee:
                          return new a();
                        case re:
                          return (n = e), ln ? tt(ln.call(n)) : {};
                      }
                    })(e, v, u);
                  }
                }
                a || (a = new En());
                var m = a.get(e);
                if (m) return m;
                if ((a.set(e, s), Ds(e)))
                  return (
                    e.forEach(function (n) {
                      s.add(xn(n, t, r, n, e, a));
                    }),
                    s
                  );
                if (Rs(e))
                  return (
                    e.forEach(function (n, i) {
                      s.set(i, xn(n, t, r, i, e, a));
                    }),
                    s
                  );
                var y = p ? n : (h ? (c ? No : Mo) : c ? ou : iu)(e);
                return (
                  Wt(y || e, function (n, i) {
                    y && (n = e[(i = n)]), In(s, i, xn(n, t, r, i, e, a));
                  }),
                  s
                );
              }
              function Bn(e, t, r) {
                var i = r.length;
                if (null == e) return !i;
                for (e = tt(e); i--; ) {
                  var o = r[i],
                    a = t[o],
                    s = e[o];
                  if ((s === n && !(o in e)) || !a(s)) return !1;
                }
                return !0;
              }
              function Ln(e, t, r) {
                if ("function" != typeof e) throw new it(a);
                return ia(function () {
                  e.apply(n, r);
                }, t);
              }
              function jn(e, t, r, n) {
                var o = -1,
                  a = Zt,
                  s = !0,
                  u = e.length,
                  c = [],
                  f = t.length;
                if (!u) return c;
                r && (t = Jt(t, pr(r))),
                  n
                    ? ((a = qt), (s = !1))
                    : t.length >= i && ((a = gr), (s = !1), (t = new Cn(t)));
                e: for (; ++o < u; ) {
                  var l = e[o],
                    d = null == r ? l : r(l);
                  if (((l = n || 0 !== l ? l : 0), s && d == d)) {
                    for (var h = f; h--; ) if (t[h] === d) continue e;
                    c.push(l);
                  } else a(t, d, n) || c.push(l);
                }
                return c;
              }
              (hn.templateSettings = {
                escape: be,
                evaluate: Te,
                interpolate: Ae,
                variable: "",
                imports: { _: hn },
              }),
                (hn.prototype = vn.prototype),
                (hn.prototype.constructor = hn),
                (gn.prototype = pn(vn.prototype)),
                (gn.prototype.constructor = gn),
                (mn.prototype = pn(vn.prototype)),
                (mn.prototype.constructor = mn),
                (yn.prototype.clear = function () {
                  (this.__data__ = tn ? tn(null) : {}), (this.size = 0);
                }),
                (yn.prototype.delete = function (e) {
                  var t = this.has(e) && delete this.__data__[e];
                  return (this.size -= t ? 1 : 0), t;
                }),
                (yn.prototype.get = function (e) {
                  var t = this.__data__;
                  if (tn) {
                    var r = t[e];
                    return r === s ? n : r;
                  }
                  return ft.call(t, e) ? t[e] : n;
                }),
                (yn.prototype.has = function (e) {
                  var t = this.__data__;
                  return tn ? t[e] !== n : ft.call(t, e);
                }),
                (yn.prototype.set = function (e, t) {
                  var r = this.__data__;
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (r[e] = tn && t === n ? s : t),
                    this
                  );
                }),
                (_n.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (_n.prototype.delete = function (e) {
                  var t = this.__data__,
                    r = Rn(t, e);
                  return !(
                    r < 0 ||
                    (r == t.length - 1 ? t.pop() : Bt.call(t, r, 1),
                    --this.size,
                    0)
                  );
                }),
                (_n.prototype.get = function (e) {
                  var t = this.__data__,
                    r = Rn(t, e);
                  return r < 0 ? n : t[r][1];
                }),
                (_n.prototype.has = function (e) {
                  return Rn(this.__data__, e) > -1;
                }),
                (_n.prototype.set = function (e, t) {
                  var r = this.__data__,
                    n = Rn(r, e);
                  return (
                    n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
                  );
                }),
                (wn.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new yn(),
                      map: new (Jr || _n)(),
                      string: new yn(),
                    });
                }),
                (wn.prototype.delete = function (e) {
                  var t = Lo(this, e).delete(e);
                  return (this.size -= t ? 1 : 0), t;
                }),
                (wn.prototype.get = function (e) {
                  return Lo(this, e).get(e);
                }),
                (wn.prototype.has = function (e) {
                  return Lo(this, e).has(e);
                }),
                (wn.prototype.set = function (e, t) {
                  var r = Lo(this, e),
                    n = r.size;
                  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
                }),
                (Cn.prototype.add = Cn.prototype.push =
                  function (e) {
                    return this.__data__.set(e, s), this;
                  }),
                (Cn.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (En.prototype.clear = function () {
                  (this.__data__ = new _n()), (this.size = 0);
                }),
                (En.prototype.delete = function (e) {
                  var t = this.__data__,
                    r = t.delete(e);
                  return (this.size = t.size), r;
                }),
                (En.prototype.get = function (e) {
                  return this.__data__.get(e);
                }),
                (En.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (En.prototype.set = function (e, t) {
                  var r = this.__data__;
                  if (r instanceof _n) {
                    var n = r.__data__;
                    if (!Jr || n.length < i - 1)
                      return n.push([e, t]), (this.size = ++r.size), this;
                    r = this.__data__ = new wn(n);
                  }
                  return r.set(e, t), (this.size = r.size), this;
                });
              var Fn = ao(Yn),
                Un = ao(Kn, !0);
              function zn(e, t) {
                var r = !0;
                return (
                  Fn(e, function (e, n, i) {
                    return (r = !!t(e, n, i));
                  }),
                  r
                );
              }
              function Vn(e, t, r) {
                for (var i = -1, o = e.length; ++i < o; ) {
                  var a = e[i],
                    s = t(a);
                  if (null != s && (u === n ? s == s && !xs(s) : r(s, u)))
                    var u = s,
                      c = a;
                }
                return c;
              }
              function Gn(e, t) {
                var r = [];
                return (
                  Fn(e, function (e, n, i) {
                    t(e, n, i) && r.push(e);
                  }),
                  r
                );
              }
              function Hn(e, t, r, n, i) {
                var o = -1,
                  a = e.length;
                for (r || (r = Wo), i || (i = []); ++o < a; ) {
                  var s = e[o];
                  t > 0 && r(s)
                    ? t > 1
                      ? Hn(s, t - 1, r, n, i)
                      : Qt(i, s)
                    : n || (i[i.length] = s);
                }
                return i;
              }
              var Wn = so(),
                Xn = so(!0);
              function Yn(e, t) {
                return e && Wn(e, t, iu);
              }
              function Kn(e, t) {
                return e && Xn(e, t, iu);
              }
              function Zn(e, t) {
                return Kt(t, function (t) {
                  return bs(e[t]);
                });
              }
              function qn(e, t) {
                for (var r = 0, i = (t = Xi(t, e)).length; null != e && r < i; )
                  e = e[fa(t[r++])];
                return r && r == i ? e : n;
              }
              function Jn(e, t, r) {
                var n = t(e);
                return ms(e) ? n : Qt(n, r(e));
              }
              function Qn(e) {
                return null == e
                  ? e === n
                    ? ne
                    : q
                  : Nr && Nr in tt(e)
                  ? (function (e) {
                      var t = ft.call(e, Nr),
                        r = e[Nr];
                      try {
                        e[Nr] = n;
                        var i = !0;
                      } catch (e) {}
                      var o = ht.call(e);
                      return i && (t ? (e[Nr] = r) : delete e[Nr]), o;
                    })(e)
                  : (function (e) {
                      return ht.call(e);
                    })(e);
              }
              function $n(e, t) {
                return e > t;
              }
              function ei(e, t) {
                return null != e && ft.call(e, t);
              }
              function ti(e, t) {
                return null != e && t in tt(e);
              }
              function ri(e, t, r) {
                for (
                  var i = r ? qt : Zt,
                    o = e[0].length,
                    a = e.length,
                    s = a,
                    u = qe(a),
                    c = 1 / 0,
                    f = [];
                  s--;

                ) {
                  var l = e[s];
                  s && t && (l = Jt(l, pr(t))),
                    (c = Wr(l.length, c)),
                    (u[s] =
                      !r && (t || (o >= 120 && l.length >= 120))
                        ? new Cn(s && l)
                        : n);
                }
                l = e[0];
                var d = -1,
                  h = u[0];
                e: for (; ++d < o && f.length < c; ) {
                  var p = l[d],
                    v = t ? t(p) : p;
                  if (
                    ((p = r || 0 !== p ? p : 0), !(h ? gr(h, v) : i(f, v, r)))
                  ) {
                    for (s = a; --s; ) {
                      var g = u[s];
                      if (!(g ? gr(g, v) : i(e[s], v, r))) continue e;
                    }
                    h && h.push(v), f.push(p);
                  }
                }
                return f;
              }
              function ni(e, t, r) {
                var i = null == (e = ta(e, (t = Xi(t, e)))) ? e : e[fa(Sa(t))];
                return null == i ? n : Gt(i, e, r);
              }
              function ii(e) {
                return Is(e) && Qn(e) == F;
              }
              function oi(e, t, r, i, o) {
                return (
                  e === t ||
                  (null == e || null == t || (!Is(e) && !Is(t))
                    ? e != e && t != t
                    : (function (e, t, r, i, o, a) {
                        var s = ms(e),
                          u = ms(t),
                          c = s ? U : Vo(e),
                          f = u ? U : Vo(t),
                          l = (c = c == F ? J : c) == J,
                          d = (f = f == F ? J : f) == J,
                          v = c == f;
                        if (v && Cs(e)) {
                          if (!Cs(t)) return !1;
                          (s = !0), (l = !1);
                        }
                        if (v && !l)
                          return (
                            a || (a = new En()),
                            s || Bs(e)
                              ? Ro(e, t, r, i, o, a)
                              : (function (e, t, r, n, i, o, a) {
                                  switch (r) {
                                    case se:
                                      if (
                                        e.byteLength != t.byteLength ||
                                        e.byteOffset != t.byteOffset
                                      )
                                        return !1;
                                      (e = e.buffer), (t = t.buffer);
                                    case ae:
                                      return !(
                                        e.byteLength != t.byteLength ||
                                        !o(new Rt(e), new Rt(t))
                                      );
                                    case V:
                                    case G:
                                    case Z:
                                      return hs(+e, +t);
                                    case W:
                                      return (
                                        e.name == t.name &&
                                        e.message == t.message
                                      );
                                    case $:
                                    case te:
                                      return e == t + "";
                                    case K:
                                      var s = Sr;
                                    case ee:
                                      var u = n & h;
                                      if (
                                        (s || (s = Ar), e.size != t.size && !u)
                                      )
                                        return !1;
                                      var c = a.get(e);
                                      if (c) return c == t;
                                      (n |= p), a.set(e, t);
                                      var f = Ro(s(e), s(t), n, i, o, a);
                                      return a.delete(e), f;
                                    case re:
                                      if (ln) return ln.call(e) == ln.call(t);
                                  }
                                  return !1;
                                })(e, t, c, r, i, o, a)
                          );
                        if (!(r & h)) {
                          var g = l && ft.call(e, "__wrapped__"),
                            m = d && ft.call(t, "__wrapped__");
                          if (g || m) {
                            var y = g ? e.value() : e,
                              _ = m ? t.value() : t;
                            return a || (a = new En()), o(y, _, r, i, a);
                          }
                        }
                        return (
                          !!v &&
                          (a || (a = new En()),
                          (function (e, t, r, i, o, a) {
                            var s = r & h,
                              u = Mo(e),
                              c = u.length,
                              f = Mo(t).length;
                            if (c != f && !s) return !1;
                            for (var l = c; l--; ) {
                              var d = u[l];
                              if (!(s ? d in t : ft.call(t, d))) return !1;
                            }
                            var p = a.get(e);
                            if (p && a.get(t)) return p == t;
                            var v = !0;
                            a.set(e, t), a.set(t, e);
                            for (var g = s; ++l < c; ) {
                              d = u[l];
                              var m = e[d],
                                y = t[d];
                              if (i)
                                var _ = s
                                  ? i(y, m, d, t, e, a)
                                  : i(m, y, d, e, t, a);
                              if (
                                !(_ === n ? m === y || o(m, y, r, i, a) : _)
                              ) {
                                v = !1;
                                break;
                              }
                              g || (g = "constructor" == d);
                            }
                            if (v && !g) {
                              var w = e.constructor,
                                C = t.constructor;
                              w != C &&
                                "constructor" in e &&
                                "constructor" in t &&
                                !(
                                  "function" == typeof w &&
                                  w instanceof w &&
                                  "function" == typeof C &&
                                  C instanceof C
                                ) &&
                                (v = !1);
                            }
                            return a.delete(e), a.delete(t), v;
                          })(e, t, r, i, o, a))
                        );
                      })(e, t, r, i, oi, o))
                );
              }
              function ai(e, t, r, i) {
                var o = r.length,
                  a = o,
                  s = !i;
                if (null == e) return !a;
                for (e = tt(e); o--; ) {
                  var u = r[o];
                  if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
                }
                for (; ++o < a; ) {
                  var c = (u = r[o])[0],
                    f = e[c],
                    l = u[1];
                  if (s && u[2]) {
                    if (f === n && !(c in e)) return !1;
                  } else {
                    var d = new En();
                    if (i) var v = i(f, l, c, e, t, d);
                    if (!(v === n ? oi(l, f, h | p, i, d) : v)) return !1;
                  }
                }
                return !0;
              }
              function si(e) {
                return (
                  !(!Os(e) || ((t = e), dt && dt in t)) &&
                  (bs(e) ? yt : He).test(la(e))
                );
                var t;
              }
              function ui(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? Pu
                  : "object" == typeof e
                  ? ms(e)
                    ? pi(e[0], e[1])
                    : hi(e)
                  : Fu(e);
              }
              function ci(e) {
                if (!Jo(e)) return Gr(e);
                var t = [];
                for (var r in tt(e))
                  ft.call(e, r) && "constructor" != r && t.push(r);
                return t;
              }
              function fi(e) {
                if (!Os(e))
                  return (function (e) {
                    var t = [];
                    if (null != e) for (var r in tt(e)) t.push(r);
                    return t;
                  })(e);
                var t = Jo(e),
                  r = [];
                for (var n in e)
                  ("constructor" != n || (!t && ft.call(e, n))) && r.push(n);
                return r;
              }
              function li(e, t) {
                return e < t;
              }
              function di(e, t) {
                var r = -1,
                  n = _s(e) ? qe(e.length) : [];
                return (
                  Fn(e, function (e, i, o) {
                    n[++r] = t(e, i, o);
                  }),
                  n
                );
              }
              function hi(e) {
                var t = jo(e);
                return 1 == t.length && t[0][2]
                  ? $o(t[0][0], t[0][1])
                  : function (r) {
                      return r === e || ai(r, e, t);
                    };
              }
              function pi(e, t) {
                return Ko(e) && Qo(t)
                  ? $o(fa(e), t)
                  : function (r) {
                      var i = $s(r, e);
                      return i === n && i === t ? eu(r, e) : oi(t, i, h | p);
                    };
              }
              function vi(e, t, r, i, o) {
                e !== t &&
                  Wn(
                    t,
                    function (a, s) {
                      if (Os(a))
                        o || (o = new En()),
                          (function (e, t, r, i, o, a, s) {
                            var u = ra(e, r),
                              c = ra(t, r),
                              f = s.get(c);
                            if (f) On(e, r, f);
                            else {
                              var l = a ? a(u, c, r + "", e, t, s) : n,
                                d = l === n;
                              if (d) {
                                var h = ms(c),
                                  p = !h && Cs(c),
                                  v = !h && !p && Bs(c);
                                (l = c),
                                  h || p || v
                                    ? ms(u)
                                      ? (l = u)
                                      : ws(u)
                                      ? (l = ro(u))
                                      : p
                                      ? ((d = !1), (l = qi(c, !0)))
                                      : v
                                      ? ((d = !1), (l = Qi(c, !0)))
                                      : (l = [])
                                    : Ms(c) || gs(c)
                                    ? ((l = u),
                                      gs(u)
                                        ? (l = Hs(u))
                                        : (Os(u) && !bs(u)) || (l = Ho(c)))
                                    : (d = !1);
                              }
                              d && (s.set(c, l), o(l, c, i, a, s), s.delete(c)),
                                On(e, r, l);
                            }
                          })(e, t, s, r, vi, i, o);
                      else {
                        var u = i ? i(ra(e, s), a, s + "", e, t, o) : n;
                        u === n && (u = a), On(e, s, u);
                      }
                    },
                    ou
                  );
              }
              function gi(e, t) {
                var r = e.length;
                if (r) return Xo((t += t < 0 ? r : 0), r) ? e[t] : n;
              }
              function mi(e, t, r) {
                var n = -1;
                return (
                  (t = Jt(t.length ? t : [Pu], pr(Bo()))),
                  (function (e, t) {
                    var r = e.length;
                    for (e.sort(t); r--; ) e[r] = e[r].value;
                    return e;
                  })(
                    di(e, function (e, r, i) {
                      return {
                        criteria: Jt(t, function (t) {
                          return t(e);
                        }),
                        index: ++n,
                        value: e,
                      };
                    }),
                    function (e, t) {
                      return (function (e, t, r) {
                        for (
                          var n = -1,
                            i = e.criteria,
                            o = t.criteria,
                            a = i.length,
                            s = r.length;
                          ++n < a;

                        ) {
                          var u = $i(i[n], o[n]);
                          if (u) {
                            if (n >= s) return u;
                            var c = r[n];
                            return u * ("desc" == c ? -1 : 1);
                          }
                        }
                        return e.index - t.index;
                      })(e, t, r);
                    }
                  )
                );
              }
              function yi(e, t, r) {
                for (var n = -1, i = t.length, o = {}; ++n < i; ) {
                  var a = t[n],
                    s = qn(e, a);
                  r(s, a) && Ai(o, Xi(a, e), s);
                }
                return o;
              }
              function _i(e, t, r, n) {
                var i = n ? ar : or,
                  o = -1,
                  a = t.length,
                  s = e;
                for (e === t && (t = ro(t)), r && (s = Jt(e, pr(r))); ++o < a; )
                  for (
                    var u = 0, c = t[o], f = r ? r(c) : c;
                    (u = i(s, f, u, n)) > -1;

                  )
                    s !== e && Bt.call(s, u, 1), Bt.call(e, u, 1);
                return e;
              }
              function wi(e, t) {
                for (var r = e ? t.length : 0, n = r - 1; r--; ) {
                  var i = t[r];
                  if (r == n || i !== o) {
                    var o = i;
                    Xo(i) ? Bt.call(e, i, 1) : ji(e, i);
                  }
                }
                return e;
              }
              function Ci(e, t) {
                return e + jr(Kr() * (t - e + 1));
              }
              function Ei(e, t) {
                var r = "";
                if (!e || t < 1 || t > N) return r;
                do {
                  t % 2 && (r += e), (t = jr(t / 2)) && (e += e);
                } while (t);
                return r;
              }
              function Si(e, t) {
                return oa(ea(e, t, Pu), e + "");
              }
              function bi(e) {
                return bn(hu(e));
              }
              function Ti(e, t) {
                var r = hu(e);
                return ua(r, kn(t, 0, r.length));
              }
              function Ai(e, t, r, i) {
                if (!Os(e)) return e;
                for (
                  var o = -1, a = (t = Xi(t, e)).length, s = a - 1, u = e;
                  null != u && ++o < a;

                ) {
                  var c = fa(t[o]),
                    f = r;
                  if (o != s) {
                    var l = u[c];
                    (f = i ? i(l, c, u) : n) === n &&
                      (f = Os(l) ? l : Xo(t[o + 1]) ? [] : {});
                  }
                  In(u, c, f), (u = u[c]);
                }
                return e;
              }
              var Oi = rn
                  ? function (e, t) {
                      return rn.set(e, t), e;
                    }
                  : Pu,
                Ii = Dr
                  ? function (e, t) {
                      return Dr(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: Ou(t),
                        writable: !0,
                      });
                    }
                  : Pu;
              function Ri(e) {
                return ua(hu(e));
              }
              function Pi(e, t, r) {
                var n = -1,
                  i = e.length;
                t < 0 && (t = -t > i ? 0 : i + t),
                  (r = r > i ? i : r) < 0 && (r += i),
                  (i = t > r ? 0 : (r - t) >>> 0),
                  (t >>>= 0);
                for (var o = qe(i); ++n < i; ) o[n] = e[n + t];
                return o;
              }
              function Mi(e, t) {
                var r;
                return (
                  Fn(e, function (e, n, i) {
                    return !(r = t(e, n, i));
                  }),
                  !!r
                );
              }
              function Ni(e, t, r) {
                var n = 0,
                  i = null == e ? n : e.length;
                if ("number" == typeof t && t == t && i <= L) {
                  for (; n < i; ) {
                    var o = (n + i) >>> 1,
                      a = e[o];
                    null !== a && !xs(a) && (r ? a <= t : a < t)
                      ? (n = o + 1)
                      : (i = o);
                  }
                  return i;
                }
                return Di(e, t, Pu, r);
              }
              function Di(e, t, r, i) {
                t = r(t);
                for (
                  var o = 0,
                    a = null == e ? 0 : e.length,
                    s = t != t,
                    u = null === t,
                    c = xs(t),
                    f = t === n;
                  o < a;

                ) {
                  var l = jr((o + a) / 2),
                    d = r(e[l]),
                    h = d !== n,
                    p = null === d,
                    v = d == d,
                    g = xs(d);
                  if (s) var m = i || v;
                  else
                    m = f
                      ? v && (i || h)
                      : u
                      ? v && h && (i || !p)
                      : c
                      ? v && h && !p && (i || !g)
                      : !p && !g && (i ? d <= t : d < t);
                  m ? (o = l + 1) : (a = l);
                }
                return Wr(a, B);
              }
              function ki(e, t) {
                for (var r = -1, n = e.length, i = 0, o = []; ++r < n; ) {
                  var a = e[r],
                    s = t ? t(a) : a;
                  if (!r || !hs(s, u)) {
                    var u = s;
                    o[i++] = 0 === a ? 0 : a;
                  }
                }
                return o;
              }
              function xi(e) {
                return "number" == typeof e ? e : xs(e) ? k : +e;
              }
              function Bi(e) {
                if ("string" == typeof e) return e;
                if (ms(e)) return Jt(e, Bi) + "";
                if (xs(e)) return dn ? dn.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -M ? "-0" : t;
              }
              function Li(e, t, r) {
                var n = -1,
                  o = Zt,
                  a = e.length,
                  s = !0,
                  u = [],
                  c = u;
                if (r) (s = !1), (o = qt);
                else if (a >= i) {
                  var f = t ? null : So(e);
                  if (f) return Ar(f);
                  (s = !1), (o = gr), (c = new Cn());
                } else c = t ? [] : u;
                e: for (; ++n < a; ) {
                  var l = e[n],
                    d = t ? t(l) : l;
                  if (((l = r || 0 !== l ? l : 0), s && d == d)) {
                    for (var h = c.length; h--; ) if (c[h] === d) continue e;
                    t && c.push(d), u.push(l);
                  } else o(c, d, r) || (c !== u && c.push(d), u.push(l));
                }
                return u;
              }
              function ji(e, t) {
                return (
                  null == (e = ta(e, (t = Xi(t, e)))) || delete e[fa(Sa(t))]
                );
              }
              function Fi(e, t, r, n) {
                return Ai(e, t, r(qn(e, t)), n);
              }
              function Ui(e, t, r, n) {
                for (
                  var i = e.length, o = n ? i : -1;
                  (n ? o-- : ++o < i) && t(e[o], o, e);

                );
                return r
                  ? Pi(e, n ? 0 : o, n ? o + 1 : i)
                  : Pi(e, n ? o + 1 : 0, n ? i : o);
              }
              function zi(e, t) {
                var r = e;
                return (
                  r instanceof mn && (r = r.value()),
                  $t(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, Qt([e], t.args));
                    },
                    r
                  )
                );
              }
              function Vi(e, t, r) {
                var n = e.length;
                if (n < 2) return n ? Li(e[0]) : [];
                for (var i = -1, o = qe(n); ++i < n; )
                  for (var a = e[i], s = -1; ++s < n; )
                    s != i && (o[i] = jn(o[i] || a, e[s], t, r));
                return Li(Hn(o, 1), t, r);
              }
              function Gi(e, t, r) {
                for (
                  var i = -1, o = e.length, a = t.length, s = {};
                  ++i < o;

                ) {
                  var u = i < a ? t[i] : n;
                  r(s, e[i], u);
                }
                return s;
              }
              function Hi(e) {
                return ws(e) ? e : [];
              }
              function Wi(e) {
                return "function" == typeof e ? e : Pu;
              }
              function Xi(e, t) {
                return ms(e) ? e : Ko(e, t) ? [e] : ca(Ws(e));
              }
              var Yi = Si;
              function Ki(e, t, r) {
                var i = e.length;
                return (r = r === n ? i : r), !t && r >= i ? e : Pi(e, t, r);
              }
              var Zi =
                kr ||
                function (e) {
                  return Mt.clearTimeout(e);
                };
              function qi(e, t) {
                if (t) return e.slice();
                var r = e.length,
                  n = Pt ? Pt(r) : new e.constructor(r);
                return e.copy(n), n;
              }
              function Ji(e) {
                var t = new e.constructor(e.byteLength);
                return new Rt(t).set(new Rt(e)), t;
              }
              function Qi(e, t) {
                var r = t ? Ji(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.length);
              }
              function $i(e, t) {
                if (e !== t) {
                  var r = e !== n,
                    i = null === e,
                    o = e == e,
                    a = xs(e),
                    s = t !== n,
                    u = null === t,
                    c = t == t,
                    f = xs(t);
                  if (
                    (!u && !f && !a && e > t) ||
                    (a && s && c && !u && !f) ||
                    (i && s && c) ||
                    (!r && c) ||
                    !o
                  )
                    return 1;
                  if (
                    (!i && !a && !f && e < t) ||
                    (f && r && o && !i && !a) ||
                    (u && r && o) ||
                    (!s && o) ||
                    !c
                  )
                    return -1;
                }
                return 0;
              }
              function eo(e, t, r, n) {
                for (
                  var i = -1,
                    o = e.length,
                    a = r.length,
                    s = -1,
                    u = t.length,
                    c = Hr(o - a, 0),
                    f = qe(u + c),
                    l = !n;
                  ++s < u;

                )
                  f[s] = t[s];
                for (; ++i < a; ) (l || i < o) && (f[r[i]] = e[i]);
                for (; c--; ) f[s++] = e[i++];
                return f;
              }
              function to(e, t, r, n) {
                for (
                  var i = -1,
                    o = e.length,
                    a = -1,
                    s = r.length,
                    u = -1,
                    c = t.length,
                    f = Hr(o - s, 0),
                    l = qe(f + c),
                    d = !n;
                  ++i < f;

                )
                  l[i] = e[i];
                for (var h = i; ++u < c; ) l[h + u] = t[u];
                for (; ++a < s; ) (d || i < o) && (l[h + r[a]] = e[i++]);
                return l;
              }
              function ro(e, t) {
                var r = -1,
                  n = e.length;
                for (t || (t = qe(n)); ++r < n; ) t[r] = e[r];
                return t;
              }
              function no(e, t, r, i) {
                var o = !r;
                r || (r = {});
                for (var a = -1, s = t.length; ++a < s; ) {
                  var u = t[a],
                    c = i ? i(r[u], e[u], u, r, e) : n;
                  c === n && (c = e[u]), o ? Nn(r, u, c) : In(r, u, c);
                }
                return r;
              }
              function io(e, t) {
                return function (r, n) {
                  var i = ms(r) ? Ht : Pn,
                    o = t ? t() : {};
                  return i(r, e, Bo(n, 2), o);
                };
              }
              function oo(e) {
                return Si(function (t, r) {
                  var i = -1,
                    o = r.length,
                    a = o > 1 ? r[o - 1] : n,
                    s = o > 2 ? r[2] : n;
                  for (
                    a = e.length > 3 && "function" == typeof a ? (o--, a) : n,
                      s && Yo(r[0], r[1], s) && ((a = o < 3 ? n : a), (o = 1)),
                      t = tt(t);
                    ++i < o;

                  ) {
                    var u = r[i];
                    u && e(t, u, i, a);
                  }
                  return t;
                });
              }
              function ao(e, t) {
                return function (r, n) {
                  if (null == r) return r;
                  if (!_s(r)) return e(r, n);
                  for (
                    var i = r.length, o = t ? i : -1, a = tt(r);
                    (t ? o-- : ++o < i) && !1 !== n(a[o], o, a);

                  );
                  return r;
                };
              }
              function so(e) {
                return function (t, r, n) {
                  for (var i = -1, o = tt(t), a = n(t), s = a.length; s--; ) {
                    var u = a[e ? s : ++i];
                    if (!1 === r(o[u], u, o)) break;
                  }
                  return t;
                };
              }
              function uo(e) {
                return function (t) {
                  var r = Er((t = Ws(t))) ? Rr(t) : n,
                    i = r ? r[0] : t.charAt(0),
                    o = r ? Ki(r, 1).join("") : t.slice(1);
                  return i[e]() + o;
                };
              }
              function co(e) {
                return function (t) {
                  return $t(bu(gu(t).replace(gt, "")), e, "");
                };
              }
              function fo(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var r = pn(e.prototype),
                    n = e.apply(r, t);
                  return Os(n) ? n : r;
                };
              }
              function lo(e) {
                return function (t, r, i) {
                  var o = tt(t);
                  if (!_s(t)) {
                    var a = Bo(r, 3);
                    (t = iu(t)),
                      (r = function (e) {
                        return a(o[e], e, o);
                      });
                  }
                  var s = e(t, r, i);
                  return s > -1 ? o[a ? t[s] : s] : n;
                };
              }
              function ho(e) {
                return Po(function (t) {
                  var r = t.length,
                    i = r,
                    o = gn.prototype.thru;
                  for (e && t.reverse(); i--; ) {
                    var s = t[i];
                    if ("function" != typeof s) throw new it(a);
                    if (o && !u && "wrapper" == ko(s)) var u = new gn([], !0);
                  }
                  for (i = u ? i : r; ++i < r; ) {
                    var c = ko((s = t[i])),
                      f = "wrapper" == c ? Do(s) : n;
                    u =
                      f &&
                      Zo(f[0]) &&
                      f[1] == (E | y | w | S) &&
                      !f[4].length &&
                      1 == f[9]
                        ? u[ko(f[0])].apply(u, f[3])
                        : 1 == s.length && Zo(s)
                        ? u[c]()
                        : u.thru(s);
                  }
                  return function () {
                    var e = arguments,
                      n = e[0];
                    if (u && 1 == e.length && ms(n)) return u.plant(n).value();
                    for (var i = 0, o = r ? t[i].apply(this, e) : n; ++i < r; )
                      o = t[i].call(this, o);
                    return o;
                  };
                });
              }
              function po(e, t, r, i, o, a, s, u, c, f) {
                var l = t & E,
                  d = t & v,
                  h = t & g,
                  p = t & (y | _),
                  m = t & b,
                  w = h ? n : fo(e);
                return function v() {
                  for (var g = arguments.length, y = qe(g), _ = g; _--; )
                    y[_] = arguments[_];
                  if (p)
                    var C = xo(v),
                      E = (function (e, t) {
                        for (var r = e.length, n = 0; r--; ) e[r] === t && ++n;
                        return n;
                      })(y, C);
                  if (
                    (i && (y = eo(y, i, o, p)),
                    a && (y = to(y, a, s, p)),
                    (g -= E),
                    p && g < f)
                  ) {
                    var S = Tr(y, C);
                    return Co(e, t, po, v.placeholder, r, y, S, u, c, f - g);
                  }
                  var b = d ? r : this,
                    T = h ? b[e] : e;
                  return (
                    (g = y.length),
                    u
                      ? (y = (function (e, t) {
                          for (
                            var r = e.length, i = Wr(t.length, r), o = ro(e);
                            i--;

                          ) {
                            var a = t[i];
                            e[i] = Xo(a, r) ? o[a] : n;
                          }
                          return e;
                        })(y, u))
                      : m && g > 1 && y.reverse(),
                    l && c < g && (y.length = c),
                    this &&
                      this !== Mt &&
                      this instanceof v &&
                      (T = w || fo(T)),
                    T.apply(b, y)
                  );
                };
              }
              function vo(e, t) {
                return function (r, n) {
                  return (function (e, t, r, n) {
                    return (
                      Yn(e, function (e, i, o) {
                        t(n, r(e), i, o);
                      }),
                      n
                    );
                  })(r, e, t(n), {});
                };
              }
              function go(e, t) {
                return function (r, i) {
                  var o;
                  if (r === n && i === n) return t;
                  if ((r !== n && (o = r), i !== n)) {
                    if (o === n) return i;
                    "string" == typeof r || "string" == typeof i
                      ? ((r = Bi(r)), (i = Bi(i)))
                      : ((r = xi(r)), (i = xi(i))),
                      (o = e(r, i));
                  }
                  return o;
                };
              }
              function mo(e) {
                return Po(function (t) {
                  return (
                    (t = Jt(t, pr(Bo()))),
                    Si(function (r) {
                      var n = this;
                      return e(t, function (e) {
                        return Gt(e, n, r);
                      });
                    })
                  );
                });
              }
              function yo(e, t) {
                var r = (t = t === n ? " " : Bi(t)).length;
                if (r < 2) return r ? Ei(t, e) : t;
                var i = Ei(t, Lr(e / Ir(t)));
                return Er(t) ? Ki(Rr(i), 0, e).join("") : i.slice(0, e);
              }
              function _o(e) {
                return function (t, r, i) {
                  return (
                    i && "number" != typeof i && Yo(t, r, i) && (r = i = n),
                    (t = Us(t)),
                    r === n ? ((r = t), (t = 0)) : (r = Us(r)),
                    (function (e, t, r, n) {
                      for (
                        var i = -1,
                          o = Hr(Lr((t - e) / (r || 1)), 0),
                          a = qe(o);
                        o--;

                      )
                        (a[n ? o : ++i] = e), (e += r);
                      return a;
                    })(t, r, (i = i === n ? (t < r ? 1 : -1) : Us(i)), e)
                  );
                };
              }
              function wo(e) {
                return function (t, r) {
                  return (
                    ("string" == typeof t && "string" == typeof r) ||
                      ((t = Gs(t)), (r = Gs(r))),
                    e(t, r)
                  );
                };
              }
              function Co(e, t, r, i, o, a, s, u, c, f) {
                var l = t & y;
                (t |= l ? w : C), (t &= ~(l ? C : w)) & m || (t &= ~(v | g));
                var d = [
                    e,
                    t,
                    o,
                    l ? a : n,
                    l ? s : n,
                    l ? n : a,
                    l ? n : s,
                    u,
                    c,
                    f,
                  ],
                  h = r.apply(n, d);
                return Zo(e) && na(h, d), (h.placeholder = i), aa(h, e, t);
              }
              function Eo(e) {
                var t = et[e];
                return function (e, r) {
                  if (((e = Gs(e)), (r = null == r ? 0 : Wr(zs(r), 292)))) {
                    var n = (Ws(e) + "e").split("e");
                    return +(
                      (n = (Ws(t(n[0] + "e" + (+n[1] + r))) + "e").split(
                        "e"
                      ))[0] +
                      "e" +
                      (+n[1] - r)
                    );
                  }
                  return t(e);
                };
              }
              var So =
                $r && 1 / Ar(new $r([, -0]))[1] == M
                  ? function (e) {
                      return new $r(e);
                    }
                  : xu;
              function bo(e) {
                return function (t) {
                  var r = Vo(t);
                  return r == K
                    ? Sr(t)
                    : r == ee
                    ? Or(t)
                    : (function (e, t) {
                        return Jt(t, function (t) {
                          return [t, e[t]];
                        });
                      })(t, e(t));
                };
              }
              function To(e, t, r, i, o, s, u, f) {
                var l = t & g;
                if (!l && "function" != typeof e) throw new it(a);
                var d = i ? i.length : 0;
                if (
                  (d || ((t &= ~(w | C)), (i = o = n)),
                  (u = u === n ? u : Hr(zs(u), 0)),
                  (f = f === n ? f : zs(f)),
                  (d -= o ? o.length : 0),
                  t & C)
                ) {
                  var h = i,
                    p = o;
                  i = o = n;
                }
                var b = l ? n : Do(e),
                  T = [e, t, r, i, o, h, p, s, u, f];
                if (
                  (b &&
                    (function (e, t) {
                      var r = e[1],
                        n = t[1],
                        i = r | n,
                        o = i < (v | g | E),
                        a =
                          (n == E && r == y) ||
                          (n == E && r == S && e[7].length <= t[8]) ||
                          (n == (E | S) && t[7].length <= t[8] && r == y);
                      if (!o && !a) return e;
                      n & v && ((e[2] = t[2]), (i |= r & v ? 0 : m));
                      var s = t[3];
                      if (s) {
                        var u = e[3];
                        (e[3] = u ? eo(u, s, t[4]) : s),
                          (e[4] = u ? Tr(e[3], c) : t[4]);
                      }
                      (s = t[5]) &&
                        ((u = e[5]),
                        (e[5] = u ? to(u, s, t[6]) : s),
                        (e[6] = u ? Tr(e[5], c) : t[6])),
                        (s = t[7]) && (e[7] = s),
                        n & E && (e[8] = null == e[8] ? t[8] : Wr(e[8], t[8])),
                        null == e[9] && (e[9] = t[9]),
                        (e[0] = t[0]),
                        (e[1] = i);
                    })(T, b),
                  (e = T[0]),
                  (t = T[1]),
                  (r = T[2]),
                  (i = T[3]),
                  (o = T[4]),
                  !(f = T[9] =
                    T[9] === n ? (l ? 0 : e.length) : Hr(T[9] - d, 0)) &&
                    t & (y | _) &&
                    (t &= ~(y | _)),
                  t && t != v)
                )
                  A =
                    t == y || t == _
                      ? (function (e, t, r) {
                          var i = fo(e);
                          return function o() {
                            for (
                              var a = arguments.length,
                                s = qe(a),
                                u = a,
                                c = xo(o);
                              u--;

                            )
                              s[u] = arguments[u];
                            var f =
                              a < 3 && s[0] !== c && s[a - 1] !== c
                                ? []
                                : Tr(s, c);
                            return (a -= f.length) < r
                              ? Co(
                                  e,
                                  t,
                                  po,
                                  o.placeholder,
                                  n,
                                  s,
                                  f,
                                  n,
                                  n,
                                  r - a
                                )
                              : Gt(
                                  this && this !== Mt && this instanceof o
                                    ? i
                                    : e,
                                  this,
                                  s
                                );
                          };
                        })(e, t, f)
                      : (t != w && t != (v | w)) || o.length
                      ? po.apply(n, T)
                      : (function (e, t, r, n) {
                          var i = t & v,
                            o = fo(e);
                          return function t() {
                            for (
                              var a = -1,
                                s = arguments.length,
                                u = -1,
                                c = n.length,
                                f = qe(c + s),
                                l =
                                  this && this !== Mt && this instanceof t
                                    ? o
                                    : e;
                              ++u < c;

                            )
                              f[u] = n[u];
                            for (; s--; ) f[u++] = arguments[++a];
                            return Gt(l, i ? r : this, f);
                          };
                        })(e, t, r, i);
                else
                  var A = (function (e, t, r) {
                    var n = t & v,
                      i = fo(e);
                    return function t() {
                      return (
                        this && this !== Mt && this instanceof t ? i : e
                      ).apply(n ? r : this, arguments);
                    };
                  })(e, t, r);
                return aa((b ? Oi : na)(A, T), e, t);
              }
              function Ao(e, t, r, i) {
                return e === n || (hs(e, st[r]) && !ft.call(i, r)) ? t : e;
              }
              function Oo(e, t, r, i, o, a) {
                return (
                  Os(e) &&
                    Os(t) &&
                    (a.set(t, e), vi(e, t, n, Oo, a), a.delete(t)),
                  e
                );
              }
              function Io(e) {
                return Ms(e) ? n : e;
              }
              function Ro(e, t, r, i, o, a) {
                var s = r & h,
                  u = e.length,
                  c = t.length;
                if (u != c && !(s && c > u)) return !1;
                var f = a.get(e);
                if (f && a.get(t)) return f == t;
                var l = -1,
                  d = !0,
                  v = r & p ? new Cn() : n;
                for (a.set(e, t), a.set(t, e); ++l < u; ) {
                  var g = e[l],
                    m = t[l];
                  if (i) var y = s ? i(m, g, l, t, e, a) : i(g, m, l, e, t, a);
                  if (y !== n) {
                    if (y) continue;
                    d = !1;
                    break;
                  }
                  if (v) {
                    if (
                      !tr(t, function (e, t) {
                        if (!gr(v, t) && (g === e || o(g, e, r, i, a)))
                          return v.push(t);
                      })
                    ) {
                      d = !1;
                      break;
                    }
                  } else if (g !== m && !o(g, m, r, i, a)) {
                    d = !1;
                    break;
                  }
                }
                return a.delete(e), a.delete(t), d;
              }
              function Po(e) {
                return oa(ea(e, n, ya), e + "");
              }
              function Mo(e) {
                return Jn(e, iu, Uo);
              }
              function No(e) {
                return Jn(e, ou, zo);
              }
              var Do = rn
                ? function (e) {
                    return rn.get(e);
                  }
                : xu;
              function ko(e) {
                for (
                  var t = e.name + "",
                    r = nn[t],
                    n = ft.call(nn, t) ? r.length : 0;
                  n--;

                ) {
                  var i = r[n],
                    o = i.func;
                  if (null == o || o == e) return i.name;
                }
                return t;
              }
              function xo(e) {
                return (ft.call(hn, "placeholder") ? hn : e).placeholder;
              }
              function Bo() {
                var e = hn.iteratee || Mu;
                return (
                  (e = e === Mu ? ui : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function Lo(e, t) {
                var r,
                  n,
                  i = e.__data__;
                return (
                  "string" == (n = typeof (r = t)) ||
                  "number" == n ||
                  "symbol" == n ||
                  "boolean" == n
                    ? "__proto__" !== r
                    : null === r
                )
                  ? i["string" == typeof t ? "string" : "hash"]
                  : i.map;
              }
              function jo(e) {
                for (var t = iu(e), r = t.length; r--; ) {
                  var n = t[r],
                    i = e[n];
                  t[r] = [n, i, Qo(i)];
                }
                return t;
              }
              function Fo(e, t) {
                var r = (function (e, t) {
                  return null == e ? n : e[t];
                })(e, t);
                return si(r) ? r : n;
              }
              var Uo = Fr
                  ? function (e) {
                      return null == e
                        ? []
                        : ((e = tt(e)),
                          Kt(Fr(e), function (t) {
                            return xt.call(e, t);
                          }));
                    }
                  : Vu,
                zo = Fr
                  ? function (e) {
                      for (var t = []; e; ) Qt(t, Uo(e)), (e = Nt(e));
                      return t;
                    }
                  : Vu,
                Vo = Qn;
              function Go(e, t, r) {
                for (var n = -1, i = (t = Xi(t, e)).length, o = !1; ++n < i; ) {
                  var a = fa(t[n]);
                  if (!(o = null != e && r(e, a))) break;
                  e = e[a];
                }
                return o || ++n != i
                  ? o
                  : !!(i = null == e ? 0 : e.length) &&
                      As(i) &&
                      Xo(a, i) &&
                      (ms(e) || gs(e));
              }
              function Ho(e) {
                return "function" != typeof e.constructor || Jo(e)
                  ? {}
                  : pn(Nt(e));
              }
              function Wo(e) {
                return ms(e) || gs(e) || !!(rr && e && e[rr]);
              }
              function Xo(e, t) {
                var r = typeof e;
                return (
                  !!(t = null == t ? N : t) &&
                  ("number" == r || ("symbol" != r && Xe.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < t
                );
              }
              function Yo(e, t, r) {
                if (!Os(r)) return !1;
                var n = typeof t;
                return (
                  !!("number" == n
                    ? _s(r) && Xo(t, r.length)
                    : "string" == n && t in r) && hs(r[t], e)
                );
              }
              function Ko(e, t) {
                if (ms(e)) return !1;
                var r = typeof e;
                return (
                  !(
                    "number" != r &&
                    "symbol" != r &&
                    "boolean" != r &&
                    null != e &&
                    !xs(e)
                  ) ||
                  Ie.test(e) ||
                  !Oe.test(e) ||
                  (null != t && e in tt(t))
                );
              }
              function Zo(e) {
                var t = ko(e),
                  r = hn[t];
                if ("function" != typeof r || !(t in mn.prototype)) return !1;
                if (e === r) return !0;
                var n = Do(r);
                return !!n && e === n[0];
              }
              ((qr && Vo(new qr(new ArrayBuffer(1))) != se) ||
                (Jr && Vo(new Jr()) != K) ||
                (Qr && "[object Promise]" != Vo(Qr.resolve())) ||
                ($r && Vo(new $r()) != ee) ||
                (en && Vo(new en()) != ie)) &&
                (Vo = function (e) {
                  var t = Qn(e),
                    r = t == J ? e.constructor : n,
                    i = r ? la(r) : "";
                  if (i)
                    switch (i) {
                      case on:
                        return se;
                      case an:
                        return K;
                      case sn:
                        return "[object Promise]";
                      case un:
                        return ee;
                      case cn:
                        return ie;
                    }
                  return t;
                });
              var qo = ut ? bs : Gu;
              function Jo(e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || st);
              }
              function Qo(e) {
                return e == e && !Os(e);
              }
              function $o(e, t) {
                return function (r) {
                  return null != r && r[e] === t && (t !== n || e in tt(r));
                };
              }
              function ea(e, t, r) {
                return (
                  (t = Hr(t === n ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var n = arguments,
                        i = -1,
                        o = Hr(n.length - t, 0),
                        a = qe(o);
                      ++i < o;

                    )
                      a[i] = n[t + i];
                    i = -1;
                    for (var s = qe(t + 1); ++i < t; ) s[i] = n[i];
                    return (s[t] = r(a)), Gt(e, this, s);
                  }
                );
              }
              function ta(e, t) {
                return t.length < 2 ? e : qn(e, Pi(t, 0, -1));
              }
              function ra(e, t) {
                if ("__proto__" != t) return e[t];
              }
              var na = sa(Oi),
                ia =
                  Br ||
                  function (e, t) {
                    return Mt.setTimeout(e, t);
                  },
                oa = sa(Ii);
              function aa(e, t, r) {
                var n = t + "";
                return oa(
                  e,
                  (function (e, t) {
                    var r = t.length;
                    if (!r) return e;
                    var n = r - 1;
                    return (
                      (t[n] = (r > 1 ? "& " : "") + t[n]),
                      (t = t.join(r > 2 ? ", " : " ")),
                      e.replace(xe, "{\n/* [wrapped with " + t + "] */\n")
                    );
                  })(
                    n,
                    (function (e, t) {
                      return (
                        Wt(j, function (r) {
                          var n = "_." + r[0];
                          t & r[1] && !Zt(e, n) && e.push(n);
                        }),
                        e.sort()
                      );
                    })(
                      (function (e) {
                        var t = e.match(Be);
                        return t ? t[1].split(Le) : [];
                      })(n),
                      r
                    )
                  )
                );
              }
              function sa(e) {
                var t = 0,
                  r = 0;
                return function () {
                  var i = Xr(),
                    o = I - (i - r);
                  if (((r = i), o > 0)) {
                    if (++t >= O) return arguments[0];
                  } else t = 0;
                  return e.apply(n, arguments);
                };
              }
              function ua(e, t) {
                var r = -1,
                  i = e.length,
                  o = i - 1;
                for (t = t === n ? i : t; ++r < t; ) {
                  var a = Ci(r, o),
                    s = e[a];
                  (e[a] = e[r]), (e[r] = s);
                }
                return (e.length = t), e;
              }
              var ca = (function (e) {
                var t = ss(e, function (e) {
                    return r.size === u && r.clear(), e;
                  }),
                  r = t.cache;
                return t;
              })(function (e) {
                var t = [];
                return (
                  46 === e.charCodeAt(0) && t.push(""),
                  e.replace(Re, function (e, r, n, i) {
                    t.push(n ? i.replace(Fe, "$1") : r || e);
                  }),
                  t
                );
              });
              function fa(e) {
                if ("string" == typeof e || xs(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -M ? "-0" : t;
              }
              function la(e) {
                if (null != e) {
                  try {
                    return ct.call(e);
                  } catch (e) {}
                  try {
                    return e + "";
                  } catch (e) {}
                }
                return "";
              }
              function da(e) {
                if (e instanceof mn) return e.clone();
                var t = new gn(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = ro(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              }
              var ha = Si(function (e, t) {
                  return ws(e) ? jn(e, Hn(t, 1, ws, !0)) : [];
                }),
                pa = Si(function (e, t) {
                  var r = Sa(t);
                  return (
                    ws(r) && (r = n),
                    ws(e) ? jn(e, Hn(t, 1, ws, !0), Bo(r, 2)) : []
                  );
                }),
                va = Si(function (e, t) {
                  var r = Sa(t);
                  return (
                    ws(r) && (r = n), ws(e) ? jn(e, Hn(t, 1, ws, !0), n, r) : []
                  );
                });
              function ga(e, t, r) {
                var n = null == e ? 0 : e.length;
                if (!n) return -1;
                var i = null == r ? 0 : zs(r);
                return i < 0 && (i = Hr(n + i, 0)), ir(e, Bo(t, 3), i);
              }
              function ma(e, t, r) {
                var i = null == e ? 0 : e.length;
                if (!i) return -1;
                var o = i - 1;
                return (
                  r !== n &&
                    ((o = zs(r)), (o = r < 0 ? Hr(i + o, 0) : Wr(o, i - 1))),
                  ir(e, Bo(t, 3), o, !0)
                );
              }
              function ya(e) {
                return null != e && e.length ? Hn(e, 1) : [];
              }
              function _a(e) {
                return e && e.length ? e[0] : n;
              }
              var wa = Si(function (e) {
                  var t = Jt(e, Hi);
                  return t.length && t[0] === e[0] ? ri(t) : [];
                }),
                Ca = Si(function (e) {
                  var t = Sa(e),
                    r = Jt(e, Hi);
                  return (
                    t === Sa(r) ? (t = n) : r.pop(),
                    r.length && r[0] === e[0] ? ri(r, Bo(t, 2)) : []
                  );
                }),
                Ea = Si(function (e) {
                  var t = Sa(e),
                    r = Jt(e, Hi);
                  return (
                    (t = "function" == typeof t ? t : n) && r.pop(),
                    r.length && r[0] === e[0] ? ri(r, n, t) : []
                  );
                });
              function Sa(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : n;
              }
              var ba = Si(Ta);
              function Ta(e, t) {
                return e && e.length && t && t.length ? _i(e, t) : e;
              }
              var Aa = Po(function (e, t) {
                var r = null == e ? 0 : e.length,
                  n = Dn(e, t);
                return (
                  wi(
                    e,
                    Jt(t, function (e) {
                      return Xo(e, r) ? +e : e;
                    }).sort($i)
                  ),
                  n
                );
              });
              function Oa(e) {
                return null == e ? e : Zr.call(e);
              }
              var Ia = Si(function (e) {
                  return Li(Hn(e, 1, ws, !0));
                }),
                Ra = Si(function (e) {
                  var t = Sa(e);
                  return ws(t) && (t = n), Li(Hn(e, 1, ws, !0), Bo(t, 2));
                }),
                Pa = Si(function (e) {
                  var t = Sa(e);
                  return (
                    (t = "function" == typeof t ? t : n),
                    Li(Hn(e, 1, ws, !0), n, t)
                  );
                });
              function Ma(e) {
                if (!e || !e.length) return [];
                var t = 0;
                return (
                  (e = Kt(e, function (e) {
                    if (ws(e)) return (t = Hr(e.length, t)), !0;
                  })),
                  hr(t, function (t) {
                    return Jt(e, cr(t));
                  })
                );
              }
              function Na(e, t) {
                if (!e || !e.length) return [];
                var r = Ma(e);
                return null == t
                  ? r
                  : Jt(r, function (e) {
                      return Gt(t, n, e);
                    });
              }
              var Da = Si(function (e, t) {
                  return ws(e) ? jn(e, t) : [];
                }),
                ka = Si(function (e) {
                  return Vi(Kt(e, ws));
                }),
                xa = Si(function (e) {
                  var t = Sa(e);
                  return ws(t) && (t = n), Vi(Kt(e, ws), Bo(t, 2));
                }),
                Ba = Si(function (e) {
                  var t = Sa(e);
                  return (
                    (t = "function" == typeof t ? t : n), Vi(Kt(e, ws), n, t)
                  );
                }),
                La = Si(Ma);
              var ja = Si(function (e) {
                var t = e.length,
                  r = t > 1 ? e[t - 1] : n;
                return (
                  (r = "function" == typeof r ? (e.pop(), r) : n), Na(e, r)
                );
              });
              function Fa(e) {
                var t = hn(e);
                return (t.__chain__ = !0), t;
              }
              function Ua(e, t) {
                return t(e);
              }
              var za = Po(function (e) {
                var t = e.length,
                  r = t ? e[0] : 0,
                  i = this.__wrapped__,
                  o = function (t) {
                    return Dn(t, e);
                  };
                return !(t > 1 || this.__actions__.length) &&
                  i instanceof mn &&
                  Xo(r)
                  ? ((i = i.slice(r, +r + (t ? 1 : 0))).__actions__.push({
                      func: Ua,
                      args: [o],
                      thisArg: n,
                    }),
                    new gn(i, this.__chain__).thru(function (e) {
                      return t && !e.length && e.push(n), e;
                    }))
                  : this.thru(o);
              });
              var Va = io(function (e, t, r) {
                ft.call(e, r) ? ++e[r] : Nn(e, r, 1);
              });
              var Ga = lo(ga),
                Ha = lo(ma);
              function Wa(e, t) {
                return (ms(e) ? Wt : Fn)(e, Bo(t, 3));
              }
              function Xa(e, t) {
                return (ms(e) ? Xt : Un)(e, Bo(t, 3));
              }
              var Ya = io(function (e, t, r) {
                ft.call(e, r) ? e[r].push(t) : Nn(e, r, [t]);
              });
              var Ka = Si(function (e, t, r) {
                  var n = -1,
                    i = "function" == typeof t,
                    o = _s(e) ? qe(e.length) : [];
                  return (
                    Fn(e, function (e) {
                      o[++n] = i ? Gt(t, e, r) : ni(e, t, r);
                    }),
                    o
                  );
                }),
                Za = io(function (e, t, r) {
                  Nn(e, r, t);
                });
              function qa(e, t) {
                return (ms(e) ? Jt : di)(e, Bo(t, 3));
              }
              var Ja = io(
                function (e, t, r) {
                  e[r ? 0 : 1].push(t);
                },
                function () {
                  return [[], []];
                }
              );
              var Qa = Si(function (e, t) {
                  if (null == e) return [];
                  var r = t.length;
                  return (
                    r > 1 && Yo(e, t[0], t[1])
                      ? (t = [])
                      : r > 2 && Yo(t[0], t[1], t[2]) && (t = [t[0]]),
                    mi(e, Hn(t, 1), [])
                  );
                }),
                $a =
                  xr ||
                  function () {
                    return Mt.Date.now();
                  };
              function es(e, t, r) {
                return (
                  (t = r ? n : t),
                  (t = e && null == t ? e.length : t),
                  To(e, E, n, n, n, n, t)
                );
              }
              function ts(e, t) {
                var r;
                if ("function" != typeof t) throw new it(a);
                return (
                  (e = zs(e)),
                  function () {
                    return (
                      --e > 0 && (r = t.apply(this, arguments)),
                      e <= 1 && (t = n),
                      r
                    );
                  }
                );
              }
              var rs = Si(function (e, t, r) {
                  var n = v;
                  if (r.length) {
                    var i = Tr(r, xo(rs));
                    n |= w;
                  }
                  return To(e, n, t, r, i);
                }),
                ns = Si(function (e, t, r) {
                  var n = v | g;
                  if (r.length) {
                    var i = Tr(r, xo(ns));
                    n |= w;
                  }
                  return To(t, n, e, r, i);
                });
              function is(e, t, r) {
                var i,
                  o,
                  s,
                  u,
                  c,
                  f,
                  l = 0,
                  d = !1,
                  h = !1,
                  p = !0;
                if ("function" != typeof e) throw new it(a);
                function v(t) {
                  var r = i,
                    a = o;
                  return (i = o = n), (l = t), (u = e.apply(a, r));
                }
                function g(e) {
                  var r = e - f;
                  return f === n || r >= t || r < 0 || (h && e - l >= s);
                }
                function m() {
                  var e = $a();
                  if (g(e)) return y(e);
                  c = ia(
                    m,
                    (function (e) {
                      var r = t - (e - f);
                      return h ? Wr(r, s - (e - l)) : r;
                    })(e)
                  );
                }
                function y(e) {
                  return (c = n), p && i ? v(e) : ((i = o = n), u);
                }
                function _() {
                  var e = $a(),
                    r = g(e);
                  if (((i = arguments), (o = this), (f = e), r)) {
                    if (c === n)
                      return (function (e) {
                        return (l = e), (c = ia(m, t)), d ? v(e) : u;
                      })(f);
                    if (h) return (c = ia(m, t)), v(f);
                  }
                  return c === n && (c = ia(m, t)), u;
                }
                return (
                  (t = Gs(t) || 0),
                  Os(r) &&
                    ((d = !!r.leading),
                    (s = (h = "maxWait" in r) ? Hr(Gs(r.maxWait) || 0, t) : s),
                    (p = "trailing" in r ? !!r.trailing : p)),
                  (_.cancel = function () {
                    c !== n && Zi(c), (l = 0), (i = f = o = c = n);
                  }),
                  (_.flush = function () {
                    return c === n ? u : y($a());
                  }),
                  _
                );
              }
              var os = Si(function (e, t) {
                  return Ln(e, 1, t);
                }),
                as = Si(function (e, t, r) {
                  return Ln(e, Gs(t) || 0, r);
                });
              function ss(e, t) {
                if (
                  "function" != typeof e ||
                  (null != t && "function" != typeof t)
                )
                  throw new it(a);
                var r = function () {
                  var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                  if (o.has(i)) return o.get(i);
                  var a = e.apply(this, n);
                  return (r.cache = o.set(i, a) || o), a;
                };
                return (r.cache = new (ss.Cache || wn)()), r;
              }
              function us(e) {
                if ("function" != typeof e) throw new it(a);
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              }
              ss.Cache = wn;
              var cs = Yi(function (e, t) {
                  var r = (t =
                    1 == t.length && ms(t[0])
                      ? Jt(t[0], pr(Bo()))
                      : Jt(Hn(t, 1), pr(Bo()))).length;
                  return Si(function (n) {
                    for (var i = -1, o = Wr(n.length, r); ++i < o; )
                      n[i] = t[i].call(this, n[i]);
                    return Gt(e, this, n);
                  });
                }),
                fs = Si(function (e, t) {
                  var r = Tr(t, xo(fs));
                  return To(e, w, n, t, r);
                }),
                ls = Si(function (e, t) {
                  var r = Tr(t, xo(ls));
                  return To(e, C, n, t, r);
                }),
                ds = Po(function (e, t) {
                  return To(e, S, n, n, n, t);
                });
              function hs(e, t) {
                return e === t || (e != e && t != t);
              }
              var ps = wo($n),
                vs = wo(function (e, t) {
                  return e >= t;
                }),
                gs = ii(
                  (function () {
                    return arguments;
                  })()
                )
                  ? ii
                  : function (e) {
                      return (
                        Is(e) && ft.call(e, "callee") && !xt.call(e, "callee")
                      );
                    },
                ms = qe.isArray,
                ys = Lt
                  ? pr(Lt)
                  : function (e) {
                      return Is(e) && Qn(e) == ae;
                    };
              function _s(e) {
                return null != e && As(e.length) && !bs(e);
              }
              function ws(e) {
                return Is(e) && _s(e);
              }
              var Cs = Ur || Gu,
                Es = jt
                  ? pr(jt)
                  : function (e) {
                      return Is(e) && Qn(e) == G;
                    };
              function Ss(e) {
                if (!Is(e)) return !1;
                var t = Qn(e);
                return (
                  t == W ||
                  t == H ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !Ms(e))
                );
              }
              function bs(e) {
                if (!Os(e)) return !1;
                var t = Qn(e);
                return t == X || t == Y || t == z || t == Q;
              }
              function Ts(e) {
                return "number" == typeof e && e == zs(e);
              }
              function As(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= N;
              }
              function Os(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              }
              function Is(e) {
                return null != e && "object" == typeof e;
              }
              var Rs = Ft
                ? pr(Ft)
                : function (e) {
                    return Is(e) && Vo(e) == K;
                  };
              function Ps(e) {
                return "number" == typeof e || (Is(e) && Qn(e) == Z);
              }
              function Ms(e) {
                if (!Is(e) || Qn(e) != J) return !1;
                var t = Nt(e);
                if (null === t) return !0;
                var r = ft.call(t, "constructor") && t.constructor;
                return (
                  "function" == typeof r && r instanceof r && ct.call(r) == pt
                );
              }
              var Ns = Ut
                ? pr(Ut)
                : function (e) {
                    return Is(e) && Qn(e) == $;
                  };
              var Ds = zt
                ? pr(zt)
                : function (e) {
                    return Is(e) && Vo(e) == ee;
                  };
              function ks(e) {
                return "string" == typeof e || (!ms(e) && Is(e) && Qn(e) == te);
              }
              function xs(e) {
                return "symbol" == typeof e || (Is(e) && Qn(e) == re);
              }
              var Bs = Vt
                ? pr(Vt)
                : function (e) {
                    return Is(e) && As(e.length) && !!bt[Qn(e)];
                  };
              var Ls = wo(li),
                js = wo(function (e, t) {
                  return e <= t;
                });
              function Fs(e) {
                if (!e) return [];
                if (_s(e)) return ks(e) ? Rr(e) : ro(e);
                if (fr && e[fr])
                  return (function (e) {
                    for (var t, r = []; !(t = e.next()).done; ) r.push(t.value);
                    return r;
                  })(e[fr]());
                var t = Vo(e);
                return (t == K ? Sr : t == ee ? Ar : hu)(e);
              }
              function Us(e) {
                return e
                  ? (e = Gs(e)) === M || e === -M
                    ? (e < 0 ? -1 : 1) * D
                    : e == e
                    ? e
                    : 0
                  : 0 === e
                  ? e
                  : 0;
              }
              function zs(e) {
                var t = Us(e),
                  r = t % 1;
                return t == t ? (r ? t - r : t) : 0;
              }
              function Vs(e) {
                return e ? kn(zs(e), 0, x) : 0;
              }
              function Gs(e) {
                if ("number" == typeof e) return e;
                if (xs(e)) return k;
                if (Os(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = Os(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(Ne, "");
                var r = Ge.test(e);
                return r || We.test(e)
                  ? It(e.slice(2), r ? 2 : 8)
                  : Ve.test(e)
                  ? k
                  : +e;
              }
              function Hs(e) {
                return no(e, ou(e));
              }
              function Ws(e) {
                return null == e ? "" : Bi(e);
              }
              var Xs = oo(function (e, t) {
                  if (Jo(t) || _s(t)) no(t, iu(t), e);
                  else for (var r in t) ft.call(t, r) && In(e, r, t[r]);
                }),
                Ys = oo(function (e, t) {
                  no(t, ou(t), e);
                }),
                Ks = oo(function (e, t, r, n) {
                  no(t, ou(t), e, n);
                }),
                Zs = oo(function (e, t, r, n) {
                  no(t, iu(t), e, n);
                }),
                qs = Po(Dn);
              var Js = Si(function (e, t) {
                  e = tt(e);
                  var r = -1,
                    i = t.length,
                    o = i > 2 ? t[2] : n;
                  for (o && Yo(t[0], t[1], o) && (i = 1); ++r < i; )
                    for (
                      var a = t[r], s = ou(a), u = -1, c = s.length;
                      ++u < c;

                    ) {
                      var f = s[u],
                        l = e[f];
                      (l === n || (hs(l, st[f]) && !ft.call(e, f))) &&
                        (e[f] = a[f]);
                    }
                  return e;
                }),
                Qs = Si(function (e) {
                  return e.push(n, Oo), Gt(su, n, e);
                });
              function $s(e, t, r) {
                var i = null == e ? n : qn(e, t);
                return i === n ? r : i;
              }
              function eu(e, t) {
                return null != e && Go(e, t, ti);
              }
              var tu = vo(function (e, t, r) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = ht.call(t)),
                    (e[t] = r);
                }, Ou(Pu)),
                ru = vo(function (e, t, r) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = ht.call(t)),
                    ft.call(e, t) ? e[t].push(r) : (e[t] = [r]);
                }, Bo),
                nu = Si(ni);
              function iu(e) {
                return _s(e) ? Sn(e) : ci(e);
              }
              function ou(e) {
                return _s(e) ? Sn(e, !0) : fi(e);
              }
              var au = oo(function (e, t, r) {
                  vi(e, t, r);
                }),
                su = oo(function (e, t, r, n) {
                  vi(e, t, r, n);
                }),
                uu = Po(function (e, t) {
                  var r = {};
                  if (null == e) return r;
                  var n = !1;
                  (t = Jt(t, function (t) {
                    return (t = Xi(t, e)), n || (n = t.length > 1), t;
                  })),
                    no(e, No(e), r),
                    n && (r = xn(r, f | l | d, Io));
                  for (var i = t.length; i--; ) ji(r, t[i]);
                  return r;
                });
              var cu = Po(function (e, t) {
                return null == e
                  ? {}
                  : (function (e, t) {
                      return yi(e, t, function (t, r) {
                        return eu(e, r);
                      });
                    })(e, t);
              });
              function fu(e, t) {
                if (null == e) return {};
                var r = Jt(No(e), function (e) {
                  return [e];
                });
                return (
                  (t = Bo(t)),
                  yi(e, r, function (e, r) {
                    return t(e, r[0]);
                  })
                );
              }
              var lu = bo(iu),
                du = bo(ou);
              function hu(e) {
                return null == e ? [] : vr(e, iu(e));
              }
              var pu = co(function (e, t, r) {
                return (t = t.toLowerCase()), e + (r ? vu(t) : t);
              });
              function vu(e) {
                return Su(Ws(e).toLowerCase());
              }
              function gu(e) {
                return (e = Ws(e)) && e.replace(Ye, _r).replace(mt, "");
              }
              var mu = co(function (e, t, r) {
                  return e + (r ? "-" : "") + t.toLowerCase();
                }),
                yu = co(function (e, t, r) {
                  return e + (r ? " " : "") + t.toLowerCase();
                }),
                _u = uo("toLowerCase");
              var wu = co(function (e, t, r) {
                return e + (r ? "_" : "") + t.toLowerCase();
              });
              var Cu = co(function (e, t, r) {
                return e + (r ? " " : "") + Su(t);
              });
              var Eu = co(function (e, t, r) {
                  return e + (r ? " " : "") + t.toUpperCase();
                }),
                Su = uo("toUpperCase");
              function bu(e, t, r) {
                return (
                  (e = Ws(e)),
                  (t = r ? n : t) === n
                    ? (function (e) {
                        return Ct.test(e);
                      })(e)
                      ? (function (e) {
                          return e.match(_t) || [];
                        })(e)
                      : (function (e) {
                          return e.match(je) || [];
                        })(e)
                    : e.match(t) || []
                );
              }
              var Tu = Si(function (e, t) {
                  try {
                    return Gt(e, n, t);
                  } catch (e) {
                    return Ss(e) ? e : new Qe(e);
                  }
                }),
                Au = Po(function (e, t) {
                  return (
                    Wt(t, function (t) {
                      (t = fa(t)), Nn(e, t, rs(e[t], e));
                    }),
                    e
                  );
                });
              function Ou(e) {
                return function () {
                  return e;
                };
              }
              var Iu = ho(),
                Ru = ho(!0);
              function Pu(e) {
                return e;
              }
              function Mu(e) {
                return ui("function" == typeof e ? e : xn(e, f));
              }
              var Nu = Si(function (e, t) {
                  return function (r) {
                    return ni(r, e, t);
                  };
                }),
                Du = Si(function (e, t) {
                  return function (r) {
                    return ni(e, r, t);
                  };
                });
              function ku(e, t, r) {
                var n = iu(t),
                  i = Zn(t, n);
                null != r ||
                  (Os(t) && (i.length || !n.length)) ||
                  ((r = t), (t = e), (e = this), (i = Zn(t, iu(t))));
                var o = !(Os(r) && "chain" in r && !r.chain),
                  a = bs(e);
                return (
                  Wt(i, function (r) {
                    var n = t[r];
                    (e[r] = n),
                      a &&
                        (e.prototype[r] = function () {
                          var t = this.__chain__;
                          if (o || t) {
                            var r = e(this.__wrapped__);
                            return (
                              (r.__actions__ = ro(this.__actions__)).push({
                                func: n,
                                args: arguments,
                                thisArg: e,
                              }),
                              (r.__chain__ = t),
                              r
                            );
                          }
                          return n.apply(e, Qt([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function xu() {}
              var Bu = mo(Jt),
                Lu = mo(Yt),
                ju = mo(tr);
              function Fu(e) {
                return Ko(e)
                  ? cr(fa(e))
                  : (function (e) {
                      return function (t) {
                        return qn(t, e);
                      };
                    })(e);
              }
              var Uu = _o(),
                zu = _o(!0);
              function Vu() {
                return [];
              }
              function Gu() {
                return !1;
              }
              var Hu = go(function (e, t) {
                  return e + t;
                }, 0),
                Wu = Eo("ceil"),
                Xu = go(function (e, t) {
                  return e / t;
                }, 1),
                Yu = Eo("floor");
              var Ku,
                Zu = go(function (e, t) {
                  return e * t;
                }, 1),
                qu = Eo("round"),
                Ju = go(function (e, t) {
                  return e - t;
                }, 0);
              return (
                (hn.after = function (e, t) {
                  if ("function" != typeof t) throw new it(a);
                  return (
                    (e = zs(e)),
                    function () {
                      if (--e < 1) return t.apply(this, arguments);
                    }
                  );
                }),
                (hn.ary = es),
                (hn.assign = Xs),
                (hn.assignIn = Ys),
                (hn.assignInWith = Ks),
                (hn.assignWith = Zs),
                (hn.at = qs),
                (hn.before = ts),
                (hn.bind = rs),
                (hn.bindAll = Au),
                (hn.bindKey = ns),
                (hn.castArray = function () {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return ms(e) ? e : [e];
                }),
                (hn.chain = Fa),
                (hn.chunk = function (e, t, r) {
                  t = (r ? Yo(e, t, r) : t === n) ? 1 : Hr(zs(t), 0);
                  var i = null == e ? 0 : e.length;
                  if (!i || t < 1) return [];
                  for (var o = 0, a = 0, s = qe(Lr(i / t)); o < i; )
                    s[a++] = Pi(e, o, (o += t));
                  return s;
                }),
                (hn.compact = function (e) {
                  for (
                    var t = -1, r = null == e ? 0 : e.length, n = 0, i = [];
                    ++t < r;

                  ) {
                    var o = e[t];
                    o && (i[n++] = o);
                  }
                  return i;
                }),
                (hn.concat = function () {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var t = qe(e - 1), r = arguments[0], n = e; n--; )
                    t[n - 1] = arguments[n];
                  return Qt(ms(r) ? ro(r) : [r], Hn(t, 1));
                }),
                (hn.cond = function (e) {
                  var t = null == e ? 0 : e.length,
                    r = Bo();
                  return (
                    (e = t
                      ? Jt(e, function (e) {
                          if ("function" != typeof e[1]) throw new it(a);
                          return [r(e[0]), e[1]];
                        })
                      : []),
                    Si(function (r) {
                      for (var n = -1; ++n < t; ) {
                        var i = e[n];
                        if (Gt(i[0], this, r)) return Gt(i[1], this, r);
                      }
                    })
                  );
                }),
                (hn.conforms = function (e) {
                  return (function (e) {
                    var t = iu(e);
                    return function (r) {
                      return Bn(r, e, t);
                    };
                  })(xn(e, f));
                }),
                (hn.constant = Ou),
                (hn.countBy = Va),
                (hn.create = function (e, t) {
                  var r = pn(e);
                  return null == t ? r : Mn(r, t);
                }),
                (hn.curry = function e(t, r, i) {
                  var o = To(t, y, n, n, n, n, n, (r = i ? n : r));
                  return (o.placeholder = e.placeholder), o;
                }),
                (hn.curryRight = function e(t, r, i) {
                  var o = To(t, _, n, n, n, n, n, (r = i ? n : r));
                  return (o.placeholder = e.placeholder), o;
                }),
                (hn.debounce = is),
                (hn.defaults = Js),
                (hn.defaultsDeep = Qs),
                (hn.defer = os),
                (hn.delay = as),
                (hn.difference = ha),
                (hn.differenceBy = pa),
                (hn.differenceWith = va),
                (hn.drop = function (e, t, r) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? Pi(e, (t = r || t === n ? 1 : zs(t)) < 0 ? 0 : t, i)
                    : [];
                }),
                (hn.dropRight = function (e, t, r) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? Pi(
                        e,
                        0,
                        (t = i - (t = r || t === n ? 1 : zs(t))) < 0 ? 0 : t
                      )
                    : [];
                }),
                (hn.dropRightWhile = function (e, t) {
                  return e && e.length ? Ui(e, Bo(t, 3), !0, !0) : [];
                }),
                (hn.dropWhile = function (e, t) {
                  return e && e.length ? Ui(e, Bo(t, 3), !0) : [];
                }),
                (hn.fill = function (e, t, r, i) {
                  var o = null == e ? 0 : e.length;
                  return o
                    ? (r &&
                        "number" != typeof r &&
                        Yo(e, t, r) &&
                        ((r = 0), (i = o)),
                      (function (e, t, r, i) {
                        var o = e.length;
                        for (
                          (r = zs(r)) < 0 && (r = -r > o ? 0 : o + r),
                            (i = i === n || i > o ? o : zs(i)) < 0 && (i += o),
                            i = r > i ? 0 : Vs(i);
                          r < i;

                        )
                          e[r++] = t;
                        return e;
                      })(e, t, r, i))
                    : [];
                }),
                (hn.filter = function (e, t) {
                  return (ms(e) ? Kt : Gn)(e, Bo(t, 3));
                }),
                (hn.flatMap = function (e, t) {
                  return Hn(qa(e, t), 1);
                }),
                (hn.flatMapDeep = function (e, t) {
                  return Hn(qa(e, t), M);
                }),
                (hn.flatMapDepth = function (e, t, r) {
                  return (r = r === n ? 1 : zs(r)), Hn(qa(e, t), r);
                }),
                (hn.flatten = ya),
                (hn.flattenDeep = function (e) {
                  return null != e && e.length ? Hn(e, M) : [];
                }),
                (hn.flattenDepth = function (e, t) {
                  return null != e && e.length
                    ? Hn(e, (t = t === n ? 1 : zs(t)))
                    : [];
                }),
                (hn.flip = function (e) {
                  return To(e, b);
                }),
                (hn.flow = Iu),
                (hn.flowRight = Ru),
                (hn.fromPairs = function (e) {
                  for (
                    var t = -1, r = null == e ? 0 : e.length, n = {};
                    ++t < r;

                  ) {
                    var i = e[t];
                    n[i[0]] = i[1];
                  }
                  return n;
                }),
                (hn.functions = function (e) {
                  return null == e ? [] : Zn(e, iu(e));
                }),
                (hn.functionsIn = function (e) {
                  return null == e ? [] : Zn(e, ou(e));
                }),
                (hn.groupBy = Ya),
                (hn.initial = function (e) {
                  return null != e && e.length ? Pi(e, 0, -1) : [];
                }),
                (hn.intersection = wa),
                (hn.intersectionBy = Ca),
                (hn.intersectionWith = Ea),
                (hn.invert = tu),
                (hn.invertBy = ru),
                (hn.invokeMap = Ka),
                (hn.iteratee = Mu),
                (hn.keyBy = Za),
                (hn.keys = iu),
                (hn.keysIn = ou),
                (hn.map = qa),
                (hn.mapKeys = function (e, t) {
                  var r = {};
                  return (
                    (t = Bo(t, 3)),
                    Yn(e, function (e, n, i) {
                      Nn(r, t(e, n, i), e);
                    }),
                    r
                  );
                }),
                (hn.mapValues = function (e, t) {
                  var r = {};
                  return (
                    (t = Bo(t, 3)),
                    Yn(e, function (e, n, i) {
                      Nn(r, n, t(e, n, i));
                    }),
                    r
                  );
                }),
                (hn.matches = function (e) {
                  return hi(xn(e, f));
                }),
                (hn.matchesProperty = function (e, t) {
                  return pi(e, xn(t, f));
                }),
                (hn.memoize = ss),
                (hn.merge = au),
                (hn.mergeWith = su),
                (hn.method = Nu),
                (hn.methodOf = Du),
                (hn.mixin = ku),
                (hn.negate = us),
                (hn.nthArg = function (e) {
                  return (
                    (e = zs(e)),
                    Si(function (t) {
                      return gi(t, e);
                    })
                  );
                }),
                (hn.omit = uu),
                (hn.omitBy = function (e, t) {
                  return fu(e, us(Bo(t)));
                }),
                (hn.once = function (e) {
                  return ts(2, e);
                }),
                (hn.orderBy = function (e, t, r, i) {
                  return null == e
                    ? []
                    : (ms(t) || (t = null == t ? [] : [t]),
                      ms((r = i ? n : r)) || (r = null == r ? [] : [r]),
                      mi(e, t, r));
                }),
                (hn.over = Bu),
                (hn.overArgs = cs),
                (hn.overEvery = Lu),
                (hn.overSome = ju),
                (hn.partial = fs),
                (hn.partialRight = ls),
                (hn.partition = Ja),
                (hn.pick = cu),
                (hn.pickBy = fu),
                (hn.property = Fu),
                (hn.propertyOf = function (e) {
                  return function (t) {
                    return null == e ? n : qn(e, t);
                  };
                }),
                (hn.pull = ba),
                (hn.pullAll = Ta),
                (hn.pullAllBy = function (e, t, r) {
                  return e && e.length && t && t.length
                    ? _i(e, t, Bo(r, 2))
                    : e;
                }),
                (hn.pullAllWith = function (e, t, r) {
                  return e && e.length && t && t.length ? _i(e, t, n, r) : e;
                }),
                (hn.pullAt = Aa),
                (hn.range = Uu),
                (hn.rangeRight = zu),
                (hn.rearg = ds),
                (hn.reject = function (e, t) {
                  return (ms(e) ? Kt : Gn)(e, us(Bo(t, 3)));
                }),
                (hn.remove = function (e, t) {
                  var r = [];
                  if (!e || !e.length) return r;
                  var n = -1,
                    i = [],
                    o = e.length;
                  for (t = Bo(t, 3); ++n < o; ) {
                    var a = e[n];
                    t(a, n, e) && (r.push(a), i.push(n));
                  }
                  return wi(e, i), r;
                }),
                (hn.rest = function (e, t) {
                  if ("function" != typeof e) throw new it(a);
                  return Si(e, (t = t === n ? t : zs(t)));
                }),
                (hn.reverse = Oa),
                (hn.sampleSize = function (e, t, r) {
                  return (
                    (t = (r ? Yo(e, t, r) : t === n) ? 1 : zs(t)),
                    (ms(e) ? Tn : Ti)(e, t)
                  );
                }),
                (hn.set = function (e, t, r) {
                  return null == e ? e : Ai(e, t, r);
                }),
                (hn.setWith = function (e, t, r, i) {
                  return (
                    (i = "function" == typeof i ? i : n),
                    null == e ? e : Ai(e, t, r, i)
                  );
                }),
                (hn.shuffle = function (e) {
                  return (ms(e) ? An : Ri)(e);
                }),
                (hn.slice = function (e, t, r) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? (r && "number" != typeof r && Yo(e, t, r)
                        ? ((t = 0), (r = i))
                        : ((t = null == t ? 0 : zs(t)),
                          (r = r === n ? i : zs(r))),
                      Pi(e, t, r))
                    : [];
                }),
                (hn.sortBy = Qa),
                (hn.sortedUniq = function (e) {
                  return e && e.length ? ki(e) : [];
                }),
                (hn.sortedUniqBy = function (e, t) {
                  return e && e.length ? ki(e, Bo(t, 2)) : [];
                }),
                (hn.split = function (e, t, r) {
                  return (
                    r && "number" != typeof r && Yo(e, t, r) && (t = r = n),
                    (r = r === n ? x : r >>> 0)
                      ? (e = Ws(e)) &&
                        ("string" == typeof t || (null != t && !Ns(t))) &&
                        !(t = Bi(t)) &&
                        Er(e)
                        ? Ki(Rr(e), 0, r)
                        : e.split(t, r)
                      : []
                  );
                }),
                (hn.spread = function (e, t) {
                  if ("function" != typeof e) throw new it(a);
                  return (
                    (t = null == t ? 0 : Hr(zs(t), 0)),
                    Si(function (r) {
                      var n = r[t],
                        i = Ki(r, 0, t);
                      return n && Qt(i, n), Gt(e, this, i);
                    })
                  );
                }),
                (hn.tail = function (e) {
                  var t = null == e ? 0 : e.length;
                  return t ? Pi(e, 1, t) : [];
                }),
                (hn.take = function (e, t, r) {
                  return e && e.length
                    ? Pi(e, 0, (t = r || t === n ? 1 : zs(t)) < 0 ? 0 : t)
                    : [];
                }),
                (hn.takeRight = function (e, t, r) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? Pi(
                        e,
                        (t = i - (t = r || t === n ? 1 : zs(t))) < 0 ? 0 : t,
                        i
                      )
                    : [];
                }),
                (hn.takeRightWhile = function (e, t) {
                  return e && e.length ? Ui(e, Bo(t, 3), !1, !0) : [];
                }),
                (hn.takeWhile = function (e, t) {
                  return e && e.length ? Ui(e, Bo(t, 3)) : [];
                }),
                (hn.tap = function (e, t) {
                  return t(e), e;
                }),
                (hn.throttle = function (e, t, r) {
                  var n = !0,
                    i = !0;
                  if ("function" != typeof e) throw new it(a);
                  return (
                    Os(r) &&
                      ((n = "leading" in r ? !!r.leading : n),
                      (i = "trailing" in r ? !!r.trailing : i)),
                    is(e, t, { leading: n, maxWait: t, trailing: i })
                  );
                }),
                (hn.thru = Ua),
                (hn.toArray = Fs),
                (hn.toPairs = lu),
                (hn.toPairsIn = du),
                (hn.toPath = function (e) {
                  return ms(e) ? Jt(e, fa) : xs(e) ? [e] : ro(ca(Ws(e)));
                }),
                (hn.toPlainObject = Hs),
                (hn.transform = function (e, t, r) {
                  var n = ms(e),
                    i = n || Cs(e) || Bs(e);
                  if (((t = Bo(t, 4)), null == r)) {
                    var o = e && e.constructor;
                    r = i
                      ? n
                        ? new o()
                        : []
                      : Os(e) && bs(o)
                      ? pn(Nt(e))
                      : {};
                  }
                  return (
                    (i ? Wt : Yn)(e, function (e, n, i) {
                      return t(r, e, n, i);
                    }),
                    r
                  );
                }),
                (hn.unary = function (e) {
                  return es(e, 1);
                }),
                (hn.union = Ia),
                (hn.unionBy = Ra),
                (hn.unionWith = Pa),
                (hn.uniq = function (e) {
                  return e && e.length ? Li(e) : [];
                }),
                (hn.uniqBy = function (e, t) {
                  return e && e.length ? Li(e, Bo(t, 2)) : [];
                }),
                (hn.uniqWith = function (e, t) {
                  return (
                    (t = "function" == typeof t ? t : n),
                    e && e.length ? Li(e, n, t) : []
                  );
                }),
                (hn.unset = function (e, t) {
                  return null == e || ji(e, t);
                }),
                (hn.unzip = Ma),
                (hn.unzipWith = Na),
                (hn.update = function (e, t, r) {
                  return null == e ? e : Fi(e, t, Wi(r));
                }),
                (hn.updateWith = function (e, t, r, i) {
                  return (
                    (i = "function" == typeof i ? i : n),
                    null == e ? e : Fi(e, t, Wi(r), i)
                  );
                }),
                (hn.values = hu),
                (hn.valuesIn = function (e) {
                  return null == e ? [] : vr(e, ou(e));
                }),
                (hn.without = Da),
                (hn.words = bu),
                (hn.wrap = function (e, t) {
                  return fs(Wi(t), e);
                }),
                (hn.xor = ka),
                (hn.xorBy = xa),
                (hn.xorWith = Ba),
                (hn.zip = La),
                (hn.zipObject = function (e, t) {
                  return Gi(e || [], t || [], In);
                }),
                (hn.zipObjectDeep = function (e, t) {
                  return Gi(e || [], t || [], Ai);
                }),
                (hn.zipWith = ja),
                (hn.entries = lu),
                (hn.entriesIn = du),
                (hn.extend = Ys),
                (hn.extendWith = Ks),
                ku(hn, hn),
                (hn.add = Hu),
                (hn.attempt = Tu),
                (hn.camelCase = pu),
                (hn.capitalize = vu),
                (hn.ceil = Wu),
                (hn.clamp = function (e, t, r) {
                  return (
                    r === n && ((r = t), (t = n)),
                    r !== n && (r = (r = Gs(r)) == r ? r : 0),
                    t !== n && (t = (t = Gs(t)) == t ? t : 0),
                    kn(Gs(e), t, r)
                  );
                }),
                (hn.clone = function (e) {
                  return xn(e, d);
                }),
                (hn.cloneDeep = function (e) {
                  return xn(e, f | d);
                }),
                (hn.cloneDeepWith = function (e, t) {
                  return xn(e, f | d, (t = "function" == typeof t ? t : n));
                }),
                (hn.cloneWith = function (e, t) {
                  return xn(e, d, (t = "function" == typeof t ? t : n));
                }),
                (hn.conformsTo = function (e, t) {
                  return null == t || Bn(e, t, iu(t));
                }),
                (hn.deburr = gu),
                (hn.defaultTo = function (e, t) {
                  return null == e || e != e ? t : e;
                }),
                (hn.divide = Xu),
                (hn.endsWith = function (e, t, r) {
                  (e = Ws(e)), (t = Bi(t));
                  var i = e.length,
                    o = (r = r === n ? i : kn(zs(r), 0, i));
                  return (r -= t.length) >= 0 && e.slice(r, o) == t;
                }),
                (hn.eq = hs),
                (hn.escape = function (e) {
                  return (e = Ws(e)) && Se.test(e) ? e.replace(Ce, wr) : e;
                }),
                (hn.escapeRegExp = function (e) {
                  return (e = Ws(e)) && Me.test(e) ? e.replace(Pe, "\\$&") : e;
                }),
                (hn.every = function (e, t, r) {
                  var i = ms(e) ? Yt : zn;
                  return r && Yo(e, t, r) && (t = n), i(e, Bo(t, 3));
                }),
                (hn.find = Ga),
                (hn.findIndex = ga),
                (hn.findKey = function (e, t) {
                  return nr(e, Bo(t, 3), Yn);
                }),
                (hn.findLast = Ha),
                (hn.findLastIndex = ma),
                (hn.findLastKey = function (e, t) {
                  return nr(e, Bo(t, 3), Kn);
                }),
                (hn.floor = Yu),
                (hn.forEach = Wa),
                (hn.forEachRight = Xa),
                (hn.forIn = function (e, t) {
                  return null == e ? e : Wn(e, Bo(t, 3), ou);
                }),
                (hn.forInRight = function (e, t) {
                  return null == e ? e : Xn(e, Bo(t, 3), ou);
                }),
                (hn.forOwn = function (e, t) {
                  return e && Yn(e, Bo(t, 3));
                }),
                (hn.forOwnRight = function (e, t) {
                  return e && Kn(e, Bo(t, 3));
                }),
                (hn.get = $s),
                (hn.gt = ps),
                (hn.gte = vs),
                (hn.has = function (e, t) {
                  return null != e && Go(e, t, ei);
                }),
                (hn.hasIn = eu),
                (hn.head = _a),
                (hn.identity = Pu),
                (hn.includes = function (e, t, r, n) {
                  (e = _s(e) ? e : hu(e)), (r = r && !n ? zs(r) : 0);
                  var i = e.length;
                  return (
                    r < 0 && (r = Hr(i + r, 0)),
                    ks(e)
                      ? r <= i && e.indexOf(t, r) > -1
                      : !!i && or(e, t, r) > -1
                  );
                }),
                (hn.indexOf = function (e, t, r) {
                  var n = null == e ? 0 : e.length;
                  if (!n) return -1;
                  var i = null == r ? 0 : zs(r);
                  return i < 0 && (i = Hr(n + i, 0)), or(e, t, i);
                }),
                (hn.inRange = function (e, t, r) {
                  return (
                    (t = Us(t)),
                    r === n ? ((r = t), (t = 0)) : (r = Us(r)),
                    (function (e, t, r) {
                      return e >= Wr(t, r) && e < Hr(t, r);
                    })((e = Gs(e)), t, r)
                  );
                }),
                (hn.invoke = nu),
                (hn.isArguments = gs),
                (hn.isArray = ms),
                (hn.isArrayBuffer = ys),
                (hn.isArrayLike = _s),
                (hn.isArrayLikeObject = ws),
                (hn.isBoolean = function (e) {
                  return !0 === e || !1 === e || (Is(e) && Qn(e) == V);
                }),
                (hn.isBuffer = Cs),
                (hn.isDate = Es),
                (hn.isElement = function (e) {
                  return Is(e) && 1 === e.nodeType && !Ms(e);
                }),
                (hn.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (
                    _s(e) &&
                    (ms(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      Cs(e) ||
                      Bs(e) ||
                      gs(e))
                  )
                    return !e.length;
                  var t = Vo(e);
                  if (t == K || t == ee) return !e.size;
                  if (Jo(e)) return !ci(e).length;
                  for (var r in e) if (ft.call(e, r)) return !1;
                  return !0;
                }),
                (hn.isEqual = function (e, t) {
                  return oi(e, t);
                }),
                (hn.isEqualWith = function (e, t, r) {
                  var i = (r = "function" == typeof r ? r : n) ? r(e, t) : n;
                  return i === n ? oi(e, t, n, r) : !!i;
                }),
                (hn.isError = Ss),
                (hn.isFinite = function (e) {
                  return "number" == typeof e && zr(e);
                }),
                (hn.isFunction = bs),
                (hn.isInteger = Ts),
                (hn.isLength = As),
                (hn.isMap = Rs),
                (hn.isMatch = function (e, t) {
                  return e === t || ai(e, t, jo(t));
                }),
                (hn.isMatchWith = function (e, t, r) {
                  return (
                    (r = "function" == typeof r ? r : n), ai(e, t, jo(t), r)
                  );
                }),
                (hn.isNaN = function (e) {
                  return Ps(e) && e != +e;
                }),
                (hn.isNative = function (e) {
                  if (qo(e)) throw new Qe(o);
                  return si(e);
                }),
                (hn.isNil = function (e) {
                  return null == e;
                }),
                (hn.isNull = function (e) {
                  return null === e;
                }),
                (hn.isNumber = Ps),
                (hn.isObject = Os),
                (hn.isObjectLike = Is),
                (hn.isPlainObject = Ms),
                (hn.isRegExp = Ns),
                (hn.isSafeInteger = function (e) {
                  return Ts(e) && e >= -N && e <= N;
                }),
                (hn.isSet = Ds),
                (hn.isString = ks),
                (hn.isSymbol = xs),
                (hn.isTypedArray = Bs),
                (hn.isUndefined = function (e) {
                  return e === n;
                }),
                (hn.isWeakMap = function (e) {
                  return Is(e) && Vo(e) == ie;
                }),
                (hn.isWeakSet = function (e) {
                  return Is(e) && Qn(e) == oe;
                }),
                (hn.join = function (e, t) {
                  return null == e ? "" : Vr.call(e, t);
                }),
                (hn.kebabCase = mu),
                (hn.last = Sa),
                (hn.lastIndexOf = function (e, t, r) {
                  var i = null == e ? 0 : e.length;
                  if (!i) return -1;
                  var o = i;
                  return (
                    r !== n &&
                      (o = (o = zs(r)) < 0 ? Hr(i + o, 0) : Wr(o, i - 1)),
                    t == t
                      ? (function (e, t, r) {
                          for (var n = r + 1; n--; ) if (e[n] === t) return n;
                          return n;
                        })(e, t, o)
                      : ir(e, sr, o, !0)
                  );
                }),
                (hn.lowerCase = yu),
                (hn.lowerFirst = _u),
                (hn.lt = Ls),
                (hn.lte = js),
                (hn.max = function (e) {
                  return e && e.length ? Vn(e, Pu, $n) : n;
                }),
                (hn.maxBy = function (e, t) {
                  return e && e.length ? Vn(e, Bo(t, 2), $n) : n;
                }),
                (hn.mean = function (e) {
                  return ur(e, Pu);
                }),
                (hn.meanBy = function (e, t) {
                  return ur(e, Bo(t, 2));
                }),
                (hn.min = function (e) {
                  return e && e.length ? Vn(e, Pu, li) : n;
                }),
                (hn.minBy = function (e, t) {
                  return e && e.length ? Vn(e, Bo(t, 2), li) : n;
                }),
                (hn.stubArray = Vu),
                (hn.stubFalse = Gu),
                (hn.stubObject = function () {
                  return {};
                }),
                (hn.stubString = function () {
                  return "";
                }),
                (hn.stubTrue = function () {
                  return !0;
                }),
                (hn.multiply = Zu),
                (hn.nth = function (e, t) {
                  return e && e.length ? gi(e, zs(t)) : n;
                }),
                (hn.noConflict = function () {
                  return Mt._ === this && (Mt._ = vt), this;
                }),
                (hn.noop = xu),
                (hn.now = $a),
                (hn.pad = function (e, t, r) {
                  e = Ws(e);
                  var n = (t = zs(t)) ? Ir(e) : 0;
                  if (!t || n >= t) return e;
                  var i = (t - n) / 2;
                  return yo(jr(i), r) + e + yo(Lr(i), r);
                }),
                (hn.padEnd = function (e, t, r) {
                  e = Ws(e);
                  var n = (t = zs(t)) ? Ir(e) : 0;
                  return t && n < t ? e + yo(t - n, r) : e;
                }),
                (hn.padStart = function (e, t, r) {
                  e = Ws(e);
                  var n = (t = zs(t)) ? Ir(e) : 0;
                  return t && n < t ? yo(t - n, r) + e : e;
                }),
                (hn.parseInt = function (e, t, r) {
                  return (
                    r || null == t ? (t = 0) : t && (t = +t),
                    Yr(Ws(e).replace(De, ""), t || 0)
                  );
                }),
                (hn.random = function (e, t, r) {
                  if (
                    (r && "boolean" != typeof r && Yo(e, t, r) && (t = r = n),
                    r === n &&
                      ("boolean" == typeof t
                        ? ((r = t), (t = n))
                        : "boolean" == typeof e && ((r = e), (e = n))),
                    e === n && t === n
                      ? ((e = 0), (t = 1))
                      : ((e = Us(e)),
                        t === n ? ((t = e), (e = 0)) : (t = Us(t))),
                    e > t)
                  ) {
                    var i = e;
                    (e = t), (t = i);
                  }
                  if (r || e % 1 || t % 1) {
                    var o = Kr();
                    return Wr(
                      e + o * (t - e + Ot("1e-" + ((o + "").length - 1))),
                      t
                    );
                  }
                  return Ci(e, t);
                }),
                (hn.reduce = function (e, t, r) {
                  var n = ms(e) ? $t : lr,
                    i = arguments.length < 3;
                  return n(e, Bo(t, 4), r, i, Fn);
                }),
                (hn.reduceRight = function (e, t, r) {
                  var n = ms(e) ? er : lr,
                    i = arguments.length < 3;
                  return n(e, Bo(t, 4), r, i, Un);
                }),
                (hn.repeat = function (e, t, r) {
                  return (
                    (t = (r ? Yo(e, t, r) : t === n) ? 1 : zs(t)), Ei(Ws(e), t)
                  );
                }),
                (hn.replace = function () {
                  var e = arguments,
                    t = Ws(e[0]);
                  return e.length < 3 ? t : t.replace(e[1], e[2]);
                }),
                (hn.result = function (e, t, r) {
                  var i = -1,
                    o = (t = Xi(t, e)).length;
                  for (o || ((o = 1), (e = n)); ++i < o; ) {
                    var a = null == e ? n : e[fa(t[i])];
                    a === n && ((i = o), (a = r)), (e = bs(a) ? a.call(e) : a);
                  }
                  return e;
                }),
                (hn.round = qu),
                (hn.runInContext = e),
                (hn.sample = function (e) {
                  return (ms(e) ? bn : bi)(e);
                }),
                (hn.size = function (e) {
                  if (null == e) return 0;
                  if (_s(e)) return ks(e) ? Ir(e) : e.length;
                  var t = Vo(e);
                  return t == K || t == ee ? e.size : ci(e).length;
                }),
                (hn.snakeCase = wu),
                (hn.some = function (e, t, r) {
                  var i = ms(e) ? tr : Mi;
                  return r && Yo(e, t, r) && (t = n), i(e, Bo(t, 3));
                }),
                (hn.sortedIndex = function (e, t) {
                  return Ni(e, t);
                }),
                (hn.sortedIndexBy = function (e, t, r) {
                  return Di(e, t, Bo(r, 2));
                }),
                (hn.sortedIndexOf = function (e, t) {
                  var r = null == e ? 0 : e.length;
                  if (r) {
                    var n = Ni(e, t);
                    if (n < r && hs(e[n], t)) return n;
                  }
                  return -1;
                }),
                (hn.sortedLastIndex = function (e, t) {
                  return Ni(e, t, !0);
                }),
                (hn.sortedLastIndexBy = function (e, t, r) {
                  return Di(e, t, Bo(r, 2), !0);
                }),
                (hn.sortedLastIndexOf = function (e, t) {
                  if (null != e && e.length) {
                    var r = Ni(e, t, !0) - 1;
                    if (hs(e[r], t)) return r;
                  }
                  return -1;
                }),
                (hn.startCase = Cu),
                (hn.startsWith = function (e, t, r) {
                  return (
                    (e = Ws(e)),
                    (r = null == r ? 0 : kn(zs(r), 0, e.length)),
                    (t = Bi(t)),
                    e.slice(r, r + t.length) == t
                  );
                }),
                (hn.subtract = Ju),
                (hn.sum = function (e) {
                  return e && e.length ? dr(e, Pu) : 0;
                }),
                (hn.sumBy = function (e, t) {
                  return e && e.length ? dr(e, Bo(t, 2)) : 0;
                }),
                (hn.template = function (e, t, r) {
                  var i = hn.templateSettings;
                  r && Yo(e, t, r) && (t = n),
                    (e = Ws(e)),
                    (t = Ks({}, t, i, Ao));
                  var o,
                    a,
                    s = Ks({}, t.imports, i.imports, Ao),
                    u = iu(s),
                    c = vr(s, u),
                    f = 0,
                    l = t.interpolate || Ke,
                    d = "__p += '",
                    h = rt(
                      (t.escape || Ke).source +
                        "|" +
                        l.source +
                        "|" +
                        (l === Ae ? Ue : Ke).source +
                        "|" +
                        (t.evaluate || Ke).source +
                        "|$",
                      "g"
                    ),
                    p =
                      "//# sourceURL=" +
                      ("sourceURL" in t
                        ? t.sourceURL
                        : "lodash.templateSources[" + ++St + "]") +
                      "\n";
                  e.replace(h, function (t, r, n, i, s, u) {
                    return (
                      n || (n = i),
                      (d += e.slice(f, u).replace(Ze, Cr)),
                      r && ((o = !0), (d += "' +\n__e(" + r + ") +\n'")),
                      s && ((a = !0), (d += "';\n" + s + ";\n__p += '")),
                      n &&
                        (d +=
                          "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
                      (f = u + t.length),
                      t
                    );
                  }),
                    (d += "';\n");
                  var v = t.variable;
                  v || (d = "with (obj) {\n" + d + "\n}\n"),
                    (d = (a ? d.replace(me, "") : d)
                      .replace(ye, "$1")
                      .replace(_e, "$1;")),
                    (d =
                      "function(" +
                      (v || "obj") +
                      ") {\n" +
                      (v ? "" : "obj || (obj = {});\n") +
                      "var __t, __p = ''" +
                      (o ? ", __e = _.escape" : "") +
                      (a
                        ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                        : ";\n") +
                      d +
                      "return __p\n}");
                  var g = Tu(function () {
                    return $e(u, p + "return " + d).apply(n, c);
                  });
                  if (((g.source = d), Ss(g))) throw g;
                  return g;
                }),
                (hn.times = function (e, t) {
                  if ((e = zs(e)) < 1 || e > N) return [];
                  var r = x,
                    n = Wr(e, x);
                  (t = Bo(t)), (e -= x);
                  for (var i = hr(n, t); ++r < e; ) t(r);
                  return i;
                }),
                (hn.toFinite = Us),
                (hn.toInteger = zs),
                (hn.toLength = Vs),
                (hn.toLower = function (e) {
                  return Ws(e).toLowerCase();
                }),
                (hn.toNumber = Gs),
                (hn.toSafeInteger = function (e) {
                  return e ? kn(zs(e), -N, N) : 0 === e ? e : 0;
                }),
                (hn.toString = Ws),
                (hn.toUpper = function (e) {
                  return Ws(e).toUpperCase();
                }),
                (hn.trim = function (e, t, r) {
                  if ((e = Ws(e)) && (r || t === n)) return e.replace(Ne, "");
                  if (!e || !(t = Bi(t))) return e;
                  var i = Rr(e),
                    o = Rr(t);
                  return Ki(i, mr(i, o), yr(i, o) + 1).join("");
                }),
                (hn.trimEnd = function (e, t, r) {
                  if ((e = Ws(e)) && (r || t === n)) return e.replace(ke, "");
                  if (!e || !(t = Bi(t))) return e;
                  var i = Rr(e);
                  return Ki(i, 0, yr(i, Rr(t)) + 1).join("");
                }),
                (hn.trimStart = function (e, t, r) {
                  if ((e = Ws(e)) && (r || t === n)) return e.replace(De, "");
                  if (!e || !(t = Bi(t))) return e;
                  var i = Rr(e);
                  return Ki(i, mr(i, Rr(t))).join("");
                }),
                (hn.truncate = function (e, t) {
                  var r = T,
                    i = A;
                  if (Os(t)) {
                    var o = "separator" in t ? t.separator : o;
                    (r = "length" in t ? zs(t.length) : r),
                      (i = "omission" in t ? Bi(t.omission) : i);
                  }
                  var a = (e = Ws(e)).length;
                  if (Er(e)) {
                    var s = Rr(e);
                    a = s.length;
                  }
                  if (r >= a) return e;
                  var u = r - Ir(i);
                  if (u < 1) return i;
                  var c = s ? Ki(s, 0, u).join("") : e.slice(0, u);
                  if (o === n) return c + i;
                  if ((s && (u += c.length - u), Ns(o))) {
                    if (e.slice(u).search(o)) {
                      var f,
                        l = c;
                      for (
                        o.global || (o = rt(o.source, Ws(ze.exec(o)) + "g")),
                          o.lastIndex = 0;
                        (f = o.exec(l));

                      )
                        var d = f.index;
                      c = c.slice(0, d === n ? u : d);
                    }
                  } else if (e.indexOf(Bi(o), u) != u) {
                    var h = c.lastIndexOf(o);
                    h > -1 && (c = c.slice(0, h));
                  }
                  return c + i;
                }),
                (hn.unescape = function (e) {
                  return (e = Ws(e)) && Ee.test(e) ? e.replace(we, Pr) : e;
                }),
                (hn.uniqueId = function (e) {
                  var t = ++lt;
                  return Ws(e) + t;
                }),
                (hn.upperCase = Eu),
                (hn.upperFirst = Su),
                (hn.each = Wa),
                (hn.eachRight = Xa),
                (hn.first = _a),
                ku(
                  hn,
                  ((Ku = {}),
                  Yn(hn, function (e, t) {
                    ft.call(hn.prototype, t) || (Ku[t] = e);
                  }),
                  Ku),
                  { chain: !1 }
                ),
                (hn.VERSION = "4.17.11"),
                Wt(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    hn[e].placeholder = hn;
                  }
                ),
                Wt(["drop", "take"], function (e, t) {
                  (mn.prototype[e] = function (r) {
                    r = r === n ? 1 : Hr(zs(r), 0);
                    var i =
                      this.__filtered__ && !t ? new mn(this) : this.clone();
                    return (
                      i.__filtered__
                        ? (i.__takeCount__ = Wr(r, i.__takeCount__))
                        : i.__views__.push({
                            size: Wr(r, x),
                            type: e + (i.__dir__ < 0 ? "Right" : ""),
                          }),
                      i
                    );
                  }),
                    (mn.prototype[e + "Right"] = function (t) {
                      return this.reverse()[e](t).reverse();
                    });
                }),
                Wt(["filter", "map", "takeWhile"], function (e, t) {
                  var r = t + 1,
                    n = r == R || 3 == r;
                  mn.prototype[e] = function (e) {
                    var t = this.clone();
                    return (
                      t.__iteratees__.push({ iteratee: Bo(e, 3), type: r }),
                      (t.__filtered__ = t.__filtered__ || n),
                      t
                    );
                  };
                }),
                Wt(["head", "last"], function (e, t) {
                  var r = "take" + (t ? "Right" : "");
                  mn.prototype[e] = function () {
                    return this[r](1).value()[0];
                  };
                }),
                Wt(["initial", "tail"], function (e, t) {
                  var r = "drop" + (t ? "" : "Right");
                  mn.prototype[e] = function () {
                    return this.__filtered__ ? new mn(this) : this[r](1);
                  };
                }),
                (mn.prototype.compact = function () {
                  return this.filter(Pu);
                }),
                (mn.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (mn.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (mn.prototype.invokeMap = Si(function (e, t) {
                  return "function" == typeof e
                    ? new mn(this)
                    : this.map(function (r) {
                        return ni(r, e, t);
                      });
                })),
                (mn.prototype.reject = function (e) {
                  return this.filter(us(Bo(e)));
                }),
                (mn.prototype.slice = function (e, t) {
                  e = zs(e);
                  var r = this;
                  return r.__filtered__ && (e > 0 || t < 0)
                    ? new mn(r)
                    : (e < 0 ? (r = r.takeRight(-e)) : e && (r = r.drop(e)),
                      t !== n &&
                        (r = (t = zs(t)) < 0 ? r.dropRight(-t) : r.take(t - e)),
                      r);
                }),
                (mn.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (mn.prototype.toArray = function () {
                  return this.take(x);
                }),
                Yn(mn.prototype, function (e, t) {
                  var r = /^(?:filter|find|map|reject)|While$/.test(t),
                    i = /^(?:head|last)$/.test(t),
                    o = hn[i ? "take" + ("last" == t ? "Right" : "") : t],
                    a = i || /^find/.test(t);
                  o &&
                    (hn.prototype[t] = function () {
                      var t = this.__wrapped__,
                        s = i ? [1] : arguments,
                        u = t instanceof mn,
                        c = s[0],
                        f = u || ms(t),
                        l = function (e) {
                          var t = o.apply(hn, Qt([e], s));
                          return i && d ? t[0] : t;
                        };
                      f &&
                        r &&
                        "function" == typeof c &&
                        1 != c.length &&
                        (u = f = !1);
                      var d = this.__chain__,
                        h = !!this.__actions__.length,
                        p = a && !d,
                        v = u && !h;
                      if (!a && f) {
                        t = v ? t : new mn(this);
                        var g = e.apply(t, s);
                        return (
                          g.__actions__.push({
                            func: Ua,
                            args: [l],
                            thisArg: n,
                          }),
                          new gn(g, d)
                        );
                      }
                      return p && v
                        ? e.apply(this, s)
                        : ((g = this.thru(l)),
                          p ? (i ? g.value()[0] : g.value()) : g);
                    });
                }),
                Wt(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var t = ot[e],
                      r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      n = /^(?:pop|shift)$/.test(e);
                    hn.prototype[e] = function () {
                      var e = arguments;
                      if (n && !this.__chain__) {
                        var i = this.value();
                        return t.apply(ms(i) ? i : [], e);
                      }
                      return this[r](function (r) {
                        return t.apply(ms(r) ? r : [], e);
                      });
                    };
                  }
                ),
                Yn(mn.prototype, function (e, t) {
                  var r = hn[t];
                  if (r) {
                    var n = r.name + "";
                    (nn[n] || (nn[n] = [])).push({ name: t, func: r });
                  }
                }),
                (nn[po(n, g).name] = [{ name: "wrapper", func: n }]),
                (mn.prototype.clone = function () {
                  var e = new mn(this.__wrapped__);
                  return (
                    (e.__actions__ = ro(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = ro(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = ro(this.__views__)),
                    e
                  );
                }),
                (mn.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new mn(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()).__dir__ *= -1;
                  return e;
                }),
                (mn.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    t = this.__dir__,
                    r = ms(e),
                    n = t < 0,
                    i = r ? e.length : 0,
                    o = (function (e, t, r) {
                      for (var n = -1, i = r.length; ++n < i; ) {
                        var o = r[n],
                          a = o.size;
                        switch (o.type) {
                          case "drop":
                            e += a;
                            break;
                          case "dropRight":
                            t -= a;
                            break;
                          case "take":
                            t = Wr(t, e + a);
                            break;
                          case "takeRight":
                            e = Hr(e, t - a);
                        }
                      }
                      return { start: e, end: t };
                    })(0, i, this.__views__),
                    a = o.start,
                    s = o.end,
                    u = s - a,
                    c = n ? s : a - 1,
                    f = this.__iteratees__,
                    l = f.length,
                    d = 0,
                    h = Wr(u, this.__takeCount__);
                  if (!r || (!n && i == u && h == u))
                    return zi(e, this.__actions__);
                  var p = [];
                  e: for (; u-- && d < h; ) {
                    for (var v = -1, g = e[(c += t)]; ++v < l; ) {
                      var m = f[v],
                        y = m.iteratee,
                        _ = m.type,
                        w = y(g);
                      if (_ == P) g = w;
                      else if (!w) {
                        if (_ == R) continue e;
                        break e;
                      }
                    }
                    p[d++] = g;
                  }
                  return p;
                }),
                (hn.prototype.at = za),
                (hn.prototype.chain = function () {
                  return Fa(this);
                }),
                (hn.prototype.commit = function () {
                  return new gn(this.value(), this.__chain__);
                }),
                (hn.prototype.next = function () {
                  this.__values__ === n && (this.__values__ = Fs(this.value()));
                  var e = this.__index__ >= this.__values__.length;
                  return {
                    done: e,
                    value: e ? n : this.__values__[this.__index__++],
                  };
                }),
                (hn.prototype.plant = function (e) {
                  for (var t, r = this; r instanceof vn; ) {
                    var i = da(r);
                    (i.__index__ = 0),
                      (i.__values__ = n),
                      t ? (o.__wrapped__ = i) : (t = i);
                    var o = i;
                    r = r.__wrapped__;
                  }
                  return (o.__wrapped__ = e), t;
                }),
                (hn.prototype.reverse = function () {
                  var e = this.__wrapped__;
                  if (e instanceof mn) {
                    var t = e;
                    return (
                      this.__actions__.length && (t = new mn(this)),
                      (t = t.reverse()).__actions__.push({
                        func: Ua,
                        args: [Oa],
                        thisArg: n,
                      }),
                      new gn(t, this.__chain__)
                    );
                  }
                  return this.thru(Oa);
                }),
                (hn.prototype.toJSON =
                  hn.prototype.valueOf =
                  hn.prototype.value =
                    function () {
                      return zi(this.__wrapped__, this.__actions__);
                    }),
                (hn.prototype.first = hn.prototype.head),
                fr &&
                  (hn.prototype[fr] = function () {
                    return this;
                  }),
                hn
              );
            })();
            "function" == typeof define &&
            "object" == typeof define.amd &&
            define.amd
              ? ((Mt._ = Mr),
                define(function () {
                  return Mr;
                }))
              : Dt
              ? (((Dt.exports = Mr)._ = Mr), (Nt._ = Mr))
              : (Mt._ = Mr);
          }.call(this));
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    8: [
      function (e, t, r) {
        !(function (e) {
          "use strict";
          var r,
            n = Object.prototype,
            i = n.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            a = o.iterator || "@@iterator",
            s = o.asyncIterator || "@@asyncIterator",
            u = o.toStringTag || "@@toStringTag",
            c = "object" == typeof t,
            f = e.regeneratorRuntime;
          if (f) c && (t.exports = f);
          else {
            (f = e.regeneratorRuntime = c ? t.exports : {}).wrap = w;
            var l = "suspendedStart",
              d = "suspendedYield",
              h = "executing",
              p = "completed",
              v = {},
              g = {};
            g[a] = function () {
              return this;
            };
            var m = Object.getPrototypeOf,
              y = m && m(m(M([])));
            y && y !== n && i.call(y, a) && (g = y);
            var _ = (b.prototype = E.prototype = Object.create(g));
            (S.prototype = _.constructor = b),
              (b.constructor = S),
              (b[u] = S.displayName = "GeneratorFunction"),
              (f.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                  !!t &&
                  (t === S || "GeneratorFunction" === (t.displayName || t.name))
                );
              }),
              (f.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, b)
                    : ((e.__proto__ = b),
                      u in e || (e[u] = "GeneratorFunction")),
                  (e.prototype = Object.create(_)),
                  e
                );
              }),
              (f.awrap = function (e) {
                return { __await: e };
              }),
              T(A.prototype),
              (A.prototype[s] = function () {
                return this;
              }),
              (f.AsyncIterator = A),
              (f.async = function (e, t, r, n) {
                var i = new A(w(e, t, r, n));
                return f.isGeneratorFunction(t)
                  ? i
                  : i.next().then(function (e) {
                      return e.done ? e.value : i.next();
                    });
              }),
              T(_),
              (_[u] = "Generator"),
              (_[a] = function () {
                return this;
              }),
              (_.toString = function () {
                return "[object Generator]";
              }),
              (f.keys = function (e) {
                var t = [];
                for (var r in e) t.push(r);
                return (
                  t.reverse(),
                  function r() {
                    for (; t.length; ) {
                      var n = t.pop();
                      if (n in e) return (r.value = n), (r.done = !1), r;
                    }
                    return (r.done = !0), r;
                  }
                );
              }),
              (f.values = M),
              (P.prototype = {
                constructor: P,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = r),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = r),
                    this.tryEntries.forEach(R),
                    !e)
                  )
                    for (var t in this)
                      "t" === t.charAt(0) &&
                        i.call(this, t) &&
                        !isNaN(+t.slice(1)) &&
                        (this[t] = r);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (e) {
                  if (this.done) throw e;
                  var t = this;
                  function n(n, i) {
                    return (
                      (s.type = "throw"),
                      (s.arg = e),
                      (t.next = n),
                      i && ((t.method = "next"), (t.arg = r)),
                      !!i
                    );
                  }
                  for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var a = this.tryEntries[o],
                      s = a.completion;
                    if ("root" === a.tryLoc) return n("end");
                    if (a.tryLoc <= this.prev) {
                      var u = i.call(a, "catchLoc"),
                        c = i.call(a, "finallyLoc");
                      if (u && c) {
                        if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                      } else if (u) {
                        if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                      } else {
                        if (!c)
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var n = this.tryEntries[r];
                    if (
                      n.tryLoc <= this.prev &&
                      i.call(n, "finallyLoc") &&
                      this.prev < n.finallyLoc
                    ) {
                      var o = n;
                      break;
                    }
                  }
                  o &&
                    ("break" === e || "continue" === e) &&
                    o.tryLoc <= t &&
                    t <= o.finallyLoc &&
                    (o = null);
                  var a = o ? o.completion : {};
                  return (
                    (a.type = e),
                    (a.arg = t),
                    o
                      ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                      : this.complete(a)
                  );
                },
                complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                    v
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e)
                      return this.complete(r.completion, r.afterLoc), R(r), v;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                      var n = r.completion;
                      if ("throw" === n.type) {
                        var i = n.arg;
                        R(r);
                      }
                      return i;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (e, t, n) {
                  return (
                    (this.delegate = {
                      iterator: M(e),
                      resultName: t,
                      nextLoc: n,
                    }),
                    "next" === this.method && (this.arg = r),
                    v
                  );
                },
              });
          }
          function w(e, t, r, n) {
            var i = t && t.prototype instanceof E ? t : E,
              o = Object.create(i.prototype),
              a = new P(n || []);
            return (
              (o._invoke = (function (e, t, r) {
                var n = l;
                return function (i, o) {
                  if (n === h) throw new Error("Generator is already running");
                  if (n === p) {
                    if ("throw" === i) throw o;
                    return N();
                  }
                  for (r.method = i, r.arg = o; ; ) {
                    var a = r.delegate;
                    if (a) {
                      var s = O(a, r);
                      if (s) {
                        if (s === v) continue;
                        return s;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (n === l) throw ((n = p), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = h;
                    var u = C(e, t, r);
                    if ("normal" === u.type) {
                      if (((n = r.done ? p : d), u.arg === v)) continue;
                      return { value: u.arg, done: r.done };
                    }
                    "throw" === u.type &&
                      ((n = p), (r.method = "throw"), (r.arg = u.arg));
                  }
                };
              })(e, r, a)),
              o
            );
          }
          function C(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          function E() {}
          function S() {}
          function b() {}
          function T(e) {
            ["next", "throw", "return"].forEach(function (t) {
              e[t] = function (e) {
                return this._invoke(t, e);
              };
            });
          }
          function A(e) {
            var t;
            this._invoke = function (r, n) {
              function o() {
                return new Promise(function (t, o) {
                  !(function t(r, n, o, a) {
                    var s = C(e[r], e, n);
                    if ("throw" !== s.type) {
                      var u = s.arg,
                        c = u.value;
                      return c && "object" == typeof c && i.call(c, "__await")
                        ? Promise.resolve(c.__await).then(
                            function (e) {
                              t("next", e, o, a);
                            },
                            function (e) {
                              t("throw", e, o, a);
                            }
                          )
                        : Promise.resolve(c).then(
                            function (e) {
                              (u.value = e), o(u);
                            },
                            function (e) {
                              return t("throw", e, o, a);
                            }
                          );
                    }
                    a(s.arg);
                  })(r, n, t, o);
                });
              }
              return (t = t ? t.then(o, o) : o());
            };
          }
          function O(e, t) {
            var n = e.iterator[t.method];
            if (n === r) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = r),
                  O(e, t),
                  "throw" === t.method)
                )
                  return v;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return v;
            }
            var i = C(n, e.iterator, t.arg);
            if ("throw" === i.type)
              return (
                (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), v
              );
            var o = i.arg;
            return o
              ? o.done
                ? ((t[e.resultName] = o.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method && ((t.method = "next"), (t.arg = r)),
                  (t.delegate = null),
                  v)
                : o
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                v);
          }
          function I(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function R(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function P(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(I, this),
              this.reset(!0);
          }
          function M(e) {
            if (e) {
              var t = e[a];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var n = -1,
                  o = function t() {
                    for (; ++n < e.length; )
                      if (i.call(e, n))
                        return (t.value = e[n]), (t.done = !1), t;
                    return (t.value = r), (t.done = !0), t;
                  };
                return (o.next = o);
              }
            }
            return { next: N };
          }
          function N() {
            return { value: r, done: !0 };
          }
        })(
          (function () {
            return this || ("object" == typeof self && self);
          })() || Function("return this")()
        );
      },
      {},
    ],
    9: [
      function (e, t, r) {
        "use strict";
        var n = e("sdp");
        function i(e, t, r, i, o) {
          var a = n.writeRtpDescription(e.kind, t);
          if (
            ((a += n.writeIceParameters(e.iceGatherer.getLocalParameters())),
            (a += n.writeDtlsParameters(
              e.dtlsTransport.getLocalParameters(),
              "offer" === r ? "actpass" : o || "active"
            )),
            (a += "a=mid:" + e.mid + "\r\n"),
            e.rtpSender && e.rtpReceiver
              ? (a += "a=sendrecv\r\n")
              : e.rtpSender
              ? (a += "a=sendonly\r\n")
              : e.rtpReceiver
              ? (a += "a=recvonly\r\n")
              : (a += "a=inactive\r\n"),
            e.rtpSender)
          ) {
            var s = e.rtpSender._initialTrackId || e.rtpSender.track.id;
            e.rtpSender._initialTrackId = s;
            var u = "msid:" + (i ? i.id : "-") + " " + s + "\r\n";
            (a += "a=" + u),
              (a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + u),
              e.sendEncodingParameters[0].rtx &&
                ((a +=
                  "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + u),
                (a +=
                  "a=ssrc-group:FID " +
                  e.sendEncodingParameters[0].ssrc +
                  " " +
                  e.sendEncodingParameters[0].rtx.ssrc +
                  "\r\n"));
          }
          return (
            (a +=
              "a=ssrc:" +
              e.sendEncodingParameters[0].ssrc +
              " cname:" +
              n.localCName +
              "\r\n"),
            e.rtpSender &&
              e.sendEncodingParameters[0].rtx &&
              (a +=
                "a=ssrc:" +
                e.sendEncodingParameters[0].rtx.ssrc +
                " cname:" +
                n.localCName +
                "\r\n"),
            a
          );
        }
        function o(e, t) {
          var r = { codecs: [], headerExtensions: [], fecMechanisms: [] },
            n = function (e, t) {
              e = parseInt(e, 10);
              for (var r = 0; r < t.length; r++)
                if (t[r].payloadType === e || t[r].preferredPayloadType === e)
                  return t[r];
            },
            i = function (e, t, r, i) {
              var o = n(e.parameters.apt, r),
                a = n(t.parameters.apt, i);
              return o && a && o.name.toLowerCase() === a.name.toLowerCase();
            };
          return (
            e.codecs.forEach(function (n) {
              for (var o = 0; o < t.codecs.length; o++) {
                var a = t.codecs[o];
                if (
                  n.name.toLowerCase() === a.name.toLowerCase() &&
                  n.clockRate === a.clockRate
                ) {
                  if (
                    "rtx" === n.name.toLowerCase() &&
                    n.parameters &&
                    a.parameters.apt &&
                    !i(n, a, e.codecs, t.codecs)
                  )
                    continue;
                  ((a = JSON.parse(JSON.stringify(a))).numChannels = Math.min(
                    n.numChannels,
                    a.numChannels
                  )),
                    r.codecs.push(a),
                    (a.rtcpFeedback = a.rtcpFeedback.filter(function (e) {
                      for (var t = 0; t < n.rtcpFeedback.length; t++)
                        if (
                          n.rtcpFeedback[t].type === e.type &&
                          n.rtcpFeedback[t].parameter === e.parameter
                        )
                          return !0;
                      return !1;
                    }));
                  break;
                }
              }
            }),
            e.headerExtensions.forEach(function (e) {
              for (var n = 0; n < t.headerExtensions.length; n++) {
                var i = t.headerExtensions[n];
                if (e.uri === i.uri) {
                  r.headerExtensions.push(i);
                  break;
                }
              }
            }),
            r
          );
        }
        function a(e, t, r) {
          return (
            -1 !==
            {
              offer: {
                setLocalDescription: ["stable", "have-local-offer"],
                setRemoteDescription: ["stable", "have-remote-offer"],
              },
              answer: {
                setLocalDescription: [
                  "have-remote-offer",
                  "have-local-pranswer",
                ],
                setRemoteDescription: [
                  "have-local-offer",
                  "have-remote-pranswer",
                ],
              },
            }[t][e].indexOf(r)
          );
        }
        function s(e, t) {
          var r = e.getRemoteCandidates().find(function (e) {
            return (
              t.foundation === e.foundation &&
              t.ip === e.ip &&
              t.port === e.port &&
              t.priority === e.priority &&
              t.protocol === e.protocol &&
              t.type === e.type
            );
          });
          return r || e.addRemoteCandidate(t), !r;
        }
        function u(e, t) {
          var r = new Error(t);
          return (
            (r.name = e),
            (r.code = {
              NotSupportedError: 9,
              InvalidStateError: 11,
              InvalidAccessError: 15,
              TypeError: void 0,
              OperationError: void 0,
            }[e]),
            r
          );
        }
        t.exports = function (e, t) {
          function r(t, r) {
            r.addTrack(t),
              r.dispatchEvent(
                new e.MediaStreamTrackEvent("addtrack", { track: t })
              );
          }
          function c(t, r, n, i) {
            var o = new Event("track");
            (o.track = r),
              (o.receiver = n),
              (o.transceiver = { receiver: n }),
              (o.streams = i),
              e.setTimeout(function () {
                t._dispatchEvent("track", o);
              });
          }
          var f = function (r) {
            var i = this,
              o = document.createDocumentFragment();
            if (
              ([
                "addEventListener",
                "removeEventListener",
                "dispatchEvent",
              ].forEach(function (e) {
                i[e] = o[e].bind(o);
              }),
              (this.canTrickleIceCandidates = null),
              (this.needNegotiation = !1),
              (this.localStreams = []),
              (this.remoteStreams = []),
              (this._localDescription = null),
              (this._remoteDescription = null),
              (this.signalingState = "stable"),
              (this.iceConnectionState = "new"),
              (this.connectionState = "new"),
              (this.iceGatheringState = "new"),
              (r = JSON.parse(JSON.stringify(r || {}))),
              (this.usingBundle = "max-bundle" === r.bundlePolicy),
              "negotiate" === r.rtcpMuxPolicy)
            )
              throw u(
                "NotSupportedError",
                "rtcpMuxPolicy 'negotiate' is not supported"
              );
            switch (
              (r.rtcpMuxPolicy || (r.rtcpMuxPolicy = "require"),
              r.iceTransportPolicy)
            ) {
              case "all":
              case "relay":
                break;
              default:
                r.iceTransportPolicy = "all";
            }
            switch (r.bundlePolicy) {
              case "balanced":
              case "max-compat":
              case "max-bundle":
                break;
              default:
                r.bundlePolicy = "balanced";
            }
            if (
              ((r.iceServers = (function (e, t) {
                var r = !1;
                return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
                  if (e && (e.urls || e.url)) {
                    var n = e.urls || e.url;
                    e.url &&
                      !e.urls &&
                      console.warn(
                        "RTCIceServer.url is deprecated! Use urls instead."
                      );
                    var i = "string" == typeof n;
                    return (
                      i && (n = [n]),
                      (n = n.filter(function (e) {
                        return 0 !== e.indexOf("turn:") ||
                          -1 === e.indexOf("transport=udp") ||
                          -1 !== e.indexOf("turn:[") ||
                          r
                          ? 0 === e.indexOf("stun:") &&
                              t >= 14393 &&
                              -1 === e.indexOf("?transport=udp")
                          : ((r = !0), !0);
                      })),
                      delete e.url,
                      (e.urls = i ? n[0] : n),
                      !!n.length
                    );
                  }
                });
              })(r.iceServers || [], t)),
              (this._iceGatherers = []),
              r.iceCandidatePoolSize)
            )
              for (var a = r.iceCandidatePoolSize; a > 0; a--)
                this._iceGatherers.push(
                  new e.RTCIceGatherer({
                    iceServers: r.iceServers,
                    gatherPolicy: r.iceTransportPolicy,
                  })
                );
            else r.iceCandidatePoolSize = 0;
            (this._config = r),
              (this.transceivers = []),
              (this._sdpSessionId = n.generateSessionId()),
              (this._sdpSessionVersion = 0),
              (this._dtlsRole = void 0),
              (this._isClosed = !1);
          };
          Object.defineProperty(f.prototype, "localDescription", {
            configurable: !0,
            get: function () {
              return this._localDescription;
            },
          }),
            Object.defineProperty(f.prototype, "remoteDescription", {
              configurable: !0,
              get: function () {
                return this._remoteDescription;
              },
            }),
            (f.prototype.onicecandidate = null),
            (f.prototype.onaddstream = null),
            (f.prototype.ontrack = null),
            (f.prototype.onremovestream = null),
            (f.prototype.onsignalingstatechange = null),
            (f.prototype.oniceconnectionstatechange = null),
            (f.prototype.onconnectionstatechange = null),
            (f.prototype.onicegatheringstatechange = null),
            (f.prototype.onnegotiationneeded = null),
            (f.prototype.ondatachannel = null),
            (f.prototype._dispatchEvent = function (e, t) {
              this._isClosed ||
                (this.dispatchEvent(t),
                "function" == typeof this["on" + e] && this["on" + e](t));
            }),
            (f.prototype._emitGatheringStateChange = function () {
              var e = new Event("icegatheringstatechange");
              this._dispatchEvent("icegatheringstatechange", e);
            }),
            (f.prototype.getConfiguration = function () {
              return this._config;
            }),
            (f.prototype.getLocalStreams = function () {
              return this.localStreams;
            }),
            (f.prototype.getRemoteStreams = function () {
              return this.remoteStreams;
            }),
            (f.prototype._createTransceiver = function (e, t) {
              var r = this.transceivers.length > 0,
                n = {
                  track: null,
                  iceGatherer: null,
                  iceTransport: null,
                  dtlsTransport: null,
                  localCapabilities: null,
                  remoteCapabilities: null,
                  rtpSender: null,
                  rtpReceiver: null,
                  kind: e,
                  mid: null,
                  sendEncodingParameters: null,
                  recvEncodingParameters: null,
                  stream: null,
                  associatedRemoteMediaStreams: [],
                  wantReceive: !0,
                };
              if (this.usingBundle && r)
                (n.iceTransport = this.transceivers[0].iceTransport),
                  (n.dtlsTransport = this.transceivers[0].dtlsTransport);
              else {
                var i = this._createIceAndDtlsTransports();
                (n.iceTransport = i.iceTransport),
                  (n.dtlsTransport = i.dtlsTransport);
              }
              return t || this.transceivers.push(n), n;
            }),
            (f.prototype.addTrack = function (t, r) {
              if (this._isClosed)
                throw u(
                  "InvalidStateError",
                  "Attempted to call addTrack on a closed peerconnection."
                );
              var n;
              if (
                this.transceivers.find(function (e) {
                  return e.track === t;
                })
              )
                throw u("InvalidAccessError", "Track already exists.");
              for (var i = 0; i < this.transceivers.length; i++)
                this.transceivers[i].track ||
                  this.transceivers[i].kind !== t.kind ||
                  (n = this.transceivers[i]);
              return (
                n || (n = this._createTransceiver(t.kind)),
                this._maybeFireNegotiationNeeded(),
                -1 === this.localStreams.indexOf(r) &&
                  this.localStreams.push(r),
                (n.track = t),
                (n.stream = r),
                (n.rtpSender = new e.RTCRtpSender(t, n.dtlsTransport)),
                n.rtpSender
              );
            }),
            (f.prototype.addStream = function (e) {
              var r = this;
              if (t >= 15025)
                e.getTracks().forEach(function (t) {
                  r.addTrack(t, e);
                });
              else {
                var n = e.clone();
                e.getTracks().forEach(function (e, t) {
                  var r = n.getTracks()[t];
                  e.addEventListener("enabled", function (e) {
                    r.enabled = e.enabled;
                  });
                }),
                  n.getTracks().forEach(function (e) {
                    r.addTrack(e, n);
                  });
              }
            }),
            (f.prototype.removeTrack = function (t) {
              if (this._isClosed)
                throw u(
                  "InvalidStateError",
                  "Attempted to call removeTrack on a closed peerconnection."
                );
              if (!(t instanceof e.RTCRtpSender))
                throw new TypeError(
                  "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender."
                );
              var r = this.transceivers.find(function (e) {
                return e.rtpSender === t;
              });
              if (!r)
                throw u(
                  "InvalidAccessError",
                  "Sender was not created by this connection."
                );
              var n = r.stream;
              r.rtpSender.stop(),
                (r.rtpSender = null),
                (r.track = null),
                (r.stream = null),
                -1 ===
                  this.transceivers
                    .map(function (e) {
                      return e.stream;
                    })
                    .indexOf(n) &&
                  this.localStreams.indexOf(n) > -1 &&
                  this.localStreams.splice(this.localStreams.indexOf(n), 1),
                this._maybeFireNegotiationNeeded();
            }),
            (f.prototype.removeStream = function (e) {
              var t = this;
              e.getTracks().forEach(function (e) {
                var r = t.getSenders().find(function (t) {
                  return t.track === e;
                });
                r && t.removeTrack(r);
              });
            }),
            (f.prototype.getSenders = function () {
              return this.transceivers
                .filter(function (e) {
                  return !!e.rtpSender;
                })
                .map(function (e) {
                  return e.rtpSender;
                });
            }),
            (f.prototype.getReceivers = function () {
              return this.transceivers
                .filter(function (e) {
                  return !!e.rtpReceiver;
                })
                .map(function (e) {
                  return e.rtpReceiver;
                });
            }),
            (f.prototype._createIceGatherer = function (t, r) {
              var n = this;
              if (r && t > 0) return this.transceivers[0].iceGatherer;
              if (this._iceGatherers.length) return this._iceGatherers.shift();
              var i = new e.RTCIceGatherer({
                iceServers: this._config.iceServers,
                gatherPolicy: this._config.iceTransportPolicy,
              });
              return (
                Object.defineProperty(i, "state", {
                  value: "new",
                  writable: !0,
                }),
                (this.transceivers[t].bufferedCandidateEvents = []),
                (this.transceivers[t].bufferCandidates = function (e) {
                  var r = !e.candidate || 0 === Object.keys(e.candidate).length;
                  (i.state = r ? "completed" : "gathering"),
                    null !== n.transceivers[t].bufferedCandidateEvents &&
                      n.transceivers[t].bufferedCandidateEvents.push(e);
                }),
                i.addEventListener(
                  "localcandidate",
                  this.transceivers[t].bufferCandidates
                ),
                i
              );
            }),
            (f.prototype._gather = function (t, r) {
              var i = this,
                o = this.transceivers[r].iceGatherer;
              if (!o.onlocalcandidate) {
                var a = this.transceivers[r].bufferedCandidateEvents;
                (this.transceivers[r].bufferedCandidateEvents = null),
                  o.removeEventListener(
                    "localcandidate",
                    this.transceivers[r].bufferCandidates
                  ),
                  (o.onlocalcandidate = function (e) {
                    if (!(i.usingBundle && r > 0)) {
                      var a = new Event("icecandidate");
                      a.candidate = { sdpMid: t, sdpMLineIndex: r };
                      var s = e.candidate,
                        u = !s || 0 === Object.keys(s).length;
                      if (u)
                        ("new" !== o.state && "gathering" !== o.state) ||
                          (o.state = "completed");
                      else {
                        "new" === o.state && (o.state = "gathering"),
                          (s.component = 1),
                          (s.ufrag = o.getLocalParameters().usernameFragment);
                        var c = n.writeCandidate(s);
                        (a.candidate = Object.assign(
                          a.candidate,
                          n.parseCandidate(c)
                        )),
                          (a.candidate.candidate = c),
                          (a.candidate.toJSON = function () {
                            return {
                              candidate: a.candidate.candidate,
                              sdpMid: a.candidate.sdpMid,
                              sdpMLineIndex: a.candidate.sdpMLineIndex,
                              usernameFragment: a.candidate.usernameFragment,
                            };
                          });
                      }
                      var f = n.getMediaSections(i._localDescription.sdp);
                      (f[a.candidate.sdpMLineIndex] += u
                        ? "a=end-of-candidates\r\n"
                        : "a=" + a.candidate.candidate + "\r\n"),
                        (i._localDescription.sdp =
                          n.getDescription(i._localDescription.sdp) +
                          f.join(""));
                      var l = i.transceivers.every(function (e) {
                        return (
                          e.iceGatherer && "completed" === e.iceGatherer.state
                        );
                      });
                      "gathering" !== i.iceGatheringState &&
                        ((i.iceGatheringState = "gathering"),
                        i._emitGatheringStateChange()),
                        u || i._dispatchEvent("icecandidate", a),
                        l &&
                          (i._dispatchEvent(
                            "icecandidate",
                            new Event("icecandidate")
                          ),
                          (i.iceGatheringState = "complete"),
                          i._emitGatheringStateChange());
                    }
                  }),
                  e.setTimeout(function () {
                    a.forEach(function (e) {
                      o.onlocalcandidate(e);
                    });
                  }, 0);
              }
            }),
            (f.prototype._createIceAndDtlsTransports = function () {
              var t = this,
                r = new e.RTCIceTransport(null);
              r.onicestatechange = function () {
                t._updateIceConnectionState(), t._updateConnectionState();
              };
              var n = new e.RTCDtlsTransport(r);
              return (
                (n.ondtlsstatechange = function () {
                  t._updateConnectionState();
                }),
                (n.onerror = function () {
                  Object.defineProperty(n, "state", {
                    value: "failed",
                    writable: !0,
                  }),
                    t._updateConnectionState();
                }),
                { iceTransport: r, dtlsTransport: n }
              );
            }),
            (f.prototype._disposeIceAndDtlsTransports = function (e) {
              var t = this.transceivers[e].iceGatherer;
              t &&
                (delete t.onlocalcandidate,
                delete this.transceivers[e].iceGatherer);
              var r = this.transceivers[e].iceTransport;
              r &&
                (delete r.onicestatechange,
                delete this.transceivers[e].iceTransport);
              var n = this.transceivers[e].dtlsTransport;
              n &&
                (delete n.ondtlsstatechange,
                delete n.onerror,
                delete this.transceivers[e].dtlsTransport);
            }),
            (f.prototype._transceive = function (e, r, i) {
              var a = o(e.localCapabilities, e.remoteCapabilities);
              r &&
                e.rtpSender &&
                ((a.encodings = e.sendEncodingParameters),
                (a.rtcp = {
                  cname: n.localCName,
                  compound: e.rtcpParameters.compound,
                }),
                e.recvEncodingParameters.length &&
                  (a.rtcp.ssrc = e.recvEncodingParameters[0].ssrc),
                e.rtpSender.send(a)),
                i &&
                  e.rtpReceiver &&
                  a.codecs.length > 0 &&
                  ("video" === e.kind &&
                    e.recvEncodingParameters &&
                    t < 15019 &&
                    e.recvEncodingParameters.forEach(function (e) {
                      delete e.rtx;
                    }),
                  e.recvEncodingParameters.length
                    ? (a.encodings = e.recvEncodingParameters)
                    : (a.encodings = [{}]),
                  (a.rtcp = { compound: e.rtcpParameters.compound }),
                  e.rtcpParameters.cname &&
                    (a.rtcp.cname = e.rtcpParameters.cname),
                  e.sendEncodingParameters.length &&
                    (a.rtcp.ssrc = e.sendEncodingParameters[0].ssrc),
                  e.rtpReceiver.receive(a));
            }),
            (f.prototype.setLocalDescription = function (e) {
              var t,
                r,
                i = this;
              if (-1 === ["offer", "answer"].indexOf(e.type))
                return Promise.reject(
                  u("TypeError", 'Unsupported type "' + e.type + '"')
                );
              if (
                !a("setLocalDescription", e.type, i.signalingState) ||
                i._isClosed
              )
                return Promise.reject(
                  u(
                    "InvalidStateError",
                    "Can not set local " +
                      e.type +
                      " in state " +
                      i.signalingState
                  )
                );
              if ("offer" === e.type)
                (t = n.splitSections(e.sdp)),
                  (r = t.shift()),
                  t.forEach(function (e, t) {
                    var r = n.parseRtpParameters(e);
                    i.transceivers[t].localCapabilities = r;
                  }),
                  i.transceivers.forEach(function (e, t) {
                    i._gather(e.mid, t);
                  });
              else if ("answer" === e.type) {
                (t = n.splitSections(i._remoteDescription.sdp)),
                  (r = t.shift());
                var s = n.matchPrefix(r, "a=ice-lite").length > 0;
                t.forEach(function (e, t) {
                  var a = i.transceivers[t],
                    u = a.iceGatherer,
                    c = a.iceTransport,
                    f = a.dtlsTransport,
                    l = a.localCapabilities,
                    d = a.remoteCapabilities;
                  if (
                    !(
                      n.isRejected(e) &&
                      0 === n.matchPrefix(e, "a=bundle-only").length
                    ) &&
                    !a.rejected
                  ) {
                    var h = n.getIceParameters(e, r),
                      p = n.getDtlsParameters(e, r);
                    s && (p.role = "server"),
                      (i.usingBundle && 0 !== t) ||
                        (i._gather(a.mid, t),
                        "new" === c.state &&
                          c.start(u, h, s ? "controlling" : "controlled"),
                        "new" === f.state && f.start(p));
                    var v = o(l, d);
                    i._transceive(a, v.codecs.length > 0, !1);
                  }
                });
              }
              return (
                (i._localDescription = { type: e.type, sdp: e.sdp }),
                "offer" === e.type
                  ? i._updateSignalingState("have-local-offer")
                  : i._updateSignalingState("stable"),
                Promise.resolve()
              );
            }),
            (f.prototype.setRemoteDescription = function (i) {
              var f = this;
              if (-1 === ["offer", "answer"].indexOf(i.type))
                return Promise.reject(
                  u("TypeError", 'Unsupported type "' + i.type + '"')
                );
              if (
                !a("setRemoteDescription", i.type, f.signalingState) ||
                f._isClosed
              )
                return Promise.reject(
                  u(
                    "InvalidStateError",
                    "Can not set remote " +
                      i.type +
                      " in state " +
                      f.signalingState
                  )
                );
              var l = {};
              f.remoteStreams.forEach(function (e) {
                l[e.id] = e;
              });
              var d = [],
                h = n.splitSections(i.sdp),
                p = h.shift(),
                v = n.matchPrefix(p, "a=ice-lite").length > 0,
                g = n.matchPrefix(p, "a=group:BUNDLE ").length > 0;
              f.usingBundle = g;
              var m = n.matchPrefix(p, "a=ice-options:")[0];
              return (
                (f.canTrickleIceCandidates =
                  !!m && m.substr(14).split(" ").indexOf("trickle") >= 0),
                h.forEach(function (a, u) {
                  var c = n.splitLines(a),
                    h = n.getKind(a),
                    m =
                      n.isRejected(a) &&
                      0 === n.matchPrefix(a, "a=bundle-only").length,
                    y = c[0].substr(2).split(" ")[2],
                    _ = n.getDirection(a, p),
                    w = n.parseMsid(a),
                    C = n.getMid(a) || n.generateIdentifier();
                  if (
                    m ||
                    ("application" === h &&
                      ("DTLS/SCTP" === y || "UDP/DTLS/SCTP" === y))
                  )
                    f.transceivers[u] = {
                      mid: C,
                      kind: h,
                      protocol: y,
                      rejected: !0,
                    };
                  else {
                    var E, S, b, T, A, O, I, R, P;
                    !m &&
                      f.transceivers[u] &&
                      f.transceivers[u].rejected &&
                      (f.transceivers[u] = f._createTransceiver(h, !0));
                    var M,
                      N,
                      D = n.parseRtpParameters(a);
                    m ||
                      ((M = n.getIceParameters(a, p)),
                      ((N = n.getDtlsParameters(a, p)).role = "client")),
                      (I = n.parseRtpEncodingParameters(a));
                    var k = n.parseRtcpParameters(a),
                      x = n.matchPrefix(a, "a=end-of-candidates", p).length > 0,
                      B = n
                        .matchPrefix(a, "a=candidate:")
                        .map(function (e) {
                          return n.parseCandidate(e);
                        })
                        .filter(function (e) {
                          return 1 === e.component;
                        });
                    if (
                      (("offer" === i.type || "answer" === i.type) &&
                        !m &&
                        g &&
                        u > 0 &&
                        f.transceivers[u] &&
                        (f._disposeIceAndDtlsTransports(u),
                        (f.transceivers[u].iceGatherer =
                          f.transceivers[0].iceGatherer),
                        (f.transceivers[u].iceTransport =
                          f.transceivers[0].iceTransport),
                        (f.transceivers[u].dtlsTransport =
                          f.transceivers[0].dtlsTransport),
                        f.transceivers[u].rtpSender &&
                          f.transceivers[u].rtpSender.setTransport(
                            f.transceivers[0].dtlsTransport
                          ),
                        f.transceivers[u].rtpReceiver &&
                          f.transceivers[u].rtpReceiver.setTransport(
                            f.transceivers[0].dtlsTransport
                          )),
                      "offer" !== i.type || m)
                    ) {
                      if ("answer" === i.type && !m) {
                        (S = (E = f.transceivers[u]).iceGatherer),
                          (b = E.iceTransport),
                          (T = E.dtlsTransport),
                          (A = E.rtpReceiver),
                          (O = E.sendEncodingParameters),
                          (R = E.localCapabilities),
                          (f.transceivers[u].recvEncodingParameters = I),
                          (f.transceivers[u].remoteCapabilities = D),
                          (f.transceivers[u].rtcpParameters = k),
                          B.length &&
                            "new" === b.state &&
                            ((!v && !x) || (g && 0 !== u)
                              ? B.forEach(function (e) {
                                  s(E.iceTransport, e);
                                })
                              : b.setRemoteCandidates(B)),
                          (g && 0 !== u) ||
                            ("new" === b.state && b.start(S, M, "controlling"),
                            "new" === T.state && T.start(N)),
                          !o(
                            E.localCapabilities,
                            E.remoteCapabilities
                          ).codecs.filter(function (e) {
                            return "rtx" === e.name.toLowerCase();
                          }).length &&
                            E.sendEncodingParameters[0].rtx &&
                            delete E.sendEncodingParameters[0].rtx,
                          f._transceive(
                            E,
                            "sendrecv" === _ || "recvonly" === _,
                            "sendrecv" === _ || "sendonly" === _
                          ),
                          !A || ("sendrecv" !== _ && "sendonly" !== _)
                            ? delete E.rtpReceiver
                            : ((P = A.track),
                              w
                                ? (l[w.stream] ||
                                    (l[w.stream] = new e.MediaStream()),
                                  r(P, l[w.stream]),
                                  d.push([P, A, l[w.stream]]))
                                : (l.default ||
                                    (l.default = new e.MediaStream()),
                                  r(P, l.default),
                                  d.push([P, A, l.default])));
                      }
                    } else {
                      ((E = f.transceivers[u] || f._createTransceiver(h)).mid =
                        C),
                        E.iceGatherer ||
                          (E.iceGatherer = f._createIceGatherer(u, g)),
                        B.length &&
                          "new" === E.iceTransport.state &&
                          (!x || (g && 0 !== u)
                            ? B.forEach(function (e) {
                                s(E.iceTransport, e);
                              })
                            : E.iceTransport.setRemoteCandidates(B)),
                        (R = e.RTCRtpReceiver.getCapabilities(h)),
                        t < 15019 &&
                          (R.codecs = R.codecs.filter(function (e) {
                            return "rtx" !== e.name;
                          })),
                        (O = E.sendEncodingParameters || [
                          { ssrc: 1001 * (2 * u + 2) },
                        ]);
                      var L,
                        j = !1;
                      if ("sendrecv" === _ || "sendonly" === _) {
                        if (
                          ((j = !E.rtpReceiver),
                          (A =
                            E.rtpReceiver ||
                            new e.RTCRtpReceiver(E.dtlsTransport, h)),
                          j)
                        )
                          (P = A.track),
                            (w && "-" === w.stream) ||
                              (w
                                ? (l[w.stream] ||
                                    ((l[w.stream] = new e.MediaStream()),
                                    Object.defineProperty(l[w.stream], "id", {
                                      get: function () {
                                        return w.stream;
                                      },
                                    })),
                                  Object.defineProperty(P, "id", {
                                    get: function () {
                                      return w.track;
                                    },
                                  }),
                                  (L = l[w.stream]))
                                : (l.default ||
                                    (l.default = new e.MediaStream()),
                                  (L = l.default))),
                            L &&
                              (r(P, L), E.associatedRemoteMediaStreams.push(L)),
                            d.push([P, A, L]);
                      } else
                        E.rtpReceiver &&
                          E.rtpReceiver.track &&
                          (E.associatedRemoteMediaStreams.forEach(function (t) {
                            var r,
                              n,
                              i = t.getTracks().find(function (e) {
                                return e.id === E.rtpReceiver.track.id;
                              });
                            i &&
                              ((r = i),
                              (n = t).removeTrack(r),
                              n.dispatchEvent(
                                new e.MediaStreamTrackEvent("removetrack", {
                                  track: r,
                                })
                              ));
                          }),
                          (E.associatedRemoteMediaStreams = []));
                      (E.localCapabilities = R),
                        (E.remoteCapabilities = D),
                        (E.rtpReceiver = A),
                        (E.rtcpParameters = k),
                        (E.sendEncodingParameters = O),
                        (E.recvEncodingParameters = I),
                        f._transceive(f.transceivers[u], !1, j);
                    }
                  }
                }),
                void 0 === f._dtlsRole &&
                  (f._dtlsRole = "offer" === i.type ? "active" : "passive"),
                (f._remoteDescription = { type: i.type, sdp: i.sdp }),
                "offer" === i.type
                  ? f._updateSignalingState("have-remote-offer")
                  : f._updateSignalingState("stable"),
                Object.keys(l).forEach(function (t) {
                  var r = l[t];
                  if (r.getTracks().length) {
                    if (-1 === f.remoteStreams.indexOf(r)) {
                      f.remoteStreams.push(r);
                      var n = new Event("addstream");
                      (n.stream = r),
                        e.setTimeout(function () {
                          f._dispatchEvent("addstream", n);
                        });
                    }
                    d.forEach(function (e) {
                      var t = e[0],
                        n = e[1];
                      r.id === e[2].id && c(f, t, n, [r]);
                    });
                  }
                }),
                d.forEach(function (e) {
                  e[2] || c(f, e[0], e[1], []);
                }),
                e.setTimeout(function () {
                  f &&
                    f.transceivers &&
                    f.transceivers.forEach(function (e) {
                      e.iceTransport &&
                        "new" === e.iceTransport.state &&
                        e.iceTransport.getRemoteCandidates().length > 0 &&
                        (console.warn(
                          "Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"
                        ),
                        e.iceTransport.addRemoteCandidate({}));
                    });
                }, 4e3),
                Promise.resolve()
              );
            }),
            (f.prototype.close = function () {
              this.transceivers.forEach(function (e) {
                e.iceTransport && e.iceTransport.stop(),
                  e.dtlsTransport && e.dtlsTransport.stop(),
                  e.rtpSender && e.rtpSender.stop(),
                  e.rtpReceiver && e.rtpReceiver.stop();
              }),
                (this._isClosed = !0),
                this._updateSignalingState("closed");
            }),
            (f.prototype._updateSignalingState = function (e) {
              this.signalingState = e;
              var t = new Event("signalingstatechange");
              this._dispatchEvent("signalingstatechange", t);
            }),
            (f.prototype._maybeFireNegotiationNeeded = function () {
              var t = this;
              "stable" === this.signalingState &&
                !0 !== this.needNegotiation &&
                ((this.needNegotiation = !0),
                e.setTimeout(function () {
                  if (t.needNegotiation) {
                    t.needNegotiation = !1;
                    var e = new Event("negotiationneeded");
                    t._dispatchEvent("negotiationneeded", e);
                  }
                }, 0));
            }),
            (f.prototype._updateIceConnectionState = function () {
              var e,
                t = {
                  new: 0,
                  closed: 0,
                  checking: 0,
                  connected: 0,
                  completed: 0,
                  disconnected: 0,
                  failed: 0,
                };
              if (
                (this.transceivers.forEach(function (e) {
                  t[e.iceTransport.state]++;
                }),
                (e = "new"),
                t.failed > 0
                  ? (e = "failed")
                  : t.checking > 0
                  ? (e = "checking")
                  : t.disconnected > 0
                  ? (e = "disconnected")
                  : t.new > 0
                  ? (e = "new")
                  : t.connected > 0
                  ? (e = "connected")
                  : t.completed > 0 && (e = "completed"),
                e !== this.iceConnectionState)
              ) {
                this.iceConnectionState = e;
                var r = new Event("iceconnectionstatechange");
                this._dispatchEvent("iceconnectionstatechange", r);
              }
            }),
            (f.prototype._updateConnectionState = function () {
              var e,
                t = {
                  new: 0,
                  closed: 0,
                  connecting: 0,
                  connected: 0,
                  completed: 0,
                  disconnected: 0,
                  failed: 0,
                };
              if (
                (this.transceivers.forEach(function (e) {
                  t[e.iceTransport.state]++, t[e.dtlsTransport.state]++;
                }),
                (t.connected += t.completed),
                (e = "new"),
                t.failed > 0
                  ? (e = "failed")
                  : t.connecting > 0
                  ? (e = "connecting")
                  : t.disconnected > 0
                  ? (e = "disconnected")
                  : t.new > 0
                  ? (e = "new")
                  : t.connected > 0 && (e = "connected"),
                e !== this.connectionState)
              ) {
                this.connectionState = e;
                var r = new Event("connectionstatechange");
                this._dispatchEvent("connectionstatechange", r);
              }
            }),
            (f.prototype.createOffer = function () {
              var r = this;
              if (r._isClosed)
                return Promise.reject(
                  u("InvalidStateError", "Can not call createOffer after close")
                );
              var o = r.transceivers.filter(function (e) {
                  return "audio" === e.kind;
                }).length,
                a = r.transceivers.filter(function (e) {
                  return "video" === e.kind;
                }).length,
                s = arguments[0];
              if (s) {
                if (s.mandatory || s.optional)
                  throw new TypeError(
                    "Legacy mandatory/optional constraints not supported."
                  );
                void 0 !== s.offerToReceiveAudio &&
                  (o =
                    !0 === s.offerToReceiveAudio
                      ? 1
                      : !1 === s.offerToReceiveAudio
                      ? 0
                      : s.offerToReceiveAudio),
                  void 0 !== s.offerToReceiveVideo &&
                    (a =
                      !0 === s.offerToReceiveVideo
                        ? 1
                        : !1 === s.offerToReceiveVideo
                        ? 0
                        : s.offerToReceiveVideo);
              }
              for (
                r.transceivers.forEach(function (e) {
                  "audio" === e.kind
                    ? --o < 0 && (e.wantReceive = !1)
                    : "video" === e.kind && --a < 0 && (e.wantReceive = !1);
                });
                o > 0 || a > 0;

              )
                o > 0 && (r._createTransceiver("audio"), o--),
                  a > 0 && (r._createTransceiver("video"), a--);
              var c = n.writeSessionBoilerplate(
                r._sdpSessionId,
                r._sdpSessionVersion++
              );
              r.transceivers.forEach(function (i, o) {
                var a = i.track,
                  s = i.kind,
                  u = i.mid || n.generateIdentifier();
                (i.mid = u),
                  i.iceGatherer ||
                    (i.iceGatherer = r._createIceGatherer(o, r.usingBundle));
                var c = e.RTCRtpSender.getCapabilities(s);
                t < 15019 &&
                  (c.codecs = c.codecs.filter(function (e) {
                    return "rtx" !== e.name;
                  })),
                  c.codecs.forEach(function (e) {
                    "H264" === e.name &&
                      void 0 === e.parameters["level-asymmetry-allowed"] &&
                      (e.parameters["level-asymmetry-allowed"] = "1"),
                      i.remoteCapabilities &&
                        i.remoteCapabilities.codecs &&
                        i.remoteCapabilities.codecs.forEach(function (t) {
                          e.name.toLowerCase() === t.name.toLowerCase() &&
                            e.clockRate === t.clockRate &&
                            (e.preferredPayloadType = t.payloadType);
                        });
                  }),
                  c.headerExtensions.forEach(function (e) {
                    (
                      (i.remoteCapabilities &&
                        i.remoteCapabilities.headerExtensions) ||
                      []
                    ).forEach(function (t) {
                      e.uri === t.uri && (e.id = t.id);
                    });
                  });
                var f = i.sendEncodingParameters || [
                  { ssrc: 1001 * (2 * o + 1) },
                ];
                a &&
                  t >= 15019 &&
                  "video" === s &&
                  !f[0].rtx &&
                  (f[0].rtx = { ssrc: f[0].ssrc + 1 }),
                  i.wantReceive &&
                    (i.rtpReceiver = new e.RTCRtpReceiver(i.dtlsTransport, s)),
                  (i.localCapabilities = c),
                  (i.sendEncodingParameters = f);
              }),
                "max-compat" !== r._config.bundlePolicy &&
                  (c +=
                    "a=group:BUNDLE " +
                    r.transceivers
                      .map(function (e) {
                        return e.mid;
                      })
                      .join(" ") +
                    "\r\n"),
                (c += "a=ice-options:trickle\r\n"),
                r.transceivers.forEach(function (e, t) {
                  (c += i(
                    e,
                    e.localCapabilities,
                    "offer",
                    e.stream,
                    r._dtlsRole
                  )),
                    (c += "a=rtcp-rsize\r\n"),
                    !e.iceGatherer ||
                      "new" === r.iceGatheringState ||
                      (0 !== t && r.usingBundle) ||
                      (e.iceGatherer.getLocalCandidates().forEach(function (e) {
                        (e.component = 1),
                          (c += "a=" + n.writeCandidate(e) + "\r\n");
                      }),
                      "completed" === e.iceGatherer.state &&
                        (c += "a=end-of-candidates\r\n"));
                });
              var f = new e.RTCSessionDescription({ type: "offer", sdp: c });
              return Promise.resolve(f);
            }),
            (f.prototype.createAnswer = function () {
              var r = this;
              if (r._isClosed)
                return Promise.reject(
                  u(
                    "InvalidStateError",
                    "Can not call createAnswer after close"
                  )
                );
              if (
                "have-remote-offer" !== r.signalingState &&
                "have-local-pranswer" !== r.signalingState
              )
                return Promise.reject(
                  u(
                    "InvalidStateError",
                    "Can not call createAnswer in signalingState " +
                      r.signalingState
                  )
                );
              var a = n.writeSessionBoilerplate(
                r._sdpSessionId,
                r._sdpSessionVersion++
              );
              r.usingBundle &&
                (a +=
                  "a=group:BUNDLE " +
                  r.transceivers
                    .map(function (e) {
                      return e.mid;
                    })
                    .join(" ") +
                  "\r\n"),
                (a += "a=ice-options:trickle\r\n");
              var s = n.getMediaSections(r._remoteDescription.sdp).length;
              r.transceivers.forEach(function (e, n) {
                if (!(n + 1 > s)) {
                  if (e.rejected)
                    return (
                      "application" === e.kind
                        ? "DTLS/SCTP" === e.protocol
                          ? (a += "m=application 0 DTLS/SCTP 5000\r\n")
                          : (a +=
                              "m=application 0 " +
                              e.protocol +
                              " webrtc-datachannel\r\n")
                        : "audio" === e.kind
                        ? (a +=
                            "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n")
                        : "video" === e.kind &&
                          (a +=
                            "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),
                      void (a +=
                        "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" +
                        e.mid +
                        "\r\n")
                    );
                  var u;
                  if (e.stream)
                    "audio" === e.kind
                      ? (u = e.stream.getAudioTracks()[0])
                      : "video" === e.kind &&
                        (u = e.stream.getVideoTracks()[0]),
                      u &&
                        t >= 15019 &&
                        "video" === e.kind &&
                        !e.sendEncodingParameters[0].rtx &&
                        (e.sendEncodingParameters[0].rtx = {
                          ssrc: e.sendEncodingParameters[0].ssrc + 1,
                        });
                  var c = o(e.localCapabilities, e.remoteCapabilities);
                  !c.codecs.filter(function (e) {
                    return "rtx" === e.name.toLowerCase();
                  }).length &&
                    e.sendEncodingParameters[0].rtx &&
                    delete e.sendEncodingParameters[0].rtx,
                    (a += i(e, c, "answer", e.stream, r._dtlsRole)),
                    e.rtcpParameters &&
                      e.rtcpParameters.reducedSize &&
                      (a += "a=rtcp-rsize\r\n");
                }
              });
              var c = new e.RTCSessionDescription({ type: "answer", sdp: a });
              return Promise.resolve(c);
            }),
            (f.prototype.addIceCandidate = function (e) {
              var t,
                r = this;
              return e && void 0 === e.sdpMLineIndex && !e.sdpMid
                ? Promise.reject(
                    new TypeError("sdpMLineIndex or sdpMid required")
                  )
                : new Promise(function (i, o) {
                    if (!r._remoteDescription)
                      return o(
                        u(
                          "InvalidStateError",
                          "Can not add ICE candidate without a remote description"
                        )
                      );
                    if (e && "" !== e.candidate) {
                      var a = e.sdpMLineIndex;
                      if (e.sdpMid)
                        for (var c = 0; c < r.transceivers.length; c++)
                          if (r.transceivers[c].mid === e.sdpMid) {
                            a = c;
                            break;
                          }
                      var f = r.transceivers[a];
                      if (!f)
                        return o(
                          u("OperationError", "Can not add ICE candidate")
                        );
                      if (f.rejected) return i();
                      var l =
                        Object.keys(e.candidate).length > 0
                          ? n.parseCandidate(e.candidate)
                          : {};
                      if (
                        "tcp" === l.protocol &&
                        (0 === l.port || 9 === l.port)
                      )
                        return i();
                      if (l.component && 1 !== l.component) return i();
                      if (
                        (0 === a ||
                          (a > 0 &&
                            f.iceTransport !==
                              r.transceivers[0].iceTransport)) &&
                        !s(f.iceTransport, l)
                      )
                        return o(
                          u("OperationError", "Can not add ICE candidate")
                        );
                      var d = e.candidate.trim();
                      0 === d.indexOf("a=") && (d = d.substr(2)),
                        ((t = n.getMediaSections(r._remoteDescription.sdp))[
                          a
                        ] +=
                          "a=" + (l.type ? d : "end-of-candidates") + "\r\n"),
                        (r._remoteDescription.sdp =
                          n.getDescription(r._remoteDescription.sdp) +
                          t.join(""));
                    } else for (var h = 0; h < r.transceivers.length && (r.transceivers[h].rejected || (r.transceivers[h].iceTransport.addRemoteCandidate({}), ((t = n.getMediaSections(r._remoteDescription.sdp))[h] += "a=end-of-candidates\r\n"), (r._remoteDescription.sdp = n.getDescription(r._remoteDescription.sdp) + t.join("")), !r.usingBundle)); h++);
                    i();
                  });
            }),
            (f.prototype.getStats = function (t) {
              if (t && t instanceof e.MediaStreamTrack) {
                var r = null;
                if (
                  (this.transceivers.forEach(function (e) {
                    e.rtpSender && e.rtpSender.track === t
                      ? (r = e.rtpSender)
                      : e.rtpReceiver &&
                        e.rtpReceiver.track === t &&
                        (r = e.rtpReceiver);
                  }),
                  !r)
                )
                  throw u("InvalidAccessError", "Invalid selector.");
                return r.getStats();
              }
              var n = [];
              return (
                this.transceivers.forEach(function (e) {
                  [
                    "rtpSender",
                    "rtpReceiver",
                    "iceGatherer",
                    "iceTransport",
                    "dtlsTransport",
                  ].forEach(function (t) {
                    e[t] && n.push(e[t].getStats());
                  });
                }),
                Promise.all(n).then(function (e) {
                  var t = new Map();
                  return (
                    e.forEach(function (e) {
                      e.forEach(function (e) {
                        t.set(e.id, e);
                      });
                    }),
                    t
                  );
                })
              );
            });
          [
            "RTCRtpSender",
            "RTCRtpReceiver",
            "RTCIceGatherer",
            "RTCIceTransport",
            "RTCDtlsTransport",
          ].forEach(function (t) {
            var r = e[t];
            if (r && r.prototype && r.prototype.getStats) {
              var n = r.prototype.getStats;
              r.prototype.getStats = function () {
                return n.apply(this).then(function (e) {
                  var t = new Map();
                  return (
                    Object.keys(e).forEach(function (r) {
                      var n;
                      (e[r].type =
                        {
                          inboundrtp: "inbound-rtp",
                          outboundrtp: "outbound-rtp",
                          candidatepair: "candidate-pair",
                          localcandidate: "local-candidate",
                          remotecandidate: "remote-candidate",
                        }[(n = e[r]).type] || n.type),
                        t.set(r, e[r]);
                    }),
                    t
                  );
                });
              };
            }
          });
          var l = ["createOffer", "createAnswer"];
          return (
            l.forEach(function (e) {
              var t = f.prototype[e];
              f.prototype[e] = function () {
                var e = arguments;
                return "function" == typeof e[0] || "function" == typeof e[1]
                  ? t.apply(this, [arguments[2]]).then(
                      function (t) {
                        "function" == typeof e[0] && e[0].apply(null, [t]);
                      },
                      function (t) {
                        "function" == typeof e[1] && e[1].apply(null, [t]);
                      }
                    )
                  : t.apply(this, arguments);
              };
            }),
            (l = [
              "setLocalDescription",
              "setRemoteDescription",
              "addIceCandidate",
            ]).forEach(function (e) {
              var t = f.prototype[e];
              f.prototype[e] = function () {
                var e = arguments;
                return "function" == typeof e[1] || "function" == typeof e[2]
                  ? t.apply(this, arguments).then(
                      function () {
                        "function" == typeof e[1] && e[1].apply(null);
                      },
                      function (t) {
                        "function" == typeof e[2] && e[2].apply(null, [t]);
                      }
                    )
                  : t.apply(this, arguments);
              };
            }),
            ["getStats"].forEach(function (e) {
              var t = f.prototype[e];
              f.prototype[e] = function () {
                var e = arguments;
                return "function" == typeof e[1]
                  ? t.apply(this, arguments).then(function () {
                      "function" == typeof e[1] && e[1].apply(null);
                    })
                  : t.apply(this, arguments);
              };
            }),
            f
          );
        };
      },
      { sdp: 10 },
    ],
    10: [
      function (e, t, r) {
        "use strict";
        var n = {
          generateIdentifier: function () {
            return Math.random().toString(36).substr(2, 10);
          },
        };
        (n.localCName = n.generateIdentifier()),
          (n.splitLines = function (e) {
            return e
              .trim()
              .split("\n")
              .map(function (e) {
                return e.trim();
              });
          }),
          (n.splitSections = function (e) {
            return e.split("\nm=").map(function (e, t) {
              return (t > 0 ? "m=" + e : e).trim() + "\r\n";
            });
          }),
          (n.getDescription = function (e) {
            var t = n.splitSections(e);
            return t && t[0];
          }),
          (n.getMediaSections = function (e) {
            var t = n.splitSections(e);
            return t.shift(), t;
          }),
          (n.matchPrefix = function (e, t) {
            return n.splitLines(e).filter(function (e) {
              return 0 === e.indexOf(t);
            });
          }),
          (n.parseCandidate = function (e) {
            for (
              var t,
                r = {
                  foundation: (t =
                    0 === e.indexOf("a=candidate:")
                      ? e.substring(12).split(" ")
                      : e.substring(10).split(" "))[0],
                  component: parseInt(t[1], 10),
                  protocol: t[2].toLowerCase(),
                  priority: parseInt(t[3], 10),
                  ip: t[4],
                  address: t[4],
                  port: parseInt(t[5], 10),
                  type: t[7],
                },
                n = 8;
              n < t.length;
              n += 2
            )
              switch (t[n]) {
                case "raddr":
                  r.relatedAddress = t[n + 1];
                  break;
                case "rport":
                  r.relatedPort = parseInt(t[n + 1], 10);
                  break;
                case "tcptype":
                  r.tcpType = t[n + 1];
                  break;
                case "ufrag":
                  (r.ufrag = t[n + 1]), (r.usernameFragment = t[n + 1]);
                  break;
                default:
                  r[t[n]] = t[n + 1];
              }
            return r;
          }),
          (n.writeCandidate = function (e) {
            var t = [];
            t.push(e.foundation),
              t.push(e.component),
              t.push(e.protocol.toUpperCase()),
              t.push(e.priority),
              t.push(e.address || e.ip),
              t.push(e.port);
            var r = e.type;
            return (
              t.push("typ"),
              t.push(r),
              "host" !== r &&
                e.relatedAddress &&
                e.relatedPort &&
                (t.push("raddr"),
                t.push(e.relatedAddress),
                t.push("rport"),
                t.push(e.relatedPort)),
              e.tcpType &&
                "tcp" === e.protocol.toLowerCase() &&
                (t.push("tcptype"), t.push(e.tcpType)),
              (e.usernameFragment || e.ufrag) &&
                (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)),
              "candidate:" + t.join(" ")
            );
          }),
          (n.parseIceOptions = function (e) {
            return e.substr(14).split(" ");
          }),
          (n.parseRtpMap = function (e) {
            var t = e.substr(9).split(" "),
              r = { payloadType: parseInt(t.shift(), 10) };
            return (
              (t = t[0].split("/")),
              (r.name = t[0]),
              (r.clockRate = parseInt(t[1], 10)),
              (r.channels = 3 === t.length ? parseInt(t[2], 10) : 1),
              (r.numChannels = r.channels),
              r
            );
          }),
          (n.writeRtpMap = function (e) {
            var t = e.payloadType;
            void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
            var r = e.channels || e.numChannels || 1;
            return (
              "a=rtpmap:" +
              t +
              " " +
              e.name +
              "/" +
              e.clockRate +
              (1 !== r ? "/" + r : "") +
              "\r\n"
            );
          }),
          (n.parseExtmap = function (e) {
            var t = e.substr(9).split(" ");
            return {
              id: parseInt(t[0], 10),
              direction:
                t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
              uri: t[1],
            };
          }),
          (n.writeExtmap = function (e) {
            return (
              "a=extmap:" +
              (e.id || e.preferredId) +
              (e.direction && "sendrecv" !== e.direction
                ? "/" + e.direction
                : "") +
              " " +
              e.uri +
              "\r\n"
            );
          }),
          (n.parseFmtp = function (e) {
            for (
              var t, r = {}, n = e.substr(e.indexOf(" ") + 1).split(";"), i = 0;
              i < n.length;
              i++
            )
              r[(t = n[i].trim().split("="))[0].trim()] = t[1];
            return r;
          }),
          (n.writeFmtp = function (e) {
            var t = "",
              r = e.payloadType;
            if (
              (void 0 !== e.preferredPayloadType &&
                (r = e.preferredPayloadType),
              e.parameters && Object.keys(e.parameters).length)
            ) {
              var n = [];
              Object.keys(e.parameters).forEach(function (t) {
                e.parameters[t] ? n.push(t + "=" + e.parameters[t]) : n.push(t);
              }),
                (t += "a=fmtp:" + r + " " + n.join(";") + "\r\n");
            }
            return t;
          }),
          (n.parseRtcpFb = function (e) {
            var t = e.substr(e.indexOf(" ") + 1).split(" ");
            return { type: t.shift(), parameter: t.join(" ") };
          }),
          (n.writeRtcpFb = function (e) {
            var t = "",
              r = e.payloadType;
            return (
              void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType),
              e.rtcpFeedback &&
                e.rtcpFeedback.length &&
                e.rtcpFeedback.forEach(function (e) {
                  t +=
                    "a=rtcp-fb:" +
                    r +
                    " " +
                    e.type +
                    (e.parameter && e.parameter.length
                      ? " " + e.parameter
                      : "") +
                    "\r\n";
                }),
              t
            );
          }),
          (n.parseSsrcMedia = function (e) {
            var t = e.indexOf(" "),
              r = { ssrc: parseInt(e.substr(7, t - 7), 10) },
              n = e.indexOf(":", t);
            return (
              n > -1
                ? ((r.attribute = e.substr(t + 1, n - t - 1)),
                  (r.value = e.substr(n + 1)))
                : (r.attribute = e.substr(t + 1)),
              r
            );
          }),
          (n.parseSsrcGroup = function (e) {
            var t = e.substr(13).split(" ");
            return {
              semantics: t.shift(),
              ssrcs: t.map(function (e) {
                return parseInt(e, 10);
              }),
            };
          }),
          (n.getMid = function (e) {
            var t = n.matchPrefix(e, "a=mid:")[0];
            if (t) return t.substr(6);
          }),
          (n.parseFingerprint = function (e) {
            var t = e.substr(14).split(" ");
            return { algorithm: t[0].toLowerCase(), value: t[1] };
          }),
          (n.getDtlsParameters = function (e, t) {
            return {
              role: "auto",
              fingerprints: n
                .matchPrefix(e + t, "a=fingerprint:")
                .map(n.parseFingerprint),
            };
          }),
          (n.writeDtlsParameters = function (e, t) {
            var r = "a=setup:" + t + "\r\n";
            return (
              e.fingerprints.forEach(function (e) {
                r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
              }),
              r
            );
          }),
          (n.getIceParameters = function (e, t) {
            var r = n.splitLines(e);
            return {
              usernameFragment: (r = r.concat(n.splitLines(t)))
                .filter(function (e) {
                  return 0 === e.indexOf("a=ice-ufrag:");
                })[0]
                .substr(12),
              password: r
                .filter(function (e) {
                  return 0 === e.indexOf("a=ice-pwd:");
                })[0]
                .substr(10),
            };
          }),
          (n.writeIceParameters = function (e) {
            return (
              "a=ice-ufrag:" +
              e.usernameFragment +
              "\r\na=ice-pwd:" +
              e.password +
              "\r\n"
            );
          }),
          (n.parseRtpParameters = function (e) {
            for (
              var t = {
                  codecs: [],
                  headerExtensions: [],
                  fecMechanisms: [],
                  rtcp: [],
                },
                r = n.splitLines(e)[0].split(" "),
                i = 3;
              i < r.length;
              i++
            ) {
              var o = r[i],
                a = n.matchPrefix(e, "a=rtpmap:" + o + " ")[0];
              if (a) {
                var s = n.parseRtpMap(a),
                  u = n.matchPrefix(e, "a=fmtp:" + o + " ");
                switch (
                  ((s.parameters = u.length ? n.parseFmtp(u[0]) : {}),
                  (s.rtcpFeedback = n
                    .matchPrefix(e, "a=rtcp-fb:" + o + " ")
                    .map(n.parseRtcpFb)),
                  t.codecs.push(s),
                  s.name.toUpperCase())
                ) {
                  case "RED":
                  case "ULPFEC":
                    t.fecMechanisms.push(s.name.toUpperCase());
                }
              }
            }
            return (
              n.matchPrefix(e, "a=extmap:").forEach(function (e) {
                t.headerExtensions.push(n.parseExtmap(e));
              }),
              t
            );
          }),
          (n.writeRtpDescription = function (e, t) {
            var r = "";
            (r += "m=" + e + " "),
              (r += t.codecs.length > 0 ? "9" : "0"),
              (r += " UDP/TLS/RTP/SAVPF "),
              (r +=
                t.codecs
                  .map(function (e) {
                    return void 0 !== e.preferredPayloadType
                      ? e.preferredPayloadType
                      : e.payloadType;
                  })
                  .join(" ") + "\r\n"),
              (r += "c=IN IP4 0.0.0.0\r\n"),
              (r += "a=rtcp:9 IN IP4 0.0.0.0\r\n"),
              t.codecs.forEach(function (e) {
                (r += n.writeRtpMap(e)),
                  (r += n.writeFmtp(e)),
                  (r += n.writeRtcpFb(e));
              });
            var i = 0;
            return (
              t.codecs.forEach(function (e) {
                e.maxptime > i && (i = e.maxptime);
              }),
              i > 0 && (r += "a=maxptime:" + i + "\r\n"),
              (r += "a=rtcp-mux\r\n"),
              t.headerExtensions &&
                t.headerExtensions.forEach(function (e) {
                  r += n.writeExtmap(e);
                }),
              r
            );
          }),
          (n.parseRtpEncodingParameters = function (e) {
            var t,
              r = [],
              i = n.parseRtpParameters(e),
              o = -1 !== i.fecMechanisms.indexOf("RED"),
              a = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
              s = n
                .matchPrefix(e, "a=ssrc:")
                .map(function (e) {
                  return n.parseSsrcMedia(e);
                })
                .filter(function (e) {
                  return "cname" === e.attribute;
                }),
              u = s.length > 0 && s[0].ssrc,
              c = n.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
                return e
                  .substr(17)
                  .split(" ")
                  .map(function (e) {
                    return parseInt(e, 10);
                  });
              });
            c.length > 0 && c[0].length > 1 && c[0][0] === u && (t = c[0][1]),
              i.codecs.forEach(function (e) {
                if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                  var n = {
                    ssrc: u,
                    codecPayloadType: parseInt(e.parameters.apt, 10),
                  };
                  u && t && (n.rtx = { ssrc: t }),
                    r.push(n),
                    o &&
                      (((n = JSON.parse(JSON.stringify(n))).fec = {
                        ssrc: u,
                        mechanism: a ? "red+ulpfec" : "red",
                      }),
                      r.push(n));
                }
              }),
              0 === r.length && u && r.push({ ssrc: u });
            var f = n.matchPrefix(e, "b=");
            return (
              f.length &&
                ((f =
                  0 === f[0].indexOf("b=TIAS:")
                    ? parseInt(f[0].substr(7), 10)
                    : 0 === f[0].indexOf("b=AS:")
                    ? 1e3 * parseInt(f[0].substr(5), 10) * 0.95 - 16e3
                    : void 0),
                r.forEach(function (e) {
                  e.maxBitrate = f;
                })),
              r
            );
          }),
          (n.parseRtcpParameters = function (e) {
            var t = {},
              r = n
                .matchPrefix(e, "a=ssrc:")
                .map(function (e) {
                  return n.parseSsrcMedia(e);
                })
                .filter(function (e) {
                  return "cname" === e.attribute;
                })[0];
            r && ((t.cname = r.value), (t.ssrc = r.ssrc));
            var i = n.matchPrefix(e, "a=rtcp-rsize");
            (t.reducedSize = i.length > 0), (t.compound = 0 === i.length);
            var o = n.matchPrefix(e, "a=rtcp-mux");
            return (t.mux = o.length > 0), t;
          }),
          (n.parseMsid = function (e) {
            var t,
              r = n.matchPrefix(e, "a=msid:");
            if (1 === r.length)
              return {
                stream: (t = r[0].substr(7).split(" "))[0],
                track: t[1],
              };
            var i = n
              .matchPrefix(e, "a=ssrc:")
              .map(function (e) {
                return n.parseSsrcMedia(e);
              })
              .filter(function (e) {
                return "msid" === e.attribute;
              });
            return i.length > 0
              ? { stream: (t = i[0].value.split(" "))[0], track: t[1] }
              : void 0;
          }),
          (n.generateSessionId = function () {
            return Math.random().toString().substr(2, 21);
          }),
          (n.writeSessionBoilerplate = function (e, t, r) {
            var i = void 0 !== t ? t : 2;
            return (
              "v=0\r\no=" +
              (r || "thisisadapterortc") +
              " " +
              (e || n.generateSessionId()) +
              " " +
              i +
              " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
            );
          }),
          (n.writeMediaSection = function (e, t, r, i) {
            var o = n.writeRtpDescription(e.kind, t);
            if (
              ((o += n.writeIceParameters(e.iceGatherer.getLocalParameters())),
              (o += n.writeDtlsParameters(
                e.dtlsTransport.getLocalParameters(),
                "offer" === r ? "actpass" : "active"
              )),
              (o += "a=mid:" + e.mid + "\r\n"),
              e.direction
                ? (o += "a=" + e.direction + "\r\n")
                : e.rtpSender && e.rtpReceiver
                ? (o += "a=sendrecv\r\n")
                : e.rtpSender
                ? (o += "a=sendonly\r\n")
                : e.rtpReceiver
                ? (o += "a=recvonly\r\n")
                : (o += "a=inactive\r\n"),
              e.rtpSender)
            ) {
              var a = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
              (o += "a=" + a),
                (o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + a),
                e.sendEncodingParameters[0].rtx &&
                  ((o +=
                    "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + a),
                  (o +=
                    "a=ssrc-group:FID " +
                    e.sendEncodingParameters[0].ssrc +
                    " " +
                    e.sendEncodingParameters[0].rtx.ssrc +
                    "\r\n"));
            }
            return (
              (o +=
                "a=ssrc:" +
                e.sendEncodingParameters[0].ssrc +
                " cname:" +
                n.localCName +
                "\r\n"),
              e.rtpSender &&
                e.sendEncodingParameters[0].rtx &&
                (o +=
                  "a=ssrc:" +
                  e.sendEncodingParameters[0].rtx.ssrc +
                  " cname:" +
                  n.localCName +
                  "\r\n"),
              o
            );
          }),
          (n.getDirection = function (e, t) {
            for (var r = n.splitLines(e), i = 0; i < r.length; i++)
              switch (r[i]) {
                case "a=sendrecv":
                case "a=sendonly":
                case "a=recvonly":
                case "a=inactive":
                  return r[i].substr(2);
              }
            return t ? n.getDirection(t) : "sendrecv";
          }),
          (n.getKind = function (e) {
            return n.splitLines(e)[0].split(" ")[0].substr(2);
          }),
          (n.isRejected = function (e) {
            return "0" === e.split(" ", 2)[1];
          }),
          (n.parseMLine = function (e) {
            var t = n.splitLines(e)[0].substr(2).split(" ");
            return {
              kind: t[0],
              port: parseInt(t[1], 10),
              protocol: t[2],
              fmt: t.slice(3).join(" "),
            };
          }),
          (n.parseOLine = function (e) {
            var t = n.matchPrefix(e, "o=")[0].substr(2).split(" ");
            return {
              username: t[0],
              sessionId: t[1],
              sessionVersion: parseInt(t[2], 10),
              netType: t[3],
              addressType: t[4],
              address: t[5],
            };
          }),
          (n.isValidSDP = function (e) {
            if ("string" != typeof e || 0 === e.length) return !1;
            for (var t = n.splitLines(e), r = 0; r < t.length; r++)
              if (t[r].length < 2 || "=" !== t[r].charAt(1)) return !1;
            return !0;
          }),
          "object" == typeof t && (t.exports = n);
      },
      {},
    ],
    12: [
      function (e, t, r) {
        t.exports = e("./lib/visibility.timers.js");
      },
      { "./lib/visibility.timers.js": 14 },
    ],
    14: [
      function (e, t, r) {
        !(function (r) {
          var n = -1,
            i = function (e) {
              return (
                (e.every = function (t, r, i) {
                  e._time(), i || ((i = r), (r = null));
                  var o = (n += 1);
                  return (
                    (e._timers[o] = { visible: t, hidden: r, callback: i }),
                    e._run(o, !1),
                    e.isSupported() && e._listen(),
                    o
                  );
                }),
                (e.stop = function (t) {
                  return (
                    !!e._timers[t] && (e._stop(t), delete e._timers[t], !0)
                  );
                }),
                (e._timers = {}),
                (e._time = function () {
                  e._timed ||
                    ((e._timed = !0),
                    (e._wasHidden = e.hidden()),
                    e.change(function () {
                      e._stopRun(), (e._wasHidden = e.hidden());
                    }));
                }),
                (e._run = function (t, n) {
                  var i,
                    o = e._timers[t];
                  if (e.hidden()) {
                    if (null === o.hidden) return;
                    i = o.hidden;
                  } else i = o.visible;
                  var a = function () {
                    (o.last = new Date()), o.callback.call(r);
                  };
                  if (n) {
                    var s = new Date() - o.last;
                    i > s
                      ? (o.delay = setTimeout(function () {
                          (o.id = setInterval(a, i)), a();
                        }, i - s))
                      : ((o.id = setInterval(a, i)), a());
                  } else o.id = setInterval(a, i);
                }),
                (e._stop = function (t) {
                  var r = e._timers[t];
                  clearInterval(r.id),
                    clearTimeout(r.delay),
                    delete r.id,
                    delete r.delay;
                }),
                (e._stopRun = function (t) {
                  var r = e.hidden(),
                    n = e._wasHidden;
                  if ((r && !n) || (!r && n))
                    for (var i in e._timers) e._stop(i), e._run(i, !r);
                }),
                e
              );
            };
          void 0 !== t && t.exports
            ? (t.exports = i(e("./visibility.core")))
            : i(r.Visibility || e("./visibility.core"));
        })(window);
      },
      { "./visibility.core": 13 },
    ],
    13: [
      function (e, t, r) {
        var n, i, o;
        (n = this),
          (i = -1),
          (o = {
            onVisible: function (e) {
              var t = o.isSupported();
              if (!t || !o.hidden()) return e(), t;
              var r = o.change(function (t, n) {
                o.hidden() || (o.unbind(r), e());
              });
              return r;
            },
            change: function (e) {
              if (!o.isSupported()) return !1;
              var t = (i += 1);
              return (o._callbacks[t] = e), o._listen(), t;
            },
            unbind: function (e) {
              delete o._callbacks[e];
            },
            afterPrerendering: function (e) {
              var t = o.isSupported();
              if (!t || "prerender" != o.state()) return e(), t;
              var r = o.change(function (t, n) {
                "prerender" != n && (o.unbind(r), e());
              });
              return r;
            },
            hidden: function () {
              return !(!o._doc.hidden && !o._doc.webkitHidden);
            },
            state: function () {
              return (
                o._doc.visibilityState ||
                o._doc.webkitVisibilityState ||
                "visible"
              );
            },
            isSupported: function () {
              return !(
                !o._doc.visibilityState && !o._doc.webkitVisibilityState
              );
            },
            _doc: document || {},
            _callbacks: {},
            _change: function (e) {
              var t = o.state();
              for (var r in o._callbacks) o._callbacks[r].call(o._doc, e, t);
            },
            _listen: function () {
              if (!o._init) {
                var e = "visibilitychange";
                o._doc.webkitVisibilityState && (e = "webkit" + e);
                var t = function () {
                  o._change.apply(o, arguments);
                };
                o._doc.addEventListener
                  ? o._doc.addEventListener(e, t)
                  : o._doc.attachEvent(e, t),
                  (o._init = !0);
              }
            },
          }),
          void 0 !== t && t.exports ? (t.exports = o) : (n.Visibility = o);
      },
      {},
    ],
    15: [
      function (e, t, r) {
        (function (r) {
          "use strict";
          var n = e("./adapter_factory.js");
          t.exports = n({ window: r.window });
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { "./adapter_factory.js": 16 },
    ],
    16: [
      function (e, t, r) {
        "use strict";
        var n = e("./utils");
        t.exports = function (t, r) {
          var i = t && t.window,
            o = {
              shimChrome: !0,
              shimFirefox: !0,
              shimEdge: !0,
              shimSafari: !0,
            };
          for (var a in r) hasOwnProperty.call(r, a) && (o[a] = r[a]);
          var s = n.log,
            u = n.detectBrowser(i),
            c = e("./chrome/chrome_shim") || null,
            f = e("./edge/edge_shim") || null,
            l = e("./firefox/firefox_shim") || null,
            d = e("./safari/safari_shim") || null,
            h = e("./common_shim") || null,
            p = {
              browserDetails: u,
              commonShim: h,
              extractVersion: n.extractVersion,
              disableLog: n.disableLog,
              disableWarnings: n.disableWarnings,
            };
          switch (u.browser) {
            case "chrome":
              if (!c || !c.shimPeerConnection || !o.shimChrome)
                return (
                  s("Chrome shim is not included in this adapter release."), p
                );
              s("adapter.js shimming chrome."),
                (p.browserShim = c),
                h.shimCreateObjectURL(i),
                c.shimGetUserMedia(i),
                c.shimMediaStream(i),
                c.shimSourceObject(i),
                c.shimPeerConnection(i),
                c.shimOnTrack(i),
                c.shimAddTrackRemoveTrack(i),
                c.shimGetSendersWithDtmf(i),
                c.shimSenderReceiverGetStats(i),
                c.fixNegotiationNeeded(i),
                h.shimRTCIceCandidate(i),
                h.shimMaxMessageSize(i),
                h.shimSendThrowTypeError(i);
              break;
            case "firefox":
              if (!l || !l.shimPeerConnection || !o.shimFirefox)
                return (
                  s("Firefox shim is not included in this adapter release."), p
                );
              s("adapter.js shimming firefox."),
                (p.browserShim = l),
                h.shimCreateObjectURL(i),
                l.shimGetUserMedia(i),
                l.shimSourceObject(i),
                l.shimPeerConnection(i),
                l.shimOnTrack(i),
                l.shimRemoveStream(i),
                l.shimSenderGetStats(i),
                l.shimReceiverGetStats(i),
                l.shimRTCDataChannel(i),
                h.shimRTCIceCandidate(i),
                h.shimMaxMessageSize(i),
                h.shimSendThrowTypeError(i);
              break;
            case "edge":
              if (!f || !f.shimPeerConnection || !o.shimEdge)
                return (
                  s("MS edge shim is not included in this adapter release."), p
                );
              s("adapter.js shimming edge."),
                (p.browserShim = f),
                h.shimCreateObjectURL(i),
                f.shimGetUserMedia(i),
                f.shimPeerConnection(i),
                f.shimReplaceTrack(i),
                h.shimMaxMessageSize(i),
                h.shimSendThrowTypeError(i);
              break;
            case "safari":
              if (!d || !o.shimSafari)
                return (
                  s("Safari shim is not included in this adapter release."), p
                );
              s("adapter.js shimming safari."),
                (p.browserShim = d),
                h.shimCreateObjectURL(i),
                d.shimRTCIceServerUrls(i),
                d.shimCreateOfferLegacy(i),
                d.shimCallbacksAPI(i),
                d.shimLocalStreamsAPI(i),
                d.shimRemoteStreamsAPI(i),
                d.shimTrackEventTransceiver(i),
                d.shimGetUserMedia(i),
                h.shimRTCIceCandidate(i),
                h.shimMaxMessageSize(i),
                h.shimSendThrowTypeError(i);
              break;
            default:
              s("Unsupported browser!");
          }
          return p;
        };
      },
      {
        "./chrome/chrome_shim": 17,
        "./common_shim": 19,
        "./edge/edge_shim": 20,
        "./firefox/firefox_shim": 23,
        "./safari/safari_shim": 25,
        "./utils": 26,
      },
    ],
    26: [
      function (e, t, r) {
        "use strict";
        var n = !0,
          i = !0;
        function o(e, t, r) {
          var n = e.match(t);
          return n && n.length >= r && parseInt(n[r], 10);
        }
        t.exports = {
          extractVersion: o,
          wrapPeerConnectionEvent: function (e, t, r) {
            if (e.RTCPeerConnection) {
              var n = e.RTCPeerConnection.prototype,
                i = n.addEventListener;
              n.addEventListener = function (e, n) {
                if (e !== t) return i.apply(this, arguments);
                var o = function (e) {
                  var t = r(e);
                  t && n(t);
                };
                return (
                  (this._eventMap = this._eventMap || {}),
                  (this._eventMap[n] = o),
                  i.apply(this, [e, o])
                );
              };
              var o = n.removeEventListener;
              (n.removeEventListener = function (e, r) {
                if (e !== t || !this._eventMap || !this._eventMap[r])
                  return o.apply(this, arguments);
                var n = this._eventMap[r];
                return delete this._eventMap[r], o.apply(this, [e, n]);
              }),
                Object.defineProperty(n, "on" + t, {
                  get: function () {
                    return this["_on" + t];
                  },
                  set: function (e) {
                    this["_on" + t] &&
                      (this.removeEventListener(t, this["_on" + t]),
                      delete this["_on" + t]),
                      e && this.addEventListener(t, (this["_on" + t] = e));
                  },
                  enumerable: !0,
                  configurable: !0,
                });
            }
          },
          disableLog: function (e) {
            return "boolean" != typeof e
              ? new Error(
                  "Argument type: " + typeof e + ". Please use a boolean."
                )
              : ((n = e),
                e
                  ? "adapter.js logging disabled"
                  : "adapter.js logging enabled");
          },
          disableWarnings: function (e) {
            return "boolean" != typeof e
              ? new Error(
                  "Argument type: " + typeof e + ". Please use a boolean."
                )
              : ((i = !e),
                "adapter.js deprecation warnings " +
                  (e ? "disabled" : "enabled"));
          },
          log: function () {
            if ("object" == typeof window) {
              if (n) return;
              "undefined" != typeof console &&
                "function" == typeof console.log &&
                console.log.apply(console, arguments);
            }
          },
          deprecated: function (e, t) {
            i &&
              console.warn(e + " is deprecated, please use " + t + " instead.");
          },
          detectBrowser: function (e) {
            var t = e && e.navigator,
              r = { browser: null, version: null };
            if (void 0 === e || !e.navigator)
              return (r.browser = "Not a browser."), r;
            if (t.mozGetUserMedia)
              (r.browser = "firefox"),
                (r.version = o(t.userAgent, /Firefox\/(\d+)\./, 1));
            else if (t.webkitGetUserMedia)
              (r.browser = "chrome"),
                (r.version = o(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
            else if (t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/))
              (r.browser = "edge"),
                (r.version = o(t.userAgent, /Edge\/(\d+).(\d+)$/, 2));
            else {
              if (
                !e.RTCPeerConnection ||
                !t.userAgent.match(/AppleWebKit\/(\d+)\./)
              )
                return (r.browser = "Not a supported browser."), r;
              (r.browser = "safari"),
                (r.version = o(t.userAgent, /AppleWebKit\/(\d+)\./, 1));
            }
            return r;
          },
        };
      },
      {},
    ],
    25: [
      function (e, t, r) {
        "use strict";
        var n = e("../utils");
        t.exports = {
          shimLocalStreamsAPI: function (e) {
            if ("object" == typeof e && e.RTCPeerConnection) {
              if (
                ("getLocalStreams" in e.RTCPeerConnection.prototype ||
                  (e.RTCPeerConnection.prototype.getLocalStreams = function () {
                    return (
                      this._localStreams || (this._localStreams = []),
                      this._localStreams
                    );
                  }),
                "getStreamById" in e.RTCPeerConnection.prototype ||
                  (e.RTCPeerConnection.prototype.getStreamById = function (e) {
                    var t = null;
                    return (
                      this._localStreams &&
                        this._localStreams.forEach(function (r) {
                          r.id === e && (t = r);
                        }),
                      this._remoteStreams &&
                        this._remoteStreams.forEach(function (r) {
                          r.id === e && (t = r);
                        }),
                      t
                    );
                  }),
                !("addStream" in e.RTCPeerConnection.prototype))
              ) {
                var t = e.RTCPeerConnection.prototype.addTrack;
                (e.RTCPeerConnection.prototype.addStream = function (e) {
                  this._localStreams || (this._localStreams = []),
                    -1 === this._localStreams.indexOf(e) &&
                      this._localStreams.push(e);
                  var r = this;
                  e.getTracks().forEach(function (n) {
                    t.call(r, n, e);
                  });
                }),
                  (e.RTCPeerConnection.prototype.addTrack = function (e, r) {
                    return (
                      r &&
                        (this._localStreams
                          ? -1 === this._localStreams.indexOf(r) &&
                            this._localStreams.push(r)
                          : (this._localStreams = [r])),
                      t.call(this, e, r)
                    );
                  });
              }
              "removeStream" in e.RTCPeerConnection.prototype ||
                (e.RTCPeerConnection.prototype.removeStream = function (e) {
                  this._localStreams || (this._localStreams = []);
                  var t = this._localStreams.indexOf(e);
                  if (-1 !== t) {
                    this._localStreams.splice(t, 1);
                    var r = this,
                      n = e.getTracks();
                    this.getSenders().forEach(function (e) {
                      -1 !== n.indexOf(e.track) && r.removeTrack(e);
                    });
                  }
                });
            }
          },
          shimRemoteStreamsAPI: function (e) {
            if (
              "object" == typeof e &&
              e.RTCPeerConnection &&
              ("getRemoteStreams" in e.RTCPeerConnection.prototype ||
                (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
                  return this._remoteStreams ? this._remoteStreams : [];
                }),
              !("onaddstream" in e.RTCPeerConnection.prototype))
            ) {
              Object.defineProperty(
                e.RTCPeerConnection.prototype,
                "onaddstream",
                {
                  get: function () {
                    return this._onaddstream;
                  },
                  set: function (e) {
                    this._onaddstream &&
                      this.removeEventListener("addstream", this._onaddstream),
                      this.addEventListener(
                        "addstream",
                        (this._onaddstream = e)
                      );
                  },
                }
              );
              var t = e.RTCPeerConnection.prototype.setRemoteDescription;
              e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                var e = this;
                return (
                  this._onaddstreampoly ||
                    this.addEventListener(
                      "track",
                      (this._onaddstreampoly = function (t) {
                        t.streams.forEach(function (t) {
                          if (
                            (e._remoteStreams || (e._remoteStreams = []),
                            !(e._remoteStreams.indexOf(t) >= 0))
                          ) {
                            e._remoteStreams.push(t);
                            var r = new Event("addstream");
                            (r.stream = t), e.dispatchEvent(r);
                          }
                        });
                      })
                    ),
                  t.apply(e, arguments)
                );
              };
            }
          },
          shimCallbacksAPI: function (e) {
            if ("object" == typeof e && e.RTCPeerConnection) {
              var t = e.RTCPeerConnection.prototype,
                r = t.createOffer,
                n = t.createAnswer,
                i = t.setLocalDescription,
                o = t.setRemoteDescription,
                a = t.addIceCandidate;
              (t.createOffer = function (e, t) {
                var n = arguments.length >= 2 ? arguments[2] : arguments[0],
                  i = r.apply(this, [n]);
                return t ? (i.then(e, t), Promise.resolve()) : i;
              }),
                (t.createAnswer = function (e, t) {
                  var r = arguments.length >= 2 ? arguments[2] : arguments[0],
                    i = n.apply(this, [r]);
                  return t ? (i.then(e, t), Promise.resolve()) : i;
                });
              var s = function (e, t, r) {
                var n = i.apply(this, [e]);
                return r ? (n.then(t, r), Promise.resolve()) : n;
              };
              (t.setLocalDescription = s),
                (s = function (e, t, r) {
                  var n = o.apply(this, [e]);
                  return r ? (n.then(t, r), Promise.resolve()) : n;
                }),
                (t.setRemoteDescription = s),
                (s = function (e, t, r) {
                  var n = a.apply(this, [e]);
                  return r ? (n.then(t, r), Promise.resolve()) : n;
                }),
                (t.addIceCandidate = s);
            }
          },
          shimGetUserMedia: function (e) {
            var t = e && e.navigator;
            t.getUserMedia ||
              (t.webkitGetUserMedia
                ? (t.getUserMedia = t.webkitGetUserMedia.bind(t))
                : t.mediaDevices &&
                  t.mediaDevices.getUserMedia &&
                  (t.getUserMedia = function (e, r, n) {
                    t.mediaDevices.getUserMedia(e).then(r, n);
                  }.bind(t)));
          },
          shimRTCIceServerUrls: function (e) {
            var t = e.RTCPeerConnection;
            (e.RTCPeerConnection = function (e, r) {
              if (e && e.iceServers) {
                for (var i = [], o = 0; o < e.iceServers.length; o++) {
                  var a = e.iceServers[o];
                  !a.hasOwnProperty("urls") && a.hasOwnProperty("url")
                    ? (n.deprecated("RTCIceServer.url", "RTCIceServer.urls"),
                      ((a = JSON.parse(JSON.stringify(a))).urls = a.url),
                      delete a.url,
                      i.push(a))
                    : i.push(e.iceServers[o]);
                }
                e.iceServers = i;
              }
              return new t(e, r);
            }),
              (e.RTCPeerConnection.prototype = t.prototype),
              "generateCertificate" in e.RTCPeerConnection &&
                Object.defineProperty(
                  e.RTCPeerConnection,
                  "generateCertificate",
                  {
                    get: function () {
                      return t.generateCertificate;
                    },
                  }
                );
          },
          shimTrackEventTransceiver: function (e) {
            "object" == typeof e &&
              e.RTCPeerConnection &&
              "receiver" in e.RTCTrackEvent.prototype &&
              !e.RTCTransceiver &&
              Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                get: function () {
                  return { receiver: this.receiver };
                },
              });
          },
          shimCreateOfferLegacy: function (e) {
            var t = e.RTCPeerConnection.prototype.createOffer;
            e.RTCPeerConnection.prototype.createOffer = function (e) {
              var r = this;
              if (e) {
                void 0 !== e.offerToReceiveAudio &&
                  (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                var n = r.getTransceivers().find(function (e) {
                  return e.sender.track && "audio" === e.sender.track.kind;
                });
                !1 === e.offerToReceiveAudio && n
                  ? "sendrecv" === n.direction
                    ? n.setDirection
                      ? n.setDirection("sendonly")
                      : (n.direction = "sendonly")
                    : "recvonly" === n.direction &&
                      (n.setDirection
                        ? n.setDirection("inactive")
                        : (n.direction = "inactive"))
                  : !0 !== e.offerToReceiveAudio ||
                    n ||
                    r.addTransceiver("audio"),
                  void 0 !== e.offerToReceiveVideo &&
                    (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                var i = r.getTransceivers().find(function (e) {
                  return e.sender.track && "video" === e.sender.track.kind;
                });
                !1 === e.offerToReceiveVideo && i
                  ? "sendrecv" === i.direction
                    ? i.setDirection("sendonly")
                    : "recvonly" === i.direction && i.setDirection("inactive")
                  : !0 !== e.offerToReceiveVideo ||
                    i ||
                    r.addTransceiver("video");
              }
              return t.apply(r, arguments);
            };
          },
        };
      },
      { "../utils": 26 },
    ],
    17: [
      function (e, t, r) {
        "use strict";
        var n = e("../utils.js"),
          i = n.log;
        function o(e, t, r) {
          var n = r ? "outbound-rtp" : "inbound-rtp",
            i = new Map();
          if (null === t) return i;
          var o = [];
          return (
            e.forEach(function (e) {
              "track" === e.type && e.trackIdentifier === t.id && o.push(e);
            }),
            o.forEach(function (t) {
              e.forEach(function (r) {
                r.type === n &&
                  r.trackId === t.id &&
                  (function e(t, r, n) {
                    r &&
                      !n.has(r.id) &&
                      (n.set(r.id, r),
                      Object.keys(r).forEach(function (i) {
                        i.endsWith("Id")
                          ? e(t, t.get(r[i]), n)
                          : i.endsWith("Ids") &&
                            r[i].forEach(function (r) {
                              e(t, t.get(r), n);
                            });
                      }));
                  })(e, r, i);
              });
            }),
            i
          );
        }
        t.exports = {
          shimGetUserMedia: e("./getusermedia"),
          shimMediaStream: function (e) {
            e.MediaStream = e.MediaStream || e.webkitMediaStream;
          },
          shimOnTrack: function (e) {
            if (
              "object" != typeof e ||
              !e.RTCPeerConnection ||
              "ontrack" in e.RTCPeerConnection.prototype
            )
              n.wrapPeerConnectionEvent(e, "track", function (e) {
                return (
                  e.transceiver ||
                    Object.defineProperty(e, "transceiver", {
                      value: { receiver: e.receiver },
                    }),
                  e
                );
              });
            else {
              Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                get: function () {
                  return this._ontrack;
                },
                set: function (e) {
                  this._ontrack &&
                    this.removeEventListener("track", this._ontrack),
                    this.addEventListener("track", (this._ontrack = e));
                },
                enumerable: !0,
                configurable: !0,
              });
              var t = e.RTCPeerConnection.prototype.setRemoteDescription;
              e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                var r = this;
                return (
                  r._ontrackpoly ||
                    ((r._ontrackpoly = function (t) {
                      t.stream.addEventListener("addtrack", function (n) {
                        var i;
                        i = e.RTCPeerConnection.prototype.getReceivers
                          ? r.getReceivers().find(function (e) {
                              return e.track && e.track.id === n.track.id;
                            })
                          : { track: n.track };
                        var o = new Event("track");
                        (o.track = n.track),
                          (o.receiver = i),
                          (o.transceiver = { receiver: i }),
                          (o.streams = [t.stream]),
                          r.dispatchEvent(o);
                      }),
                        t.stream.getTracks().forEach(function (n) {
                          var i;
                          i = e.RTCPeerConnection.prototype.getReceivers
                            ? r.getReceivers().find(function (e) {
                                return e.track && e.track.id === n.id;
                              })
                            : { track: n };
                          var o = new Event("track");
                          (o.track = n),
                            (o.receiver = i),
                            (o.transceiver = { receiver: i }),
                            (o.streams = [t.stream]),
                            r.dispatchEvent(o);
                        });
                    }),
                    r.addEventListener("addstream", r._ontrackpoly)),
                  t.apply(r, arguments)
                );
              };
            }
          },
          shimGetSendersWithDtmf: function (e) {
            if (
              "object" == typeof e &&
              e.RTCPeerConnection &&
              !("getSenders" in e.RTCPeerConnection.prototype) &&
              "createDTMFSender" in e.RTCPeerConnection.prototype
            ) {
              var t = function (e, t) {
                return {
                  track: t,
                  get dtmf() {
                    return (
                      void 0 === this._dtmf &&
                        ("audio" === t.kind
                          ? (this._dtmf = e.createDTMFSender(t))
                          : (this._dtmf = null)),
                      this._dtmf
                    );
                  },
                  _pc: e,
                };
              };
              if (!e.RTCPeerConnection.prototype.getSenders) {
                e.RTCPeerConnection.prototype.getSenders = function () {
                  return (
                    (this._senders = this._senders || []), this._senders.slice()
                  );
                };
                var r = e.RTCPeerConnection.prototype.addTrack;
                e.RTCPeerConnection.prototype.addTrack = function (e, n) {
                  var i = r.apply(this, arguments);
                  return i || ((i = t(this, e)), this._senders.push(i)), i;
                };
                var n = e.RTCPeerConnection.prototype.removeTrack;
                e.RTCPeerConnection.prototype.removeTrack = function (e) {
                  n.apply(this, arguments);
                  var t = this._senders.indexOf(e);
                  -1 !== t && this._senders.splice(t, 1);
                };
              }
              var i = e.RTCPeerConnection.prototype.addStream;
              e.RTCPeerConnection.prototype.addStream = function (e) {
                var r = this;
                (r._senders = r._senders || []),
                  i.apply(r, [e]),
                  e.getTracks().forEach(function (e) {
                    r._senders.push(t(r, e));
                  });
              };
              var o = e.RTCPeerConnection.prototype.removeStream;
              e.RTCPeerConnection.prototype.removeStream = function (e) {
                var t = this;
                (t._senders = t._senders || []),
                  o.apply(t, [e]),
                  e.getTracks().forEach(function (e) {
                    var r = t._senders.find(function (t) {
                      return t.track === e;
                    });
                    r && t._senders.splice(t._senders.indexOf(r), 1);
                  });
              };
            } else if (
              "object" == typeof e &&
              e.RTCPeerConnection &&
              "getSenders" in e.RTCPeerConnection.prototype &&
              "createDTMFSender" in e.RTCPeerConnection.prototype &&
              e.RTCRtpSender &&
              !("dtmf" in e.RTCRtpSender.prototype)
            ) {
              var a = e.RTCPeerConnection.prototype.getSenders;
              (e.RTCPeerConnection.prototype.getSenders = function () {
                var e = this,
                  t = a.apply(e, []);
                return (
                  t.forEach(function (t) {
                    t._pc = e;
                  }),
                  t
                );
              }),
                Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                  get: function () {
                    return (
                      void 0 === this._dtmf &&
                        ("audio" === this.track.kind
                          ? (this._dtmf = this._pc.createDTMFSender(this.track))
                          : (this._dtmf = null)),
                      this._dtmf
                    );
                  },
                });
            }
          },
          shimSenderReceiverGetStats: function (e) {
            if (
              "object" == typeof e &&
              e.RTCPeerConnection &&
              e.RTCRtpSender &&
              e.RTCRtpReceiver
            ) {
              if (!("getStats" in e.RTCRtpSender.prototype)) {
                var t = e.RTCPeerConnection.prototype.getSenders;
                t &&
                  (e.RTCPeerConnection.prototype.getSenders = function () {
                    var e = this,
                      r = t.apply(e, []);
                    return (
                      r.forEach(function (t) {
                        t._pc = e;
                      }),
                      r
                    );
                  });
                var r = e.RTCPeerConnection.prototype.addTrack;
                r &&
                  (e.RTCPeerConnection.prototype.addTrack = function () {
                    var e = r.apply(this, arguments);
                    return (e._pc = this), e;
                  }),
                  (e.RTCRtpSender.prototype.getStats = function () {
                    var e = this;
                    return this._pc.getStats().then(function (t) {
                      return o(t, e.track, !0);
                    });
                  });
              }
              if (!("getStats" in e.RTCRtpReceiver.prototype)) {
                var i = e.RTCPeerConnection.prototype.getReceivers;
                i &&
                  (e.RTCPeerConnection.prototype.getReceivers = function () {
                    var e = this,
                      t = i.apply(e, []);
                    return (
                      t.forEach(function (t) {
                        t._pc = e;
                      }),
                      t
                    );
                  }),
                  n.wrapPeerConnectionEvent(e, "track", function (e) {
                    return (e.receiver._pc = e.srcElement), e;
                  }),
                  (e.RTCRtpReceiver.prototype.getStats = function () {
                    var e = this;
                    return this._pc.getStats().then(function (t) {
                      return o(t, e.track, !1);
                    });
                  });
              }
              if (
                "getStats" in e.RTCRtpSender.prototype &&
                "getStats" in e.RTCRtpReceiver.prototype
              ) {
                var a = e.RTCPeerConnection.prototype.getStats;
                e.RTCPeerConnection.prototype.getStats = function () {
                  if (
                    arguments.length > 0 &&
                    arguments[0] instanceof e.MediaStreamTrack
                  ) {
                    var t,
                      r,
                      n,
                      i = arguments[0];
                    return (
                      this.getSenders().forEach(function (e) {
                        e.track === i && (t ? (n = !0) : (t = e));
                      }),
                      this.getReceivers().forEach(function (e) {
                        return (
                          e.track === i && (r ? (n = !0) : (r = e)),
                          e.track === i
                        );
                      }),
                      n || (t && r)
                        ? Promise.reject(
                            new DOMException(
                              "There are more than one sender or receiver for the track.",
                              "InvalidAccessError"
                            )
                          )
                        : t
                        ? t.getStats()
                        : r
                        ? r.getStats()
                        : Promise.reject(
                            new DOMException(
                              "There is no sender or receiver for the track.",
                              "InvalidAccessError"
                            )
                          )
                    );
                  }
                  return a.apply(this, arguments);
                };
              }
            }
          },
          shimSourceObject: function (e) {
            var t = e && e.URL;
            "object" == typeof e &&
              (!e.HTMLMediaElement ||
                "srcObject" in e.HTMLMediaElement.prototype ||
                Object.defineProperty(
                  e.HTMLMediaElement.prototype,
                  "srcObject",
                  {
                    get: function () {
                      return this._srcObject;
                    },
                    set: function (e) {
                      var r = this;
                      (this._srcObject = e),
                        this.src && t.revokeObjectURL(this.src),
                        e
                          ? ((this.src = t.createObjectURL(e)),
                            e.addEventListener("addtrack", function () {
                              r.src && t.revokeObjectURL(r.src),
                                (r.src = t.createObjectURL(e));
                            }),
                            e.addEventListener("removetrack", function () {
                              r.src && t.revokeObjectURL(r.src),
                                (r.src = t.createObjectURL(e));
                            }))
                          : (this.src = "");
                    },
                  }
                ));
          },
          shimAddTrackRemoveTrackWithNative: function (e) {
            e.RTCPeerConnection.prototype.getLocalStreams = function () {
              var e = this;
              return (
                (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                Object.keys(this._shimmedLocalStreams).map(function (t) {
                  return e._shimmedLocalStreams[t][0];
                })
              );
            };
            var t = e.RTCPeerConnection.prototype.addTrack;
            e.RTCPeerConnection.prototype.addTrack = function (e, r) {
              if (!r) return t.apply(this, arguments);
              this._shimmedLocalStreams = this._shimmedLocalStreams || {};
              var n = t.apply(this, arguments);
              return (
                this._shimmedLocalStreams[r.id]
                  ? -1 === this._shimmedLocalStreams[r.id].indexOf(n) &&
                    this._shimmedLocalStreams[r.id].push(n)
                  : (this._shimmedLocalStreams[r.id] = [r, n]),
                n
              );
            };
            var r = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function (e) {
              var t = this;
              (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                e.getTracks().forEach(function (e) {
                  if (
                    t.getSenders().find(function (t) {
                      return t.track === e;
                    })
                  )
                    throw new DOMException(
                      "Track already exists.",
                      "InvalidAccessError"
                    );
                });
              var n = t.getSenders();
              r.apply(this, arguments);
              var i = t.getSenders().filter(function (e) {
                return -1 === n.indexOf(e);
              });
              this._shimmedLocalStreams[e.id] = [e].concat(i);
            };
            var n = e.RTCPeerConnection.prototype.removeStream;
            e.RTCPeerConnection.prototype.removeStream = function (e) {
              return (
                (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                delete this._shimmedLocalStreams[e.id],
                n.apply(this, arguments)
              );
            };
            var i = e.RTCPeerConnection.prototype.removeTrack;
            e.RTCPeerConnection.prototype.removeTrack = function (e) {
              var t = this;
              return (
                (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                e &&
                  Object.keys(this._shimmedLocalStreams).forEach(function (r) {
                    var n = t._shimmedLocalStreams[r].indexOf(e);
                    -1 !== n && t._shimmedLocalStreams[r].splice(n, 1),
                      1 === t._shimmedLocalStreams[r].length &&
                        delete t._shimmedLocalStreams[r];
                  }),
                i.apply(this, arguments)
              );
            };
          },
          shimAddTrackRemoveTrack: function (e) {
            var t = n.detectBrowser(e);
            if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65)
              return this.shimAddTrackRemoveTrackWithNative(e);
            var r = e.RTCPeerConnection.prototype.getLocalStreams;
            e.RTCPeerConnection.prototype.getLocalStreams = function () {
              var e = this,
                t = r.apply(this);
              return (
                (e._reverseStreams = e._reverseStreams || {}),
                t.map(function (t) {
                  return e._reverseStreams[t.id];
                })
              );
            };
            var i = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function (t) {
              var r = this;
              if (
                ((r._streams = r._streams || {}),
                (r._reverseStreams = r._reverseStreams || {}),
                t.getTracks().forEach(function (e) {
                  if (
                    r.getSenders().find(function (t) {
                      return t.track === e;
                    })
                  )
                    throw new DOMException(
                      "Track already exists.",
                      "InvalidAccessError"
                    );
                }),
                !r._reverseStreams[t.id])
              ) {
                var n = new e.MediaStream(t.getTracks());
                (r._streams[t.id] = n), (r._reverseStreams[n.id] = t), (t = n);
              }
              i.apply(r, [t]);
            };
            var o = e.RTCPeerConnection.prototype.removeStream;
            function a(e, t) {
              var r = t.sdp;
              return (
                Object.keys(e._reverseStreams || []).forEach(function (t) {
                  var n = e._reverseStreams[t],
                    i = e._streams[n.id];
                  r = r.replace(new RegExp(i.id, "g"), n.id);
                }),
                new RTCSessionDescription({ type: t.type, sdp: r })
              );
            }
            (e.RTCPeerConnection.prototype.removeStream = function (e) {
              var t = this;
              (t._streams = t._streams || {}),
                (t._reverseStreams = t._reverseStreams || {}),
                o.apply(t, [t._streams[e.id] || e]),
                delete t._reverseStreams[
                  t._streams[e.id] ? t._streams[e.id].id : e.id
                ],
                delete t._streams[e.id];
            }),
              (e.RTCPeerConnection.prototype.addTrack = function (t, r) {
                var n = this;
                if ("closed" === n.signalingState)
                  throw new DOMException(
                    "The RTCPeerConnection's signalingState is 'closed'.",
                    "InvalidStateError"
                  );
                var i = [].slice.call(arguments, 1);
                if (
                  1 !== i.length ||
                  !i[0].getTracks().find(function (e) {
                    return e === t;
                  })
                )
                  throw new DOMException(
                    "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
                    "NotSupportedError"
                  );
                if (
                  n.getSenders().find(function (e) {
                    return e.track === t;
                  })
                )
                  throw new DOMException(
                    "Track already exists.",
                    "InvalidAccessError"
                  );
                (n._streams = n._streams || {}),
                  (n._reverseStreams = n._reverseStreams || {});
                var o = n._streams[r.id];
                if (o)
                  o.addTrack(t),
                    Promise.resolve().then(function () {
                      n.dispatchEvent(new Event("negotiationneeded"));
                    });
                else {
                  var a = new e.MediaStream([t]);
                  (n._streams[r.id] = a),
                    (n._reverseStreams[a.id] = r),
                    n.addStream(a);
                }
                return n.getSenders().find(function (e) {
                  return e.track === t;
                });
              }),
              ["createOffer", "createAnswer"].forEach(function (t) {
                var r = e.RTCPeerConnection.prototype[t];
                e.RTCPeerConnection.prototype[t] = function () {
                  var e = this,
                    t = arguments;
                  return arguments.length && "function" == typeof arguments[0]
                    ? r.apply(e, [
                        function (r) {
                          var n = a(e, r);
                          t[0].apply(null, [n]);
                        },
                        function (e) {
                          t[1] && t[1].apply(null, e);
                        },
                        arguments[2],
                      ])
                    : r.apply(e, arguments).then(function (t) {
                        return a(e, t);
                      });
                };
              });
            var s = e.RTCPeerConnection.prototype.setLocalDescription;
            e.RTCPeerConnection.prototype.setLocalDescription = function () {
              return arguments.length && arguments[0].type
                ? ((arguments[0] = (function (e, t) {
                    var r = t.sdp;
                    return (
                      Object.keys(e._reverseStreams || []).forEach(function (
                        t
                      ) {
                        var n = e._reverseStreams[t],
                          i = e._streams[n.id];
                        r = r.replace(new RegExp(n.id, "g"), i.id);
                      }),
                      new RTCSessionDescription({ type: t.type, sdp: r })
                    );
                  })(this, arguments[0])),
                  s.apply(this, arguments))
                : s.apply(this, arguments);
            };
            var u = Object.getOwnPropertyDescriptor(
              e.RTCPeerConnection.prototype,
              "localDescription"
            );
            Object.defineProperty(
              e.RTCPeerConnection.prototype,
              "localDescription",
              {
                get: function () {
                  var e = u.get.apply(this);
                  return "" === e.type ? e : a(this, e);
                },
              }
            ),
              (e.RTCPeerConnection.prototype.removeTrack = function (e) {
                var t,
                  r = this;
                if ("closed" === r.signalingState)
                  throw new DOMException(
                    "The RTCPeerConnection's signalingState is 'closed'.",
                    "InvalidStateError"
                  );
                if (!e._pc)
                  throw new DOMException(
                    "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
                    "TypeError"
                  );
                if (!(e._pc === r))
                  throw new DOMException(
                    "Sender was not created by this connection.",
                    "InvalidAccessError"
                  );
                (r._streams = r._streams || {}),
                  Object.keys(r._streams).forEach(function (n) {
                    r._streams[n].getTracks().find(function (t) {
                      return e.track === t;
                    }) && (t = r._streams[n]);
                  }),
                  t &&
                    (1 === t.getTracks().length
                      ? r.removeStream(r._reverseStreams[t.id])
                      : t.removeTrack(e.track),
                    r.dispatchEvent(new Event("negotiationneeded")));
              });
          },
          shimPeerConnection: function (e) {
            var t = n.detectBrowser(e);
            !e.RTCPeerConnection &&
              e.webkitRTCPeerConnection &&
              ((e.RTCPeerConnection = function (t, r) {
                return (
                  i("PeerConnection"),
                  t &&
                    t.iceTransportPolicy &&
                    (t.iceTransports = t.iceTransportPolicy),
                  new e.webkitRTCPeerConnection(t, r)
                );
              }),
              (e.RTCPeerConnection.prototype =
                e.webkitRTCPeerConnection.prototype),
              e.webkitRTCPeerConnection.generateCertificate &&
                Object.defineProperty(
                  e.RTCPeerConnection,
                  "generateCertificate",
                  {
                    get: function () {
                      return e.webkitRTCPeerConnection.generateCertificate;
                    },
                  }
                ));
            var r = e.RTCPeerConnection.prototype.getStats;
            (e.RTCPeerConnection.prototype.getStats = function (e, t, n) {
              var i = this,
                o = arguments;
              if (arguments.length > 0 && "function" == typeof e)
                return r.apply(this, arguments);
              if (
                0 === r.length &&
                (0 === arguments.length || "function" != typeof arguments[0])
              )
                return r.apply(this, []);
              var a = function (e) {
                  var t = {};
                  return (
                    e.result().forEach(function (e) {
                      var r = {
                        id: e.id,
                        timestamp: e.timestamp,
                        type:
                          {
                            localcandidate: "local-candidate",
                            remotecandidate: "remote-candidate",
                          }[e.type] || e.type,
                      };
                      e.names().forEach(function (t) {
                        r[t] = e.stat(t);
                      }),
                        (t[r.id] = r);
                    }),
                    t
                  );
                },
                s = function (e) {
                  return new Map(
                    Object.keys(e).map(function (t) {
                      return [t, e[t]];
                    })
                  );
                };
              if (arguments.length >= 2) {
                return r.apply(this, [
                  function (e) {
                    o[1](s(a(e)));
                  },
                  arguments[0],
                ]);
              }
              return new Promise(function (e, t) {
                r.apply(i, [
                  function (t) {
                    e(s(a(t)));
                  },
                  t,
                ]);
              }).then(t, n);
            }),
              t.version < 51 &&
                [
                  "setLocalDescription",
                  "setRemoteDescription",
                  "addIceCandidate",
                ].forEach(function (t) {
                  var r = e.RTCPeerConnection.prototype[t];
                  e.RTCPeerConnection.prototype[t] = function () {
                    var e = arguments,
                      t = this,
                      n = new Promise(function (n, i) {
                        r.apply(t, [e[0], n, i]);
                      });
                    return e.length < 2
                      ? n
                      : n.then(
                          function () {
                            e[1].apply(null, []);
                          },
                          function (t) {
                            e.length >= 3 && e[2].apply(null, [t]);
                          }
                        );
                  };
                }),
              t.version < 52 &&
                ["createOffer", "createAnswer"].forEach(function (t) {
                  var r = e.RTCPeerConnection.prototype[t];
                  e.RTCPeerConnection.prototype[t] = function () {
                    var e = this;
                    if (
                      arguments.length < 1 ||
                      (1 === arguments.length &&
                        "object" == typeof arguments[0])
                    ) {
                      var t = 1 === arguments.length ? arguments[0] : void 0;
                      return new Promise(function (n, i) {
                        r.apply(e, [n, i, t]);
                      });
                    }
                    return r.apply(this, arguments);
                  };
                }),
              [
                "setLocalDescription",
                "setRemoteDescription",
                "addIceCandidate",
              ].forEach(function (t) {
                var r = e.RTCPeerConnection.prototype[t];
                e.RTCPeerConnection.prototype[t] = function () {
                  return (
                    (arguments[0] = new (
                      "addIceCandidate" === t
                        ? e.RTCIceCandidate
                        : e.RTCSessionDescription
                    )(arguments[0])),
                    r.apply(this, arguments)
                  );
                };
              });
            var o = e.RTCPeerConnection.prototype.addIceCandidate;
            e.RTCPeerConnection.prototype.addIceCandidate = function () {
              return arguments[0]
                ? o.apply(this, arguments)
                : (arguments[1] && arguments[1].apply(null), Promise.resolve());
            };
          },
          fixNegotiationNeeded: function (e) {
            n.wrapPeerConnectionEvent(e, "negotiationneeded", function (e) {
              if ("stable" === e.target.signalingState) return e;
            });
          },
          shimGetDisplayMedia: function (e, t) {
            "getDisplayMedia" in e.navigator ||
              ("function" == typeof t
                ? (navigator.getDisplayMedia = function (e) {
                    return t(e).then(function (t) {
                      return (
                        (e.video = {
                          mandatory: {
                            chromeMediaSource: "desktop",
                            chromeMediaSourceId: t,
                            maxFrameRate: e.video.frameRate || 3,
                          },
                        }),
                        e.video &&
                          (e.video.height && (e.video.maxWidth = e.video.width),
                          e.video.width &&
                            (e.video.maxHeight = e.video.height)),
                        navigator.mediaDevices.getUserMedia(e)
                      );
                    });
                  })
                : console.error(
                    "shimGetDisplayMedia: getSourceId argument is not a function"
                  ));
          },
        };
      },
      { "../utils.js": 26, "./getusermedia": 18 },
    ],
    23: [
      function (e, t, r) {
        "use strict";
        var n = e("../utils");
        t.exports = {
          shimGetUserMedia: e("./getusermedia"),
          shimOnTrack: function (e) {
            "object" != typeof e ||
              !e.RTCPeerConnection ||
              "ontrack" in e.RTCPeerConnection.prototype ||
              Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                get: function () {
                  return this._ontrack;
                },
                set: function (e) {
                  this._ontrack &&
                    (this.removeEventListener("track", this._ontrack),
                    this.removeEventListener("addstream", this._ontrackpoly)),
                    this.addEventListener("track", (this._ontrack = e)),
                    this.addEventListener(
                      "addstream",
                      (this._ontrackpoly = function (e) {
                        e.stream.getTracks().forEach(
                          function (t) {
                            var r = new Event("track");
                            (r.track = t),
                              (r.receiver = { track: t }),
                              (r.transceiver = { receiver: r.receiver }),
                              (r.streams = [e.stream]),
                              this.dispatchEvent(r);
                          }.bind(this)
                        );
                      }.bind(this))
                    );
                },
                enumerable: !0,
                configurable: !0,
              }),
              "object" == typeof e &&
                e.RTCTrackEvent &&
                "receiver" in e.RTCTrackEvent.prototype &&
                !("transceiver" in e.RTCTrackEvent.prototype) &&
                Object.defineProperty(
                  e.RTCTrackEvent.prototype,
                  "transceiver",
                  {
                    get: function () {
                      return { receiver: this.receiver };
                    },
                  }
                );
          },
          shimSourceObject: function (e) {
            "object" == typeof e &&
              (!e.HTMLMediaElement ||
                "srcObject" in e.HTMLMediaElement.prototype ||
                Object.defineProperty(
                  e.HTMLMediaElement.prototype,
                  "srcObject",
                  {
                    get: function () {
                      return this.mozSrcObject;
                    },
                    set: function (e) {
                      this.mozSrcObject = e;
                    },
                  }
                ));
          },
          shimPeerConnection: function (e) {
            var t = n.detectBrowser(e);
            if (
              "object" == typeof e &&
              (e.RTCPeerConnection || e.mozRTCPeerConnection)
            ) {
              e.RTCPeerConnection ||
                ((e.RTCPeerConnection = function (r, n) {
                  if (t.version < 38 && r && r.iceServers) {
                    for (var i = [], o = 0; o < r.iceServers.length; o++) {
                      var a = r.iceServers[o];
                      if (a.hasOwnProperty("urls"))
                        for (var s = 0; s < a.urls.length; s++) {
                          var u = { url: a.urls[s] };
                          0 === a.urls[s].indexOf("turn") &&
                            ((u.username = a.username),
                            (u.credential = a.credential)),
                            i.push(u);
                        }
                      else i.push(r.iceServers[o]);
                    }
                    r.iceServers = i;
                  }
                  return new e.mozRTCPeerConnection(r, n);
                }),
                (e.RTCPeerConnection.prototype =
                  e.mozRTCPeerConnection.prototype),
                e.mozRTCPeerConnection.generateCertificate &&
                  Object.defineProperty(
                    e.RTCPeerConnection,
                    "generateCertificate",
                    {
                      get: function () {
                        return e.mozRTCPeerConnection.generateCertificate;
                      },
                    }
                  ),
                (e.RTCSessionDescription = e.mozRTCSessionDescription),
                (e.RTCIceCandidate = e.mozRTCIceCandidate)),
                [
                  "setLocalDescription",
                  "setRemoteDescription",
                  "addIceCandidate",
                ].forEach(function (t) {
                  var r = e.RTCPeerConnection.prototype[t];
                  e.RTCPeerConnection.prototype[t] = function () {
                    return (
                      (arguments[0] = new (
                        "addIceCandidate" === t
                          ? e.RTCIceCandidate
                          : e.RTCSessionDescription
                      )(arguments[0])),
                      r.apply(this, arguments)
                    );
                  };
                });
              var r = e.RTCPeerConnection.prototype.addIceCandidate;
              e.RTCPeerConnection.prototype.addIceCandidate = function () {
                return arguments[0]
                  ? r.apply(this, arguments)
                  : (arguments[1] && arguments[1].apply(null),
                    Promise.resolve());
              };
              var i = {
                  inboundrtp: "inbound-rtp",
                  outboundrtp: "outbound-rtp",
                  candidatepair: "candidate-pair",
                  localcandidate: "local-candidate",
                  remotecandidate: "remote-candidate",
                },
                o = e.RTCPeerConnection.prototype.getStats;
              e.RTCPeerConnection.prototype.getStats = function (e, r, n) {
                return o
                  .apply(this, [e || null])
                  .then(function (e) {
                    if (
                      (t.version < 48 &&
                        (e = (function (e) {
                          var t = new Map();
                          return (
                            Object.keys(e).forEach(function (r) {
                              t.set(r, e[r]), (t[r] = e[r]);
                            }),
                            t
                          );
                        })(e)),
                      t.version < 53 && !r)
                    )
                      try {
                        e.forEach(function (e) {
                          e.type = i[e.type] || e.type;
                        });
                      } catch (t) {
                        if ("TypeError" !== t.name) throw t;
                        e.forEach(function (t, r) {
                          e.set(
                            r,
                            Object.assign({}, t, { type: i[t.type] || t.type })
                          );
                        });
                      }
                    return e;
                  })
                  .then(r, n);
              };
            }
          },
          shimSenderGetStats: function (e) {
            if (
              "object" == typeof e &&
              e.RTCPeerConnection &&
              e.RTCRtpSender &&
              !(e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype)
            ) {
              var t = e.RTCPeerConnection.prototype.getSenders;
              t &&
                (e.RTCPeerConnection.prototype.getSenders = function () {
                  var e = this,
                    r = t.apply(e, []);
                  return (
                    r.forEach(function (t) {
                      t._pc = e;
                    }),
                    r
                  );
                });
              var r = e.RTCPeerConnection.prototype.addTrack;
              r &&
                (e.RTCPeerConnection.prototype.addTrack = function () {
                  var e = r.apply(this, arguments);
                  return (e._pc = this), e;
                }),
                (e.RTCRtpSender.prototype.getStats = function () {
                  return this.track
                    ? this._pc.getStats(this.track)
                    : Promise.resolve(new Map());
                });
            }
          },
          shimReceiverGetStats: function (e) {
            if (
              "object" == typeof e &&
              e.RTCPeerConnection &&
              e.RTCRtpSender &&
              !(e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype)
            ) {
              var t = e.RTCPeerConnection.prototype.getReceivers;
              t &&
                (e.RTCPeerConnection.prototype.getReceivers = function () {
                  var e = this,
                    r = t.apply(e, []);
                  return (
                    r.forEach(function (t) {
                      t._pc = e;
                    }),
                    r
                  );
                }),
                n.wrapPeerConnectionEvent(e, "track", function (e) {
                  return (e.receiver._pc = e.srcElement), e;
                }),
                (e.RTCRtpReceiver.prototype.getStats = function () {
                  return this._pc.getStats(this.track);
                });
            }
          },
          shimRemoveStream: function (e) {
            !e.RTCPeerConnection ||
              "removeStream" in e.RTCPeerConnection.prototype ||
              (e.RTCPeerConnection.prototype.removeStream = function (e) {
                var t = this;
                n.deprecated("removeStream", "removeTrack"),
                  this.getSenders().forEach(function (r) {
                    r.track &&
                      -1 !== e.getTracks().indexOf(r.track) &&
                      t.removeTrack(r);
                  });
              });
          },
          shimRTCDataChannel: function (e) {
            e.DataChannel &&
              !e.RTCDataChannel &&
              (e.RTCDataChannel = e.DataChannel);
          },
          shimGetDisplayMedia: function (e, t) {
            "getDisplayMedia" in e.navigator ||
              (navigator.getDisplayMedia = function (e) {
                if (!e || !e.video) {
                  var r = new DOMException(
                    "getDisplayMedia without video constraints is undefined"
                  );
                  return (
                    (r.name = "NotFoundError"), (r.code = 8), Promise.reject(r)
                  );
                }
                return (
                  !0 === e.video
                    ? (e.video = { mediaSource: t })
                    : (e.video.mediaSource = t),
                  navigator.mediaDevices.getUserMedia(e)
                );
              });
          },
        };
      },
      { "../utils": 26, "./getusermedia": 24 },
    ],
    19: [
      function (e, t, r) {
        "use strict";
        var n = e("sdp"),
          i = e("./utils");
        t.exports = {
          shimRTCIceCandidate: function (e) {
            if (
              e.RTCIceCandidate &&
              !(
                e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype
              )
            ) {
              var t = e.RTCIceCandidate;
              (e.RTCIceCandidate = function (e) {
                if (
                  ("object" == typeof e &&
                    e.candidate &&
                    0 === e.candidate.indexOf("a=") &&
                    ((e = JSON.parse(JSON.stringify(e))).candidate =
                      e.candidate.substr(2)),
                  e.candidate && e.candidate.length)
                ) {
                  var r = new t(e),
                    i = n.parseCandidate(e.candidate),
                    o = Object.assign(r, i);
                  return (
                    (o.toJSON = function () {
                      return {
                        candidate: o.candidate,
                        sdpMid: o.sdpMid,
                        sdpMLineIndex: o.sdpMLineIndex,
                        usernameFragment: o.usernameFragment,
                      };
                    }),
                    o
                  );
                }
                return new t(e);
              }),
                (e.RTCIceCandidate.prototype = t.prototype),
                i.wrapPeerConnectionEvent(e, "icecandidate", function (t) {
                  return (
                    t.candidate &&
                      Object.defineProperty(t, "candidate", {
                        value: new e.RTCIceCandidate(t.candidate),
                        writable: "false",
                      }),
                    t
                  );
                });
            }
          },
          shimCreateObjectURL: function (e) {
            var t = e && e.URL;
            if (
              "object" == typeof e &&
              e.HTMLMediaElement &&
              "srcObject" in e.HTMLMediaElement.prototype &&
              t.createObjectURL &&
              t.revokeObjectURL
            ) {
              var r = t.createObjectURL.bind(t),
                n = t.revokeObjectURL.bind(t),
                o = new Map(),
                a = 0;
              (t.createObjectURL = function (e) {
                if ("getTracks" in e) {
                  var t = "polyblob:" + ++a;
                  return (
                    o.set(t, e),
                    i.deprecated(
                      "URL.createObjectURL(stream)",
                      "elem.srcObject = stream"
                    ),
                    t
                  );
                }
                return r(e);
              }),
                (t.revokeObjectURL = function (e) {
                  n(e), o.delete(e);
                });
              var s = Object.getOwnPropertyDescriptor(
                e.HTMLMediaElement.prototype,
                "src"
              );
              Object.defineProperty(e.HTMLMediaElement.prototype, "src", {
                get: function () {
                  return s.get.apply(this);
                },
                set: function (e) {
                  return (
                    (this.srcObject = o.get(e) || null), s.set.apply(this, [e])
                  );
                },
              });
              var u = e.HTMLMediaElement.prototype.setAttribute;
              e.HTMLMediaElement.prototype.setAttribute = function () {
                return (
                  2 === arguments.length &&
                    "src" === ("" + arguments[0]).toLowerCase() &&
                    (this.srcObject = o.get(arguments[1]) || null),
                  u.apply(this, arguments)
                );
              };
            }
          },
          shimMaxMessageSize: function (e) {
            if (!e.RTCSctpTransport && e.RTCPeerConnection) {
              var t = i.detectBrowser(e);
              "sctp" in e.RTCPeerConnection.prototype ||
                Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
                  get: function () {
                    return void 0 === this._sctp ? null : this._sctp;
                  },
                });
              var r = e.RTCPeerConnection.prototype.setRemoteDescription;
              e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                var e, i, o, a;
                if (
                  ((this._sctp = null),
                  (o = arguments[0]),
                  (a = n.splitSections(o.sdp)).shift(),
                  a.some(function (e) {
                    var t = n.parseMLine(e);
                    return (
                      t &&
                      "application" === t.kind &&
                      -1 !== t.protocol.indexOf("SCTP")
                    );
                  }))
                ) {
                  var s,
                    u = (function (e) {
                      var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                      if (null === t || t.length < 2) return -1;
                      var r = parseInt(t[1], 10);
                      return r != r ? -1 : r;
                    })(arguments[0]),
                    c =
                      ((e = u),
                      (i = 65536),
                      "firefox" === t.browser &&
                        (i =
                          t.version < 57
                            ? -1 === e
                              ? 16384
                              : 2147483637
                            : t.version < 60
                            ? 57 === t.version
                              ? 65535
                              : 65536
                            : 2147483637),
                      i),
                    f = (function (e, r) {
                      var i = 65536;
                      "firefox" === t.browser &&
                        57 === t.version &&
                        (i = 65535);
                      var o = n.matchPrefix(e.sdp, "a=max-message-size:");
                      return (
                        o.length > 0
                          ? (i = parseInt(o[0].substr(19), 10))
                          : "firefox" === t.browser &&
                            -1 !== r &&
                            (i = 2147483637),
                        i
                      );
                    })(arguments[0], u);
                  s =
                    0 === c && 0 === f
                      ? Number.POSITIVE_INFINITY
                      : 0 === c || 0 === f
                      ? Math.max(c, f)
                      : Math.min(c, f);
                  var l = {};
                  Object.defineProperty(l, "maxMessageSize", {
                    get: function () {
                      return s;
                    },
                  }),
                    (this._sctp = l);
                }
                return r.apply(this, arguments);
              };
            }
          },
          shimSendThrowTypeError: function (e) {
            if (
              e.RTCPeerConnection &&
              "createDataChannel" in e.RTCPeerConnection.prototype
            ) {
              var t = e.RTCPeerConnection.prototype.createDataChannel;
              (e.RTCPeerConnection.prototype.createDataChannel = function () {
                var e = t.apply(this, arguments);
                return r(e, this), e;
              }),
                i.wrapPeerConnectionEvent(e, "datachannel", function (e) {
                  return r(e.channel, e.target), e;
                });
            }
            function r(e, t) {
              var r = e.send;
              e.send = function () {
                var n = arguments[0],
                  i = n.length || n.size || n.byteLength;
                if (
                  "open" === e.readyState &&
                  t.sctp &&
                  i > t.sctp.maxMessageSize
                )
                  throw new TypeError(
                    "Message too large (can send a maximum of " +
                      t.sctp.maxMessageSize +
                      " bytes)"
                  );
                return r.apply(e, arguments);
              };
            }
          },
        };
      },
      { "./utils": 26, sdp: 10 },
    ],
    20: [
      function (e, t, r) {
        "use strict";
        var n = e("../utils"),
          i = e("./filtericeservers"),
          o = e("rtcpeerconnection-shim");
        t.exports = {
          shimGetUserMedia: e("./getusermedia"),
          shimPeerConnection: function (e) {
            var t = n.detectBrowser(e);
            if (
              e.RTCIceGatherer &&
              (e.RTCIceCandidate ||
                (e.RTCIceCandidate = function (e) {
                  return e;
                }),
              e.RTCSessionDescription ||
                (e.RTCSessionDescription = function (e) {
                  return e;
                }),
              t.version < 15025)
            ) {
              var r = Object.getOwnPropertyDescriptor(
                e.MediaStreamTrack.prototype,
                "enabled"
              );
              Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
                set: function (e) {
                  r.set.call(this, e);
                  var t = new Event("enabled");
                  (t.enabled = e), this.dispatchEvent(t);
                },
              });
            }
            !e.RTCRtpSender ||
              "dtmf" in e.RTCRtpSender.prototype ||
              Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                get: function () {
                  return (
                    void 0 === this._dtmf &&
                      ("audio" === this.track.kind
                        ? (this._dtmf = new e.RTCDtmfSender(this))
                        : "video" === this.track.kind && (this._dtmf = null)),
                    this._dtmf
                  );
                },
              }),
              e.RTCDtmfSender &&
                !e.RTCDTMFSender &&
                (e.RTCDTMFSender = e.RTCDtmfSender);
            var a = o(e, t.version);
            (e.RTCPeerConnection = function (e) {
              return (
                e && e.iceServers && (e.iceServers = i(e.iceServers)), new a(e)
              );
            }),
              (e.RTCPeerConnection.prototype = a.prototype);
          },
          shimReplaceTrack: function (e) {
            !e.RTCRtpSender ||
              "replaceTrack" in e.RTCRtpSender.prototype ||
              (e.RTCRtpSender.prototype.replaceTrack =
                e.RTCRtpSender.prototype.setTrack);
          },
        };
      },
      {
        "../utils": 26,
        "./filtericeservers": 21,
        "./getusermedia": 22,
        "rtcpeerconnection-shim": 9,
      },
    ],
    18: [
      function (e, t, r) {
        "use strict";
        var n = e("../utils.js"),
          i = n.log;
        t.exports = function (e) {
          var t = n.detectBrowser(e),
            r = e && e.navigator,
            o = function (e) {
              if ("object" != typeof e || e.mandatory || e.optional) return e;
              var t = {};
              return (
                Object.keys(e).forEach(function (r) {
                  if (
                    "require" !== r &&
                    "advanced" !== r &&
                    "mediaSource" !== r
                  ) {
                    var n = "object" == typeof e[r] ? e[r] : { ideal: e[r] };
                    void 0 !== n.exact &&
                      "number" == typeof n.exact &&
                      (n.min = n.max = n.exact);
                    var i = function (e, t) {
                      return e
                        ? e + t.charAt(0).toUpperCase() + t.slice(1)
                        : "deviceId" === t
                        ? "sourceId"
                        : t;
                    };
                    if (void 0 !== n.ideal) {
                      t.optional = t.optional || [];
                      var o = {};
                      "number" == typeof n.ideal
                        ? ((o[i("min", r)] = n.ideal),
                          t.optional.push(o),
                          ((o = {})[i("max", r)] = n.ideal),
                          t.optional.push(o))
                        : ((o[i("", r)] = n.ideal), t.optional.push(o));
                    }
                    void 0 !== n.exact && "number" != typeof n.exact
                      ? ((t.mandatory = t.mandatory || {}),
                        (t.mandatory[i("", r)] = n.exact))
                      : ["min", "max"].forEach(function (e) {
                          void 0 !== n[e] &&
                            ((t.mandatory = t.mandatory || {}),
                            (t.mandatory[i(e, r)] = n[e]));
                        });
                  }
                }),
                e.advanced &&
                  (t.optional = (t.optional || []).concat(e.advanced)),
                t
              );
            },
            a = function (e, n) {
              if (t.version >= 61) return n(e);
              if (
                (e = JSON.parse(JSON.stringify(e))) &&
                "object" == typeof e.audio
              ) {
                var a = function (e, t, r) {
                  t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
                };
                a(
                  (e = JSON.parse(JSON.stringify(e))).audio,
                  "autoGainControl",
                  "googAutoGainControl"
                ),
                  a(e.audio, "noiseSuppression", "googNoiseSuppression"),
                  (e.audio = o(e.audio));
              }
              if (e && "object" == typeof e.video) {
                var s = e.video.facingMode;
                s = s && ("object" == typeof s ? s : { ideal: s });
                var u,
                  c = t.version < 66;
                if (
                  s &&
                  ("user" === s.exact ||
                    "environment" === s.exact ||
                    "user" === s.ideal ||
                    "environment" === s.ideal) &&
                  (!r.mediaDevices.getSupportedConstraints ||
                    !r.mediaDevices.getSupportedConstraints().facingMode ||
                    c)
                )
                  if (
                    (delete e.video.facingMode,
                    "environment" === s.exact || "environment" === s.ideal
                      ? (u = ["back", "rear"])
                      : ("user" !== s.exact && "user" !== s.ideal) ||
                        (u = ["front"]),
                    u)
                  )
                    return r.mediaDevices.enumerateDevices().then(function (t) {
                      var r = (t = t.filter(function (e) {
                        return "videoinput" === e.kind;
                      })).find(function (e) {
                        return u.some(function (t) {
                          return -1 !== e.label.toLowerCase().indexOf(t);
                        });
                      });
                      return (
                        !r &&
                          t.length &&
                          -1 !== u.indexOf("back") &&
                          (r = t[t.length - 1]),
                        r &&
                          (e.video.deviceId = s.exact
                            ? { exact: r.deviceId }
                            : { ideal: r.deviceId }),
                        (e.video = o(e.video)),
                        i("chrome: " + JSON.stringify(e)),
                        n(e)
                      );
                    });
                e.video = o(e.video);
              }
              return i("chrome: " + JSON.stringify(e)), n(e);
            },
            s = function (e) {
              return t.version >= 64
                ? e
                : {
                    name:
                      {
                        PermissionDeniedError: "NotAllowedError",
                        PermissionDismissedError: "NotAllowedError",
                        InvalidStateError: "NotAllowedError",
                        DevicesNotFoundError: "NotFoundError",
                        ConstraintNotSatisfiedError: "OverconstrainedError",
                        TrackStartError: "NotReadableError",
                        MediaDeviceFailedDueToShutdown: "NotAllowedError",
                        MediaDeviceKillSwitchOn: "NotAllowedError",
                        TabCaptureError: "AbortError",
                        ScreenCaptureError: "AbortError",
                        DeviceCaptureError: "AbortError",
                      }[e.name] || e.name,
                    message: e.message,
                    constraint: e.constraint || e.constraintName,
                    toString: function () {
                      return this.name + (this.message && ": ") + this.message;
                    },
                  };
            };
          r.getUserMedia = function (e, t, n) {
            a(e, function (e) {
              r.webkitGetUserMedia(e, t, function (e) {
                n && n(s(e));
              });
            });
          };
          var u = function (e) {
            return new Promise(function (t, n) {
              r.getUserMedia(e, t, n);
            });
          };
          if (
            (r.mediaDevices ||
              (r.mediaDevices = {
                getUserMedia: u,
                enumerateDevices: function () {
                  return new Promise(function (t) {
                    var r = { audio: "audioinput", video: "videoinput" };
                    return e.MediaStreamTrack.getSources(function (e) {
                      t(
                        e.map(function (e) {
                          return {
                            label: e.label,
                            kind: r[e.kind],
                            deviceId: e.id,
                            groupId: "",
                          };
                        })
                      );
                    });
                  });
                },
                getSupportedConstraints: function () {
                  return {
                    deviceId: !0,
                    echoCancellation: !0,
                    facingMode: !0,
                    frameRate: !0,
                    height: !0,
                    width: !0,
                  };
                },
              }),
            r.mediaDevices.getUserMedia)
          ) {
            var c = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
            r.mediaDevices.getUserMedia = function (e) {
              return a(e, function (e) {
                return c(e).then(
                  function (t) {
                    if (
                      (e.audio && !t.getAudioTracks().length) ||
                      (e.video && !t.getVideoTracks().length)
                    )
                      throw (
                        (t.getTracks().forEach(function (e) {
                          e.stop();
                        }),
                        new DOMException("", "NotFoundError"))
                      );
                    return t;
                  },
                  function (e) {
                    return Promise.reject(s(e));
                  }
                );
              });
            };
          } else
            r.mediaDevices.getUserMedia = function (e) {
              return u(e);
            };
          void 0 === r.mediaDevices.addEventListener &&
            (r.mediaDevices.addEventListener = function () {
              i("Dummy mediaDevices.addEventListener called.");
            }),
            void 0 === r.mediaDevices.removeEventListener &&
              (r.mediaDevices.removeEventListener = function () {
                i("Dummy mediaDevices.removeEventListener called.");
              });
        };
      },
      { "../utils.js": 26 },
    ],
    22: [
      function (e, t, r) {
        "use strict";
        t.exports = function (e) {
          var t = e && e.navigator,
            r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
          t.mediaDevices.getUserMedia = function (e) {
            return r(e).catch(function (e) {
              return Promise.reject(
                (function (e) {
                  return {
                    name:
                      { PermissionDeniedError: "NotAllowedError" }[e.name] ||
                      e.name,
                    message: e.message,
                    constraint: e.constraint,
                    toString: function () {
                      return this.name;
                    },
                  };
                })(e)
              );
            });
          };
        };
      },
      {},
    ],
    21: [
      function (e, t, r) {
        "use strict";
        var n = e("../utils");
        t.exports = function (e, t) {
          var r = !1;
          return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
            if (e && (e.urls || e.url)) {
              var i = e.urls || e.url;
              e.url &&
                !e.urls &&
                n.deprecated("RTCIceServer.url", "RTCIceServer.urls");
              var o = "string" == typeof i;
              return (
                o && (i = [i]),
                (i = i.filter(function (e) {
                  return 0 === e.indexOf("turn:") &&
                    -1 !== e.indexOf("transport=udp") &&
                    -1 === e.indexOf("turn:[") &&
                    !r
                    ? ((r = !0), !0)
                    : 0 === e.indexOf("stun:") &&
                        t >= 14393 &&
                        -1 === e.indexOf("?transport=udp");
                })),
                delete e.url,
                (e.urls = o ? i[0] : i),
                !!i.length
              );
            }
          });
        };
      },
      { "../utils": 26 },
    ],
    24: [
      function (e, t, r) {
        "use strict";
        var n = e("../utils"),
          i = n.log;
        t.exports = function (e) {
          var t = n.detectBrowser(e),
            r = e && e.navigator,
            o = e && e.MediaStreamTrack,
            a = function (e) {
              return {
                name:
                  {
                    InternalError: "NotReadableError",
                    NotSupportedError: "TypeError",
                    PermissionDeniedError: "NotAllowedError",
                    SecurityError: "NotAllowedError",
                  }[e.name] || e.name,
                message:
                  {
                    "The operation is insecure.":
                      "The request is not allowed by the user agent or the platform in the current context.",
                  }[e.message] || e.message,
                constraint: e.constraint,
                toString: function () {
                  return this.name + (this.message && ": ") + this.message;
                },
              };
            },
            s = function (e, n, o) {
              var s = function (e) {
                if ("object" != typeof e || e.require) return e;
                var t = [];
                return (
                  Object.keys(e).forEach(function (r) {
                    if (
                      "require" !== r &&
                      "advanced" !== r &&
                      "mediaSource" !== r
                    ) {
                      var n = (e[r] =
                        "object" == typeof e[r] ? e[r] : { ideal: e[r] });
                      if (
                        ((void 0 === n.min &&
                          void 0 === n.max &&
                          void 0 === n.exact) ||
                          t.push(r),
                        void 0 !== n.exact &&
                          ("number" == typeof n.exact
                            ? (n.min = n.max = n.exact)
                            : (e[r] = n.exact),
                          delete n.exact),
                        void 0 !== n.ideal)
                      ) {
                        e.advanced = e.advanced || [];
                        var i = {};
                        "number" == typeof n.ideal
                          ? (i[r] = { min: n.ideal, max: n.ideal })
                          : (i[r] = n.ideal),
                          e.advanced.push(i),
                          delete n.ideal,
                          Object.keys(n).length || delete e[r];
                      }
                    }
                  }),
                  t.length && (e.require = t),
                  e
                );
              };
              return (
                (e = JSON.parse(JSON.stringify(e))),
                t.version < 38 &&
                  (i("spec: " + JSON.stringify(e)),
                  e.audio && (e.audio = s(e.audio)),
                  e.video && (e.video = s(e.video)),
                  i("ff37: " + JSON.stringify(e))),
                r.mozGetUserMedia(e, n, function (e) {
                  o(a(e));
                })
              );
            };
          if (
            (r.mediaDevices ||
              (r.mediaDevices = {
                getUserMedia: function (e) {
                  return new Promise(function (t, r) {
                    s(e, t, r);
                  });
                },
                addEventListener: function () {},
                removeEventListener: function () {},
              }),
            (r.mediaDevices.enumerateDevices =
              r.mediaDevices.enumerateDevices ||
              function () {
                return new Promise(function (e) {
                  e([
                    {
                      kind: "audioinput",
                      deviceId: "default",
                      label: "",
                      groupId: "",
                    },
                    {
                      kind: "videoinput",
                      deviceId: "default",
                      label: "",
                      groupId: "",
                    },
                  ]);
                });
              }),
            t.version < 41)
          ) {
            var u = r.mediaDevices.enumerateDevices.bind(r.mediaDevices);
            r.mediaDevices.enumerateDevices = function () {
              return u().then(void 0, function (e) {
                if ("NotFoundError" === e.name) return [];
                throw e;
              });
            };
          }
          if (t.version < 49) {
            var c = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
            r.mediaDevices.getUserMedia = function (e) {
              return c(e).then(
                function (t) {
                  if (
                    (e.audio && !t.getAudioTracks().length) ||
                    (e.video && !t.getVideoTracks().length)
                  )
                    throw (
                      (t.getTracks().forEach(function (e) {
                        e.stop();
                      }),
                      new DOMException(
                        "The object can not be found here.",
                        "NotFoundError"
                      ))
                    );
                  return t;
                },
                function (e) {
                  return Promise.reject(a(e));
                }
              );
            };
          }
          if (
            !(
              t.version > 55 &&
              "autoGainControl" in r.mediaDevices.getSupportedConstraints()
            )
          ) {
            var f = function (e, t, r) {
                t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
              },
              l = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
            if (
              ((r.mediaDevices.getUserMedia = function (e) {
                return (
                  "object" == typeof e &&
                    "object" == typeof e.audio &&
                    ((e = JSON.parse(JSON.stringify(e))),
                    f(e.audio, "autoGainControl", "mozAutoGainControl"),
                    f(e.audio, "noiseSuppression", "mozNoiseSuppression")),
                  l(e)
                );
              }),
              o && o.prototype.getSettings)
            ) {
              var d = o.prototype.getSettings;
              o.prototype.getSettings = function () {
                var e = d.apply(this, arguments);
                return (
                  f(e, "mozAutoGainControl", "autoGainControl"),
                  f(e, "mozNoiseSuppression", "noiseSuppression"),
                  e
                );
              };
            }
            if (o && o.prototype.applyConstraints) {
              var h = o.prototype.applyConstraints;
              o.prototype.applyConstraints = function (e) {
                return (
                  "audio" === this.kind &&
                    "object" == typeof e &&
                    ((e = JSON.parse(JSON.stringify(e))),
                    f(e, "autoGainControl", "mozAutoGainControl"),
                    f(e, "noiseSuppression", "mozNoiseSuppression")),
                  h.apply(this, [e])
                );
              };
            }
          }
          r.getUserMedia = function (e, i, o) {
            if (t.version < 44) return s(e, i, o);
            n.deprecated(
              "navigator.getUserMedia",
              "navigator.mediaDevices.getUserMedia"
            ),
              r.mediaDevices.getUserMedia(e).then(i, o);
          };
        };
      },
      { "../utils": 26 },
    ],
    27: [
      function (e, t, r) {
        (function (e) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          class t extends Error {
            constructor(e, t) {
              super(
                t
                  ? `Cannot access video stream (${e}: ${t.message}).`
                  : `Cannot access video stream (${e}).`
              ),
                (this.type = e),
                (this.inner = t);
            }
          }
          class n {
            constructor(e, t) {
              (this.id = e), (this.name = t), (this._stream = null);
            }
            async start() {
              return (
                (this._stream = await n.wrapErrors(
                  async () =>
                    await navigator.mediaDevices.getUserMedia({
                      audio: !1,
                      video: { deviceId: { exact: this.id } },
                    })
                )),
                this._stream
              );
            }
            stop() {
              if (this._stream) {
                for (let e of this._stream.getVideoTracks()) e.stop();
                this._stream = null;
              }
            }
            static async getCameras() {
              return (
                await n.ensureAccess(),
                (await navigator.mediaDevices.enumerateDevices())
                  .filter((e) => "videoinput" === e.kind)
                  .map(
                    (e) =>
                      new n(
                        e.deviceId,
                        (function (e) {
                          return (
                            e.replace(
                              /\s*\([0-9a-f]+(:[0-9a-f]+)?\)\s*$/,
                              ""
                            ) ||
                            e ||
                            null
                          );
                        })(e.label)
                      )
                  )
              );
            }
            static async ensureAccess() {
              return await n.wrapErrors(async () => {
                let e = await navigator.mediaDevices.getUserMedia({
                  video: !0,
                });
                for (let t of e.getVideoTracks()) t.stop();
              });
            }
            static async wrapErrors(r) {
              try {
                return await r();
              } catch (r) {
                throw r.name && "development" !== e.env.NODE_ENV
                  ? new t(r.name, r)
                  : r;
              }
            }
          }
          r.default = n;
        }.call(this, e("_process")));
      },
      { _process: 7 },
    ],
    28: [
      function (e, t, r) {
        (function (t) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          const n = e("./ZxingWrapper");
          r.default = class {
            constructor(e, t, r, i, o) {
              (this.scanPeriod = i),
                (this.refractoryPeriod = o),
                (this.captureImage = r),
                (this._emitter = e),
                (this._video = t),
                (this._active = !1),
                (this._reader = new n.default()),
                (this._canvas = document.createElement("canvas")),
                (this._canvas.style.display = "none"),
                (this._context = this._canvas.getContext("2d"));
            }
            start() {
              (this._active = !0), t.nextTick(() => this.doScan(!0));
            }
            stop() {
              this._active = !1;
            }
            async scan() {
              return await this.doScan();
            }
            async analyze(e) {
              let t = e.getText(),
                r = null;
              if (this.captureImage) {
                let { videoWidth: e, videoHeight: t } = this._video;
                (this._canvas.width = e),
                  (this._canvas.height = t),
                  this._context.drawImage(this._video, 0, 0, e, t),
                  (r = this._canvas.toDataURL("image/webp", 0.8));
              }
              return { content: t, image: r };
            }
            async doScan(e) {
              if (!this.camera) throw new Error("No camera set");
              if (e && !this._active) return null;
              let r = await this._reader.decodeFromVideoElement(this._video),
                n = await this.analyze(r);
              return (
                n &&
                  n.content !== this._lastResult &&
                  this._active &&
                  ((this._lastResult = n.content),
                  this._refractoryTimeout &&
                    clearTimeout(this._refractoryTimeout),
                  (this._refractoryTimeout = setTimeout(() => {
                    (this._refractoryTimeout = null), (this._lastResult = null);
                  }, this.refractoryPeriod)),
                  t.nextTick(() =>
                    this._emitter.emit("scan", n.content, n.image)
                  )),
                e && setTimeout(() => this.doScan(!0), this.scanPeriod),
                n
              );
            }
          };
        }.call(this, e("_process")));
      },
      { "./ZxingWrapper": 30, _process: 7 },
    ],
    30: [
      function (e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 });
        const n = e("@zxing/library");
        r.default = class {
          constructor(e) {
            this._reader = new n.BrowserQRCodeReader(e);
          }
          reset() {
            let e = this._reader;
            (e.videoElement = void 0),
              (e.canvasElement = void 0),
              (e.canvasElementContext = void 0),
              e.stop();
          }
          decodeFromVideoElement(e) {
            return new Promise((t, r) => {
              (e.width && e.height) || ((e.width = 640), (e.height = 480)),
                this.reset(),
                (this._reader.videoElement = e),
                this._reader.decodeOnceWithDelay(t, r);
            });
          }
        };
      },
      { "@zxing/library": 1 },
    ],
    29: [
      function (e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 });
        const n = e("./ScanProvider"),
          i = e("events"),
          o = e("visibilityjs"),
          a = e("fsm-as-promised");
        r.default = class extends i.EventEmitter {
          constructor(e) {
            super(),
              (this.video = this.configureVideo(e)),
              (this.mirror = !1 !== e.mirror),
              (this.backgroundScan = !1 !== e.backgroundScan),
              (this._continuous = !1 !== e.continuous);
            let t = e.captureImage || !1,
              r = e.scanPeriod || 500,
              i = e.refractoryPeriod || 5e3;
            (this._scanProvider = new n.default(this, this.video, t, r, i)),
              (this._fsm = this.createStateMachine()),
              e.camera && (this.camera = e.camera),
              o.change((e, t) => {
                "visible" === t
                  ? setTimeout(() => {
                      this._fsm.can("activate") && this._fsm.activate();
                    }, 0)
                  : !this.backgroundScan &&
                    this._fsm.can("deactivate") &&
                    this._fsm.deactivate();
              }),
              this.addListener("active", () => {
                this.video.classList.remove("inactive"),
                  this.video.classList.add("active");
              }),
              this.addListener("inactive", () => {
                this.video.classList.remove("active"),
                  this.video.classList.add("inactive");
              }),
              this.emit("inactive");
          }
          async scan() {
            return await this._scanProvider.scan();
          }
          async start() {
            this._fsm.can("start")
              ? await this._fsm.start()
              : (await this._fsm.stop(), await this._fsm.start());
          }
          async stop() {
            this._fsm.can("stop") && (await this._fsm.stop());
          }
          set camera(e) {
            this._scanProvider.camera && this._scanProvider.camera.stop(),
              (this._scanProvider.camera = e);
          }
          get camera() {
            return this._scanProvider.camera;
          }
          set captureImage(e) {
            this._scanProvider.captureImage = e;
          }
          get captureImage() {
            return this._scanProvider.captureImage;
          }
          set scanPeriod(e) {
            this._scanProvider.scanPeriod = e;
          }
          get scanPeriod() {
            return this._scanProvider.scanPeriod;
          }
          set refractoryPeriod(e) {
            this._scanProvider.refractoryPeriod = e;
          }
          get refractoryPeriod() {
            return this._scanProvider.refractoryPeriod;
          }
          set continuous(e) {
            (this._continuous = e),
              e && "active" === this._fsm.current
                ? this._scanProvider.start()
                : this._scanProvider.stop();
          }
          get continuous() {
            return this._continuous;
          }
          set mirror(e) {
            (this._mirror = e),
              e
                ? ((this.video.style.webkitTransform = "scaleX(-1)"),
                  (this.video.style.transform = "scaleX(-1)"),
                  (this.video.style.filter = "FlipH"))
                : ((this.video.style.webkitTransform = null),
                  (this.video.style.transform = null),
                  (this.video.style.filter = null));
          }
          get mirror() {
            return this._mirror;
          }
          async enableScan() {
            if (!this.camera) throw new Error("Camera is not defined.");
            let e = await this.camera.start();
            if (
              ((this.video.srcObject = e), this.video.play(), this._continuous)
            ) {
              const e = () => {
                this._scanProvider.start(),
                  this.video.removeEventListener("playing", e);
              };
              this.video.addEventListener("playing", e);
            }
          }
          disableScan() {
            (this.video.src = ""),
              this._scanProvider && this._scanProvider.stop(),
              this.camera && this.camera.stop();
          }
          configureVideo(e) {
            if (e.video && "VIDEO" !== e.video.tagName)
              throw new Error("Video must be a <video> element.");
            let t = e.video || document.createElement("video");
            return (
              t.setAttribute("autoplay", ""),
              t.setAttribute("playsinline", ""),
              t.setAttribute("muted", ""),
              t
            );
          }
          createStateMachine() {
            return a.create({
              initial: "stopped",
              events: [
                { name: "start", from: "stopped", to: "started" },
                {
                  name: "stop",
                  from: ["started", "active", "inactive"],
                  to: "stopped",
                },
                {
                  name: "activate",
                  from: ["started", "inactive"],
                  to: ["active", "inactive"],
                  condition: function () {
                    return "visible" === o.state() || this.backgroundScan
                      ? "active"
                      : "inactive";
                  },
                },
                {
                  name: "deactivate",
                  from: ["started", "active"],
                  to: "inactive",
                },
              ],
              callbacks: {
                onenteractive: async () => {
                  await this.enableScan(), this.emit("active");
                },
                onleaveactive: async () => {
                  this.disableScan(), this.emit("inactive");
                },
                onenteredstarted: async () => {
                  await this._fsm.activate();
                },
              },
            });
          }
        };
      },
      {
        "./ScanProvider": 28,
        events: 3,
        "fsm-as-promised": 5,
        visibilityjs: 12,
      },
    ],
    31: [
      function (e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }),
          e("regenerator-runtime/runtime"),
          e("webrtc-adapter");
        const n = e("./Camera");
        r.Camera = n.default;
        const i = e("./Scanner");
        r.Scanner = i.default;
      },
      {
        "./Camera": 27,
        "./Scanner": 29,
        "regenerator-runtime/runtime": 8,
        "webrtc-adapter": 15,
      },
    ],
    32: [
      function (e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 });
        const n = e(".");
        window.Instascan = n;
      },
      { ".": 31 },
    ],
  },
  {},
  [32]
);
