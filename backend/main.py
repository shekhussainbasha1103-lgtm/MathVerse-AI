from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import sympy as sp

app = FastAPI(title="MathVerse AI API", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8081", "http://localhost:19006"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class MathRequest(BaseModel):
    expression: str = Field(min_length=1, max_length=300)

@app.get("/health")
def health():
    return {"status": "ok", "service": "MathVerse AI API"}

@app.post("/api/v1/math/simplify")
def simplify(payload: MathRequest):
    try:
        expr = sp.sympify(payload.expression)
        return {"input": payload.expression, "result": str(sp.simplify(expr))}
    except Exception:
        raise HTTPException(status_code=400, detail="Could not parse this mathematical expression.")

@app.post("/api/v1/math/differentiate")
def differentiate(payload: MathRequest):
    try:
        expr = sp.sympify(payload.expression)
        x = sp.Symbol("x")
        return {"input": payload.expression, "variable": "x", "result": str(sp.diff(expr, x))}
    except Exception:
        raise HTTPException(status_code=400, detail="Could not differentiate this expression.")

@app.post("/api/v1/math/integrate")
def integrate(payload: MathRequest):
    try:
        expr = sp.sympify(payload.expression)
        x = sp.Symbol("x")
        return {"input": payload.expression, "variable": "x", "result": str(sp.integrate(expr, x))}
    except Exception:
        raise HTTPException(status_code=400, detail="Could not integrate this expression.")
